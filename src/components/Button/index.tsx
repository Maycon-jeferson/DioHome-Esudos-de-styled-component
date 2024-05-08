import { ButtonContainer } from './style';
import {iButton} from './types'

const Button = ({title, variant="primary", onClick}:iButton) => {
  return (
    <ButtonContainer variant={variant} onClick={onClick}>
      {title}
    </ButtonContainer>
  )
}

export { Button }