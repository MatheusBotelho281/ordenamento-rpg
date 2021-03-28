import { BotaoGrande } from './styles'

export default function Botao(props) {
  return (
    <div>
      <BotaoGrande className='buttom'>{props.NomeBotao}</BotaoGrande>
    </div>
  )
}