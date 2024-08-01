import { appwriteConfig } from "./AppwriteConfigs";
import { Databases, ID, Client, Storage } from "react-native-appwrite";

const client = new Client();
client
  .setEndpoint(appwriteConfig.endpoint)
  .setProject(appwriteConfig.projectId);

const databases = new Databases(client);

export async function updateCategory(categoryId, updates) {
  try {
    return await databases.updateDocument(
      appwriteConfig.databaseId,
      appwriteConfig.categoriesCollectionId,
      categoryId,
      updates
    );
  } catch (error) {
    console.error("Error updating category:", error);
    throw new Error("Failed to update category.");
  }
}

export async function deleteBookFromCategory(categoryId, bookId) {
  try {
    const category = await databases.getDocument(
      appwriteConfig.databaseId,
      appwriteConfig.categoriesCollectionId,
      categoryId
    );
    const updatedBooks = category.books.filter((id) => id !== bookId);
    return await databases.updateDocument(
      appwriteConfig.databaseId,
      appwriteConfig.categoriesCollectionId,
      categoryId,
      { books: updatedBooks }
    );
  } catch (error) {
    console.error("Error deleting book from category:", error);
    throw new Error("Failed to delete book from category.");
  }
}

export async function deleteCategory(categoryId) {
  try {
    const category = await databases.getDocument(
      appwriteConfig.databaseId,
      appwriteConfig.categoriesCollectionId,
      categoryId
    );

    for (const bookId of category.books) {
      await databases.deleteDocument(
        appwriteConfig.databaseId,
        appwriteConfig.booksCollectionId,
        bookId
      );
    }
    await databases.deleteDocument(
      appwriteConfig.databaseId,
      appwriteConfig.categoriesCollectionId,
      categoryId
    );
  } catch (error) {
    console.error("Error deleting category");
  }
}
