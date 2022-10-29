import {MessageStyled} from './ImageGalleryErrorStyled'

export default function GalleryError({message, imageName }) {
    return  <MessageStyled><span>"{imageName}"</span> {message}</MessageStyled>
}
