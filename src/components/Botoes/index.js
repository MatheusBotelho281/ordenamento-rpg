import { BotaoGrande } from './styles'

export default function Botao(props) {
  return (
    <div>
      <BotaoGrande color={props.color} className='buttom'>{props.NomeBotao}</BotaoGrande>
    </div>
  )
}