import { useNavigate } from "react-router-dom";

import Banner from "../../assets/Banner.jpg"
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
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Necessitatibus quae ex quam illum aperiam atque nostrum consequuntur, 
                    illo fuga vel excepturi explicabo similique et minima perspiciatis accusamus enim? Veniam, 
                    maxime?
                </TextContent>
                <Button title="Comneçar agora" variant="secudary" onClick={handleClickSingin} />
            </div>
            <div>
                <img src={Banner} alt="#" width="520" />
            </div>
        </Conteiner>
    </>)
}

export {Home}