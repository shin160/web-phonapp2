// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "...",
  authDomain: "...",
  projectId: "phonapp2-21315",
  storageBucket: "phonapp2-21315.appspot.com", // ★これ必須
  messagingSenderId: "...",
  appId: "..."
};

const app = initializeApp(firebaseConfig);

// ★2通りどっちでもOK（下の行が一番確実）
export const storage = getStorage(app, firebaseConfig.storageBucket);
// export const storage = getStorage(app);

export default app;
