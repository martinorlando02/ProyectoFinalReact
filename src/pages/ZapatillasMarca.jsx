import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

// FIRBASE - FIRESTORE
import { collection, query, getDocs, where } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";

import CardUser from "../components/CardUser";
import Navbar from "../components/Navbar";

import { Link } from "react-router-dom";

// COMPONENTS

const ZapatillasMarca = () => {
  const [marcaData, setMarcaData] = useState([]);

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
      setMarcaData(docs);
    };
    getModelos();
  }, [marca]);

  return (
    <div>
      <Navbar />
      <div>
        <h1>Productos</h1>
        {marcaData.map((data) => {
          return (
            <div key={data.id}>
              <Link to={`/item/${data.id}`}>
              <CardUser data={data} />
              </Link>
            </div>
          )
        })}
      </div>
    </div>
  );
};

export default ZapatillasMarca;
