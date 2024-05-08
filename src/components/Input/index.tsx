import { Controller } from 'react-hook-form'

import { iInput } from './types'

import {
    IconConteiner,
    InputConteiner,
    InputTest,
    ErrorText
} from './styles'

const Input = ({leftIcon, name, control, errorMessege, ...rest} :iInput) => {
  return (
    <>
      <InputConteiner>
          {leftIcon ? <IconConteiner>{leftIcon}</IconConteiner> : null}
          <Controller 
            name={name}
            control={control}
            rules={{required: true}}
            render={({ field: {value, onChange} }) => (
            <InputTest value={value} onChange={onChange} {...rest}/>)}
          />
      </InputConteiner>
      {errorMessege ? <ErrorText>{errorMessege}</ErrorText> : null}
    </>
  )
}

export { Input }