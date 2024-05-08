import React from 'react'
import { iUserinfo } from './types'

import {
    Container,
    NameText,
    Progress,
    UserPicture,
} from './style'

const UserInfo = ({nome, image, percentual} :iUserinfo) => {
  return (
    <Container>
        <UserPicture src={image}/>
        <div>
            <NameText>{nome}</NameText>
            <Progress percentual={percentual}/>
        </div>
    </Container>
  )
}

export { UserInfo }
