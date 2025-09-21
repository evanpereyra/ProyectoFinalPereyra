import { getFirestore , getDocs , collection , doc , getDoc, addDoc } from "firebase/firestore";
import { db } from "../src/firebase"
import  React, { useEffect , useState } from "react";


const getAll = async () => {
    const query = await getDocs(collection(db, 'orders'))

    const orders = query.docs.map( elem =>{

        return{
             id: elem.id,
             ... elem.data()

        }
           
        
    })
  
    return orders
}

const getById = async (id) => {
    const docRef = doc(db, 'orders', id); 
    const docSnap = await getDoc(docRef); 

      if (docSnap.exists()) {
        return {
          id: docSnap.id,
          ...docSnap.data()
        };
      } else {
        return null;
      }
    }


 
const add = async (orderData) => {
  
  
 
   const docRef = await addDoc(collection(db, 'orders'), orderData);
  
  return docRef
}

const update = () => {}

const remove = () => {}
  

export const order = { getAll , getById , add , update , remove }