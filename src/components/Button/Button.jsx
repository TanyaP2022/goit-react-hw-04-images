import {ButtonStyled} from './ButtonStyled'

export default function Button({ text, loadMore }) {
    return <ButtonStyled type="button"
        className="button"
        onClick={loadMore}>{text }</ButtonStyled>
}
