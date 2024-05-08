import { useNavigate } from "react-router-dom";

import Banner from "../../assets/Banner.png"
import { Button } from "../../components/Button";
import { Header } from "../../components/Header/index";

import {
    Conteiner, TextContent, Tittle, TittleHighLight
} from "./stye"

const Home = () => {

    const navigate = useNavigate();

    const handleClickSingin = () => {
        navigate('/login')
    }

    return (<>
        <Header />
        <Conteiner>
            <div>
                <Tittle>
                    <TittleHighLight>
                        Implemente<br /> 
                    </TittleHighLight>
                    o seu futuro global agora!
                </Tittle>
                <TextContent>
                    Domine as tecnologias utilizadas pelas empresas mais inovadoras do mundo e encare seu novo desafio profissional, evoluindo em comunidade com os melhores experts.
                </TextContent>
                <Button title="Comneçar agora" variant="secudary" onClick={handleClickSingin} />
            </div>
            <div>
                <img src={Banner} alt="#"/>
            </div>
        </Conteiner>
    </>)
}

export {Home}