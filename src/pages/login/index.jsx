import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";

import {
    Colunm,
    Conteiner,
    CriarText,
    EsqueciText,
    Row,
    SubTittleLogin,
    Tittle,
    TittleLogin,
    Wrapper
} from "./stye"

const Login = () => {
    return (<>
        <Header />
        <Conteiner>
            <Colunm>
                <Tittle>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto porro re
                </Tittle>
            </Colunm>
            <div>
                <Wrapper>
                    <TittleLogin>
                        cadastro
                    </TittleLogin>
                    <SubTittleLogin>
                        Chage._
                    </SubTittleLogin>
                    <form action="">
                        <Input placeholder="email"/>
                        <Input placeholder="Senha" type="password"/>
                        <Button title="Entrar" variant="secondary"/>
                    </form>
                    <Row>
                        <EsqueciText>Esqueci a senha</EsqueciText>
                        <CriarText>Criar</CriarText>
                    </Row>
                </Wrapper>
            </div>
        </Conteiner>
    </>)
}

export { Login }