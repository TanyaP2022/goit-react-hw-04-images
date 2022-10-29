import { ImageGalleryStyled } from './ImageGalleryListStyled'
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem'

export default function GalleryList({items, onClick, loadMore}) {
  return (
    <div>
    <ImageGalleryStyled>
      {items.map(item => (
        <ImageGalleryItem
          key={item.id}
          webformatURL={item.webformatURL}
          tags={item.tags}
          largeImageURL={item.largeImageURL}
          onClick={onClick}
        />
    ))}
      </ImageGalleryStyled>
    </div>
  )
}
