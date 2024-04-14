import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from 'yup';

import { useNavigate } from "react-router-dom";

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

const schema = yup.object({
    email: yup.string().email('email invalido').required("campo obrigatorio"),
    password: yup.string().min(3, '3 no minimo').required("campo obrigatorio"),
}).required();

const Login = () => {

    const navigate = useNavigate();

    const {
        control,
        handleSubmit,
        formState: { errors, isValid }
      } = useForm({
        resolver: yupResolver(schema),
        mode: 'onChange',
      });
      console.log(isValid, errors);

      const onSubmit = (data) => console.log(data)

    const handleClickSingin = () => {
        navigate('/feed')
    }

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
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Input name="email" errorMessege={errors?.email?.message} control={control} placeholder="email" />
                        <Input name="password" errorMessege={errors?.password?.message} control={control} placeholder="Senha" type="password" />
                        <Button title="Entrar" variant="secondary" onClick={handleClickSingin} type="submit" />
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