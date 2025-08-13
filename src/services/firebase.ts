// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { firebaseConfig} from "../firebaseConfig.ts";
const app = initializeApp(firebaseConfig);
export const database = getDatabase(app, "https://bostil-be430-default-rtdb.europe-west1.firebasedatabase.app");
