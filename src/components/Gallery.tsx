import "../components/Gallery.css";

const Gallery = () => {
    return (
        <div className="layout">
            <h1 className="titulo">Top 10 figurinhas favoritas</h1>

            <div className="fileira">
                <img src="../../public/cachorro-miope.jpeg" alt="Cachorro Míope" className="img" />
                <img src="../../public/macacos-em-volta-do-pepino.jpeg" alt="Macacos em volta de um pepino" className="img"/>
                <img src="../../public/cachorrinho-triste.jpeg" alt="Cachorrinho Triste" className="img"/>
                <img src="../../public/gato-mc-mirella.jpeg" alt="Gato com a sombracelha da Mc Mirella" className="img"/>
                <img src="../../public/cachorro-shiu.jpeg" alt="Cachorro fazendo 'shiuu'" className="img"/>
            </div>

            <div className="fileira">
                <img src="../../public/anitta-pennywise.jpeg" alt="Anitta Penywise" className="img"/>
                <img src="../../public/cachorrinho-desconfiado.jpeg" alt="Cachorrinho desconfiado" className="img"/>
                <img src="../../public/cachorro-com-cara-de-coitado.jpeg" alt="Cachorrinho coitadolândia" className="img"/>
                <img src="../../public/macaco-seguranca.jpeg" alt="Macaco segurança" className="img"/>
                <img src="../../public/lanse-a-braba.jpeg" alt="Lanse a braba imediatamente" className="img"/>
            </div>
        </div>
    );
}

export default Gallery;