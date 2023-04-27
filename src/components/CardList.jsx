import React from 'react'
import { useState, useEffect } from "react";
import { db } from "../firebase/firebaseConfig"
import { collection, query, getDocs,} from "firebase/firestore";
import CardUser from './CardUser';
import { Link } from "react-router-dom";

const CardList = () => {

    const [marcas, setMarcas] = useState([])

    const q = query(collection(db, "marcas"))

    useEffect(() => {
        const getMarcas = async () => {
            const querySnapshot = await getDocs(q);
            const docs = []
            querySnapshot.forEach((doc) => {
                docs.push({ ...doc.data(), id: doc.id })
            })
            setMarcas(docs)
        }
        getMarcas()
    }, [q])

    return (
        <div className="grid grid-cols-3 gap-4 w-[80%] mx-auto m-4">
            {marcas.map((marcas) => {
                return (
                    <div key={marcas.nombre}>
                        <Link to={`/item/${marcas.id}`}>
                            <div className=''>
                                <CardUser data={marcas} />
                            </div>
                        </Link>
                    </div>
                );
            })}
        </div>
    );
};

export default CardList;