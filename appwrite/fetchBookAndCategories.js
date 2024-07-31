import { appwriteConfig } from "./AppwriteConfigs";
import { Databases, ID, Client, Storage } from "react-native-appwrite";

const client = new Client();
client
  .setEndpoint(appwriteConfig.endpoint)
  .setProject(appwriteConfig.projectId);

const databases = new Databases(client);

export async function fetchCategories() {
  try {
    const response = await databases.listDocuments(
      appwriteConfig.databaseId,
      appwriteConfig.categoriesCollectionId
    );

    return await Promise.all(
      response.documents.map(async (category) => {
        const books = await Promise.all(
          category.books.map(async (bookId) => {
            try {
              return await databases.getDocument(
                appwriteConfig.databaseId,
                appwriteConfig.booksCollectionId,
                bookId
              );
            } catch (error) {
              console.error(`Failed to fetch book with ID ${bookId}:`, error);
              return null;
            }
          })
        );
        return { ...category, books: books.filter(Boolean) };
      })
    );
  } catch (error) {
    console.error("Error fetching categories:", error);
    throw new Error("Failed to fetch categories.");
  }
}
