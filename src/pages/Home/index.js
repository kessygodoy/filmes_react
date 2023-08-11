import { useEffect, useState } from "react"
import api from "../../services/api";

//URL DA API: /movie/now_playing?api_key=7584b297a707d572723b2d6d1b8ca2af

function Home() {
    const [filmes, setFilmes] = useState([]);

    useEffect(() => {
        async function loadFilmes() {
            const response = await api.get("movie/now_playing", {
                params: {
                    api_key: "7584b297a707d572723b2d6d1b8ca2af",
                    language: 'pt-BR',
                    page: 1,
                }
            })
            console.log(response.data.results)
        }
        loadFilmes();
    }, [])

   

    return (
        <div>
            <h1>BEM VINDO A HOME</h1>
        </div>
    )
}

export default Home