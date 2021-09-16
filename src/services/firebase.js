import { initializeApp } from "firebase/app"
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyB1KEDE9zd48wB_-KHaaPmeHEJzgeJlkFc",
  authDomain: "reactposts-226c1.firebaseapp.com",
  projectId: "reactposts-226c1",
  storageBucket: "reactposts-226c1.appspot.com",
  messagingSenderId: "692365706318",
  appId: "1:692365706318:web:25c5dc4b7ec01ac6f36f1f"
};

const app = initializeApp(firebaseConfig);

export const db = getDatabase();