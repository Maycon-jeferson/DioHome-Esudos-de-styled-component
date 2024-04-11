import { Link } from "react-router-dom";
import Banner from "../../assets/Banner.jpg"

import { Button } from "../../components/Button";
import { Header } from "../../components/Header/index";
import { Card } from "../../components/Card"

import {
    Conteiner, TextContent, Tittle, TittleHighLight
} from "./stye"

const Feed = () => {
    return (<>
        <Header />
        <Conteiner>
            <Card />
        </Conteiner>
    </>)
}

export {Feed}