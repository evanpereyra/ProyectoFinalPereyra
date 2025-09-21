import { getFirestore , getDocs , collection , doc , getDoc, updateDoc} from "firebase/firestore";
import { db } from "../src/firebase"
import  React, { useEffect , useState } from "react";


const getAll = async () => {
    const query = await getDocs(collection(db, 'item'))

    const items = query.docs.map( elem =>{

        return{
             id: elem.id,
             ... elem.data()

        }
           
        
    })

   // console.log(items)
    return items
}

const getById = async (id) => {
    const docRef = doc(db, 'item', id); // Crea la referencia al documento
    const docSnap = await getDoc(docRef); // Obtiene el documento

      if (docSnap.exists()) {
        return {
          id: docSnap.id,
          ...docSnap.data()
        };
      } else {
        return null;
      }
    }


 
const add = () => {}

const update = async (idDocumento,  valor) => {
      const docRef = doc(db, 'item', idDocumento); // Crea una referencia al documento
      await updateDoc(docRef, {
        stock: valor // Usa el corchete para pasar el nombre de la variable como clave
      });
      console.log("Campo actualizado correctamente.");

    }     

const remove = () => {}
  

export const items = { getAll , getById , add , update , remove }

