// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, doc, getDoc, addDoc, query, Timestamp, collection, getDocs, where } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyDMJSN0LRjkodusOu0UlsBnIU1JwQBoU-M",
  authDomain: "airnet-c6a17.firebaseapp.com",
  projectId: "airnet-c6a17",
  storageBucket: "airnet-c6a17.appspot.com",
  messagingSenderId: "893144980230",
  appId: "1:893144980230:web:f9ecf837acdec6d5155c87"
};

const app = initializeApp(firebaseConfig);

export const firestoreDB = getFirestore(app);

export async function getAllProducts() {
    const miColecc = collection (firestoreDB, 'products');
    const productsSnap = await getDocs(miColecc);

    return productsSnap.docs.map( products => products.data());
}


export async function getAllProductsFromCat(category) {
    const miColecc = collection (firestoreDB, 'products');
    const myquery = query(miColecc, where ("category", "==", category) );
    const productsSnap = await getDocs(myquery);

    return productsSnap.docs.map( products => products.data());
}


export async function getProducts(id) {
    const idNumber = Number(id);
    const miColecc = collection (firestoreDB, 'products');
    const myquery= query(miColecc, where("id", "==", idNumber));
    const resultadoDoc = await getDocs(myquery);

    return resultadoDoc.docs[0].data();
}

export async function sendBuyOrder(order) {
    const fecha = Timestamp.now();
    const orderWithDate = {...order, timestamp: fecha};
    

    const miColecc = collection (firestoreDB, 'orders');
    const orderDoc = await addDoc(miColecc, orderWithDate);
    return orderDoc.id;
    
    
    
}