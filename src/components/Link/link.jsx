import { useLocation } from 'react-router-dom';
import React, { useState, useEffect } from "react";
import api from "../../api";
import Loading from '../Loading/loading';
import Header from '../Header/header';
import './link.css'
import { motion } from "framer-motion"

function condicaoArteResp(itens) {
    if (itens.respiracao == null && itens.arte == null){
        return (
            "Não tem nenhuma arte demoníaca e nenhuma respiração 😪"
        )
    }

    else if (itens.respiracao == null) {
        return (
            `Arte Demoníaca: ${itens.arte}`
        )
    }

    else if (itens.arte == null) {
        return (
            `Respiração: ${itens.respiracao}`
        )
    }

    else if (itens.arte != null && itens.respiracao != null) {
        return (
            `Poderes: Respiração da ${itens.respiracao} e arte demoníaca ${itens.arte}`
        )
    }  

}

function condicaoidade(itens) { 
    if (itens.idade == null) {
        return (
            "Idade não encontrada 😪"
        )
    }

    else {
        return (
            `Idade: ${itens.idade} anos`
        )
    }
}

function condicaoRank(itens) {
    if (itens.rank != null ){
        return (
            `Rank:  ${itens.rank}`
        )
    }

    else if (itens.rank == null) {
        return (
            "Não tem nenhum rank 😪"
        )
    }
}

const Link = () => {
    const location = useLocation();
    const name = location.search.split("=")[1]

    const [itens, setItens] = useState([])

    useEffect(() => {
        api.get(`/search/${name}`).then((response) => {
            if (response.data.length === 0) {
                <p>Não encontrado</p>
            }

            setItens (
                response.data[0]
            )
        }) 
    }, [name]);

    if (itens.length === 0) {
        return <Loading />
    }
    else 
    return (
        <>
            <Header />
            <div class="custom-shape-divider-bottom-1664241250">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" class="shape-fill"></path>
                    <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" class="shape-fill"></path>
                    <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" class="shape-fill"></path>
                </svg>
            </div>
            <div className='div'>
                <motion.section whileHover={{ scale: 1.03 , transition: { duration: 0.3 }}} className='about'>
                    <h1>{itens.nome}</h1>
                    <img src={itens.gif == null ? itens.imagem : itens.gif} alt='Gif do personagem'></img>
                    <p>{condicaoidade(itens)}</p>
                    <p>{condicaoArteResp(itens)}</p>
                    <p>{condicaoRank(itens)}</p>
                    <p>Gênero: {itens.genero}</p>
                    <p>Raça: {itens.raca}</p>
                    <p>Personalidade: {itens.personalidade}</p>
                </motion.section>
            </div>
        </>
    )
}
 
export default Link;

