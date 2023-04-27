import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

// FIRBASE - FIRESTORE
import { collection, query, getDocs, where } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";

import CardUser from "../components/CardUser";

// COMPONENTS

const Zapatillas = () => {
  const [modeloData, setModeloData] = useState([]);

  let { marca } = useParams();

  useEffect(() => {
    const getModelos = async () => {
      const q = query(collection(db, "marcas"), where("marca", "==", marca));
      const docs = [];
      const querySnapshot = await getDocs(q);
      // console.log('DATA:', querySnapshot);
      querySnapshot.forEach((doc) => {
        // console.log('DATA:', doc.data(), 'ID:', doc.id);
        docs.push({ ...doc.data(), id: doc.id });
      });
      // console.log(docs);
      setModeloData(docs);
    };
    getModelos();
  }, [marca]);

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <h1>Albums by Music Genre</h1>
      {modeloData.map((data) => {
        return <CardUser albumsData={data} key={data.id} />;
      })}
    </div>
  );
};

export default Zapatillas;
