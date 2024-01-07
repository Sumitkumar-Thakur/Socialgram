import { Client, Account, Databases, Storage, Avatars } from 'appwrite';

export const appwriteConfig = {
    endpoint: import.meta.env.VITE_APPWRITE_URL, // Your API Endpoint
    projectId: import.meta.env.VITE_APPWRITE_PROJECT_ID, 
    };

export const client = new Client();

client.setProject(appwriteConfig.projectId)
client.setEndpoint(appwriteConfig.endpoint);    

export const account = new Account(client);
export const databses = new Databases(client);
export const storage = new Storage(client);
export const avatars = new Avatars(client);