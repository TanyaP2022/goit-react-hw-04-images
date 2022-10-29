import { ImageItemStyled, GalleryItemStyled } from './ImageGalleryItemStyled';


export default function ImageGalleryItem({ id, webformatURL, largeImageURL, tags, onClick }) {
    return <GalleryItemStyled className="gallery-item" key={id} onClick={() => onClick(largeImageURL, tags)}>
                <ImageItemStyled src={webformatURL} alt={tags} />
            </GalleryItemStyled>
}
