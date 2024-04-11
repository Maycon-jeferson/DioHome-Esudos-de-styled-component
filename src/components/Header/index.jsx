import React from 'react'
import logo from '../../assets/Dio-logo.jpg'
import { Button } from '../Button'

import {
    BuscarInputConteiner,
    Conteirner,
    Input,
    Menu,
    MenRight,
    Row,
    Wrapper
} from './styles';

const Header = () => {
  return (
    <Wrapper>
      <Conteirner>
        <Row>
            <img src={logo} alt='DIO' width="32px" />
            <BuscarInputConteiner>
                <Input placeholder='Buscar...'/>
            </BuscarInputConteiner>
            <Menu>Live Code</Menu>
            <Menu>Global</Menu>
        </Row>
        <Row>
            <MenRight href="#">Home</MenRight>
            <Button title="Entrar" />
            <Button title="Cadastrar" />
        </Row>
      </Conteirner>
    </Wrapper>
  )
}

export { Header }