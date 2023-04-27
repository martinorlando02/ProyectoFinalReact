import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
// FIRBASE - FIRESTORE
import {
  collection,
  query,
  getDocs,
  where,
  documentId,
} from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";
import CardUser from "../components/CardUser";


const MarcaDetail = () => {
  const [marcaData, setMarcaData] = useState([]);

  let { id } = useParams();

  useEffect(() => {
    const getMarcas = async () => {
      const q = query(collection(db, "marcas"), where(documentId(), "==", id));
      const docs = [];
      const querySnapshot = await getDocs(q);
      // console.log('DATA:', querySnapshot);
      querySnapshot.forEach((doc) => {
        // console.log('DATA:', doc.data(), 'ID:', doc.id);
        docs.push({ ...doc.data(), id: doc.id });
      });
      // console.log(docs);
      setMarcaData(docs);
    };
    getMarcas();
  }, [id]);

  return (
    <div>
      <h1>Album Details</h1>
      {marcaData.map((data) => {
        return <CardUser albumsData={data} key={data.id} />;
      })}
    </div>
  );
};

export default MarcaDetail;
