import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyC7HoNB-BBe8M1PGEDp6HDbafbiODbA3oA",
  authDomain: "socialnetwork-dab7c.firebaseapp.com",
  projectId: "socialnetwork-dab7c",
  storageBucket: "socialnetwork-dab7c.appspot.com",
  messagingSenderId: "48916979434",
  appId: "1:48916979434:web:f52a67aa1ce4f82afc8193",
  measurementId: "G-G5WWDZRVGK",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function getPosts(db: any) {
  const citiesCol = collection(db, "Posts");
  const citySnapshot = await getDocs(citiesCol);
  const cityList = citySnapshot.docs.map((doc) => doc.data());
  return cityList;
}
export { db, getPosts };
