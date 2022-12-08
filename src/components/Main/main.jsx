import React, { useEffect, useState } from "react";
import api from "../../api";
import Loading from "../Loading/loading";
import './main.css'
import { ForCards, sortearNum } from "../../Utils/utils.jsx"; 
import "../../Utils/utils.css";
import "./search.css"

export default function Main() {
    const [itens, setItens] = useState([])
    const [primeiroItem, setPrimeiroItem] = useState(null)
    const [nenhumResultado, setNenhumResultado] = useState(false)

    const search = (e) => {
        const value = e.target.value
        let ForCard = []

        if (value !== "") {
            api.get(`/search/${value}`).then((response) => {
                if (response.data.length === 0) {
                    setNenhumResultado(true)
                }

                for(let i = 0; i < response.data.length; i++) {
                    ForCard.push (
                        ForCards(response.data, i)
                    )
                }
                setItens(ForCard)
            })  
        }
        if (value === "") {
            setNenhumResultado(false)
            api.get()
            .then((response) => {
                setPrimeiroItem({
                    sinopse: response.data[0].sinopse, 
                    autora: response.data[0].autora,
                    ano: response.data[0].ano
                }) 
                for(let i = 1; i < response.data.length; i++) {
                    ForCard.push (
                        ForCards(response.data, i)
                    )
                }
                setItens(ForCard)
            })
        }
    }
    

    useEffect(() => {
        var ForCard = []
        api.get()
        .then((response) => {
            var listNum = []
            setPrimeiroItem({
                sinopse: response.data[0].sinopse, 
                autora: response.data[0].autora,
                ano: response.data[0].ano
            }) 
            for(let i = 1; i < response.data.length; i++) {
                let num = sortearNum(response.data.length, listNum)
                listNum.push(num)
                ForCard.push (
                    ForCards(response.data, num)
                )
            }
            setItens(ForCard)
        })
    }, []);

    if (itens.length === 0 && !nenhumResultado) {
        return <Loading />
    }
    else 
    return (
        <div className="main">
            <div className="sinopse">
                <h1>Sinopse de Demon Slayer</h1>
                <p>{primeiroItem.sinopse}</p>
                <h2>Autora</h2>
                <p>{primeiroItem.autora}</p>
                <h2>Ano de criação</h2>
                <p>{primeiroItem.ano}</p>
            </div>
                {
                    nenhumResultado ? 
                    <p className="resultado">Nenhum personagem encontrado 😪</p> 
                    :
                    itens.length !== 0
                    ?
                    <div className="container">{itens}</div>
                    : 
                    ""
                } 
            <div className="search">
                <input type="text" onChange={search} placeholder='Pesquise por seu personagem...' maxLength={30}></input>
            </div>
        </div>
    )
}