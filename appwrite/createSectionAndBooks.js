import { appwriteConfig } from "./AppwriteConfigs";
import { Databases, ID, Client, Storage } from "react-native-appwrite";
import { async } from "./../api/createSection";

const client = new Client();
client
  .setEndpoint(appwriteConfig.endpoint)
  .setProject(appwriteConfig.projectId);

const databases = new Databases(client);
const storage = new Storage(client);

// HELPER FUNCTIONS

// create book image

// create file with fetch request

async function uploadImage(file) {
  console.log("started");
  const match = /\.(\w+)$/.exec(file.uri);
  const type = match ? `image/${match[1]}` : `image`;
  let form = new FormData();
  form.append("fileId", "unique()");
  form.append("file", { ...file, type });
  form.append("permission[]", "any");

  try {
    console.log("request");
    const response = await fetch(
      `${appwriteConfig.endpoint}/storage/buckets/${appwriteConfig.storageId}/files`,
      {
        method: "POST", // or 'PUT'
        headers: {
          ...appwriteConfig.headers,
          "Content-Type": "multipart/form-data;",
        },
        body: form,
      }
    );
    console.log(response.status);
    return response.json();
  } catch (e) {
    console.error("error", e);
  }
}

async function getFilePreview(fileId, type) {
  try {
    if (type === "image") {
      const fileUrl = storage.getFilePreview(appwriteConfig.storageId, fileId, {
        width: 2000,
        height: 2000,
        gravity: "top",
        quality: 100,
      });
      return fileUrl;
    } else {
      throw new Error("Invalid type");
    }
  } catch (error) {
    console.error("Error getting file preview:", error);
    throw new Error(error.message);
  }
}

// Upload
async function uploadFile(file, type) {
  if (!file) return;
  const { mimeType, ...rest } = file;
  const asset = { type: mimeType, ...rest };
  try {
    const uploadedFile = await storage.createFile(
      appwriteConfig.storageId,
      ID.unique(),
      asset
    );
    const fileUrl = await getFilePreview(uploadedFile["$id"], type);

    return fileUrl;
  } catch (error) {
    console.error("Error uploading file:", error);
    throw new Error(error.message);
  }
}

// Function to create a category and books
export async function createCategoryAndBooks(categoryName, books) {
  try {
    // Create the category
    const newCategory = await databases.createDocument(
      appwriteConfig.databaseId,
      appwriteConfig.categoriesCollectionId,
      ID.unique(),
      {
        sectionname: categoryName,
        books: [],
      }
    );

    // newCategory=JSON.parse(JSON.stringify(newCategory))
    // Create the books and link them to the category
    const bookIds = []; // To store IDs of created books

    for (const book of books) {
      const thumbnailUrl = await uploadFile(book.thumbnail, "image");
      const newBook = await databases.createDocument(
        appwriteConfig.databaseId,
        appwriteConfig.booksCollectionId,
        ID.unique(),
        {
          author: book.author,
          available: book.available,
          copies: book.copies,
          thumbnail: thumbnailUrl, // Ensure this is a proper URI or file reference
          published_year: book.published_year,
          raters: parseInt(book.raters, 10),
          rating: parseFloat(book.rating),
          title: book.title,
          categories: [newCategory["$id"]],
        }
      );

      bookIds.push(newBook["$id"]); // Collect the book IDs
    }

    // Update the category with the new books' IDs
    await databases.updateDocument(
      appwriteConfig.databaseId,
      appwriteConfig.categoriesCollectionId,
      newCategory["$id"],
      { books: bookIds }
    );

    return newCategory;
  } catch (error) {
    console.error("Error creating category and books:", error);
    throw new Error(error.message);
  }
}

export async function addBooksToCategory(categoryId, books) {
  // get category from id
  try {
    const category = await databases.getDocument(
      appwriteConfig.databaseId,
      appwriteConfig.categoriesCollectionId,
      categoryId
    );
    console.log(category);
    // create books and upload url
    const bookIds = []; // To store IDs of created books
    for (const book of books) {
      const thumbnailUrl = await uploadFile(book.thumbnail, "image");
      const newBook = await databases.createDocument(
        appwriteConfig.databaseId,
        appwriteConfig.booksCollectionId,
        ID.unique(),
        {
          author: book.author,
          available: book.available,
          copies: book.copies,
          thumbnail: thumbnailUrl, // Ensure this is a proper URI or file reference
          published_year: book.published_year,
          raters: parseInt(book.raters, 10),
          rating: parseFloat(book.rating),
          title: book.title,
          categories: [categoryId],
        }
      );

      bookIds.push(newBook["$id"]); // Collect the book IDs
    }
    // Update the category with the new books' IDs
    const updatedBooks = [...category.books, ...bookIds];
    await databases.updateDocument(
      appwriteConfig.databaseId,
      appwriteConfig.categoriesCollectionId,
      categoryId,
      { books: updatedBooks }
    );
  } catch (error) {
    console.error("Error adding book to category:", error);
    throw new Error("Failed to add book to category.");
  }
}
