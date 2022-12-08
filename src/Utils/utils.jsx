import { motion } from "framer-motion";
import { Link } from 'react-router-dom';

export function sortearNum(range, listNum) {
    let num = Math.floor(Math.random() * (range -1)+1)

    while (listNum.indexOf(num) > -1){
        num = Math.floor(Math.random() * (range -1)+1)
    }
    listNum.push(num)
    return num
}


function condicaoArteResp(posts, i) {
    if (posts[i].respiracao == null && posts[i].arte == null){
        return (
            "Não tem nenhuma arte demoníaca e nenhuma respiração 😪"
        )
    }

    else if (posts[i].respiracao == null) {
        return (
            `Arte Demoníaca: ${posts[i].arte}`
        )
    }

    else if (posts[i].arte == null) {
        return (
            `Respiração: ${posts[i].respiracao}`
        )
    }

    else if (posts[i].arte != null && posts[i].respiracao != null) {
        return (
            `Poderes: Respiração da ${posts[i].respiracao} e arte demoníaca ${posts[i].arte}`
        )
    }  

}

function condicaoidade(posts, i) { 
    if (posts[i].idade == null) {
        return (
            "Idade não encontrada 😪"
        )
    }

    else {
        return (
            `Idade: ${posts[i].idade} anos`
        )
    }
}

function condicaoRank(posts, i) {
    if (posts[i].rank != null ){
        return (
            `Rank:  ${posts[i].rank}`
        )
    }

    else if (posts[i].rank == null) {
        return (
            "Não tem nenhum rank 😪"
        )
    }
}


export function ForCards(posts, i) {
    var Item =           
        <motion.div className="cards" 
        whileHover={{ scale: 1.05 , 
        transition: { duration: 0.1 }}} 
        whileTap={{ scale: 0.9 }} 
        initial={{ opacity: 0}} 
        whileInView={{ opacity: 1, 
        transition: { duration: 0.2 }}}
        viewport={{ once: true }}>
            
            <Link to={"/Wiki-Kimetsu-No-Yaiba/search?name=" + posts[i].nome} key={i}>
                <div className="text-wrap">
                    <h1>{posts[i].nome}</h1>
                    <p>Raça: {posts[i].raca}</p>
                    <p>{condicaoArteResp(posts, i)}</p>
                    <p>{condicaoRank(posts, i)}</p>
                    <p>Gênero: {posts[i].genero}</p>
                    <p>{condicaoidade(posts, i)}</p>
                </div>
                <div className="img-wrap">
                    <img src={posts[i].gif == null ? posts[i].imagem : posts[i].gif}  alt="Imagem Card"></img>
                </div>
            </Link>
        </motion.div>
     return Item; 
}