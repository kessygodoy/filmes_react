import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import './filme.css'
import api from '../../services/api';

function Filme() {
    const { id } = useParams(); 
    const [filme, setFilme] = useState({})
    const [loading, setLoading]= useState (true)


    useEffect(() => {
        async function loadFilme() {
            await api.get(`/movie/${id}`, {
                params: {
                    api_key: "7584b297a707d572723b2d6d1b8ca2af",
                    language: 'pt-BR',
                }
            })
                .then((response) => {
                    setFilme(response.data);
                    setLoading(false);
                })
                .catch(() => {
                console.log("Filme nao encontrado")
            })
        }

        loadFilme();

        return () => {
            console.log("COMPONENTE FOI DESMONTADO")
        }
    }, [])
    
    if (loading) {
        return (
            <div>
                <h1>Carregando detalhes...</h1>
            </div>
        )
    }

    return (
        <div className='filme-info'>
            <h1>{filme.title}</h1>
            <img src={`https://image.tmdb.org/t/p/original/${filme.backdrop_path}`} alt={filme.title}></img>

            <h3>Sinopse</h3>
            <span>{filme.overview}</span>
            <strong>Avaliação: {filme.vote_average} / 10</strong>

            <div className='area-buttons'>
                <button>Salvar</button>
                <button>
                    <a hrf="#">
                        Trailer
                    </a>
                </button>
            </div>
        </div>
    )
}

export default Filme