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
    Wrapper,
    UserPicture
} from './styles';

const Header = ({autenticado}) => {
  return (
    <Wrapper>
      <Conteirner>
        <Row>
            <img src={logo} alt='DIO' width="32px" />
            {autenticado? (
              <>
                <BuscarInputConteiner>
                <Input placeholder='Buscar...'/>
                </BuscarInputConteiner>
                <Menu>Live Code</Menu>
                <Menu>Global</Menu>
              </>
            ): null }
            
        </Row>
        <Row>
        {autenticado ? (
            <UserPicture src='https://avatars.githubusercontent.com/u/148920537?v=4' />
          ) : (
            <>
              <MenRight href="#">Home</MenRight>
              <Button title="Entrar" />
              <Button title="Cadastrar" />
            </>
          )
        }
            
        </Row>
      </Conteirner>
    </Wrapper>
  )
}

export { Header }