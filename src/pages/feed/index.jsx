import { Link } from "react-router-dom";

import { Header } from "../../components/Header/index";
import { Card } from "../../components/Card"
import { UserInfo } from "../../components/UserInfo"

import {
    Container,
    Column,
    Title,
    Titleighlight,
} from "./stye"

const Feed = () => {
    return (<>
        <Header autenticado={true}/>
        <Container>
            <Column flex={3}>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </Column>
            <Column flex={1}>
                <Titleighlight># RANK</Titleighlight>
                <UserInfo percentual={80} nome="Maycon Jeferson" image="https://avatars.githubusercontent.com/u/148920537?v=4" />
                <UserInfo percentual={23} nome="Maycon Jeferson" image="https://avatars.githubusercontent.com/u/148920537?v=4" />
                <UserInfo percentual={44} nome="Maycon Jeferson" image="https://avatars.githubusercontent.com/u/148920537?v=4" />
                <UserInfo percentual={12} nome="Maycon Jeferson" image="https://avatars.githubusercontent.com/u/148920537?v=4" />
                <UserInfo percentual={67} nome="Maycon Jeferson" image="https://avatars.githubusercontent.com/u/148920537?v=4" />
                <UserInfo percentual={50} nome="Maycon Jeferson" image="https://avatars.githubusercontent.com/u/148920537?v=4" />
                <UserInfo percentual={30} nome="Maycon Jeferson" image="https://avatars.githubusercontent.com/u/148920537?v=4" />
            </Column >
        </Container>
    </>)
}

export {Feed}