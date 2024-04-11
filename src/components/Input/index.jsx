import React from 'react'

import {
    IconConteiner,
    InputConteiner,
    InputTest
} from './styles'

const Input = ({leftIcon, name, ...rest}) => {
  return (
    <InputConteiner>
        {leftIcon ? <IconConteiner>{leftIcon}</IconConteiner> : null}
        <InputTest {...rest}/>
    </InputConteiner>
  )
}

export { Input }