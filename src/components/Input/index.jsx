import React from 'react'
import { Controller } from 'react-hook-form'

import {
    IconConteiner,
    InputConteiner,
    InputTest,
    ErrorText
} from './styles'

const Input = ({leftIcon, name, control, errorMessege, ...rest}) => {
  return (
    <>
      <InputConteiner>
          {leftIcon ? <IconConteiner>{leftIcon}</IconConteiner> : null}
          <Controller 
            name={name}
            control={control}
            rules={{require: true}}
            render={({ field }) => <InputTest {...field} {...rest}/>}
          />
      </InputConteiner>
      {errorMessege ? <ErrorText>{errorMessege}</ErrorText> : null}
    </>
  )
}

export { Input }