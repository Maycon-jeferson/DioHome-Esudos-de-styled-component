import React from 'react'

import {
    CardConteiner,
    Content,
    HasInfo,
    ImageBackground,
    PostInfo,
    UserInfo,
    UserPicture,
} from './styles'

const Card = () => {
  return (
    <CardConteiner>
      <ImageBackground />
      <Content>
        <UserInfo>
            <UserPicture src='https://avatars.githubusercontent.com/u/148920537?v=4'/>
            <div>
            <h4>Maycon</h4>
            <p>tempo</p>
            </div>
        </UserInfo>
        <PostInfo>
            <h4>projeto para cusrso de html e css</h4>
            <p>Projeto foito com html e css Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus repellat deserunt id reprehenderit.<strong> Saiba Mais</strong></p>
        </PostInfo>
        <HasInfo>
            <h4># html #css #javascript</h4>
            <p>
                10
            </p>
        </HasInfo>
      </Content>
    </CardConteiner>
  )
}

export { Card }