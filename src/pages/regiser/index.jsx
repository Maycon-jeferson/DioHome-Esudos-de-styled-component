import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from 'yup';

import { useNavigate } from "react-router-dom";
import { api } from '../../services/api'

import {
    Colunm,
    Conteiner,
    Rowtext,
    Row,
    SubTittleLogin,
    Tittle,
    TittleLogin,
    Wrapper,
    LoginText
} from "./stye"

const schema = yup.object({
    email: yup.string().email('email invalido').required("*campo obrigatorio"),
    password: yup.string().min(3, '3 no minimo').required("*campo obrigatorio"),
    nome: yup.string().required("*campo obrigatorio")
}).required();

const Register = () => {

    const navigate = useNavigate();

    const {
        control,
        handleSubmit,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(schema),
        mode: 'onChange',
        });

    const onSubmit = async formData => {
        try{
            const { data } = await api.get(`users?email=${formData.email}&senha=${formData.password}`);
            if(data.length === 1){
                navigate('/feed')
            }else{
                alert('senha ou email errado')
            }
        }catch{
            alert('erro tende denovo')
        }
    };

    return (<>
        <Header />
        <Conteiner>
            <Colunm>
                <Tittle>
                A plataforma para você aprender com experts, dominar as principais tecnologias e entrar mais rápido nas empresas mais desejadas.
                </Tittle>
            </Colunm>
            <div>
                <Wrapper>
                    <TittleLogin>
                        Comece agora grátis
                    </TittleLogin>
                    <SubTittleLogin>
                        Crie sua conta e make the change._
                    </SubTittleLogin>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Input name="nome" errorMessege={errors?.nome?.message} control={control} placeholder="Nome completo" />

                        <Input name="email" errorMessege={errors?.email?.message} control={control} placeholder="email" />

                        <Input name="password" errorMessege={errors?.password?.message} control={control} placeholder="Senha" type="password" />

                        <Button title="Criar minha conta" variant="secondary"  type="submit" />
                    </form>
                    <SubTittleLogin>
                        Ao clicar em "criar minha conta grátis", declaro que aceito as Políticas de Privacidade e os Termos de Uso da DIO.
                    </SubTittleLogin>
                    <Row>
                     <Rowtext>Já tenho conta. <LoginText href="./login">Fazer login</LoginText></Rowtext>
                    </Row>
                </Wrapper>
            </div>
        </Conteiner>
    </>)
}

export { Register }