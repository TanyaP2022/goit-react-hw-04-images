import 'react-toastify/dist/ReactToastify.css';
import { Loader } from '../Loader/Loader';
import fetchApi from '../Services/FetchApi';
import {IdleStyled} from './ImageGalleryStyled'

import Modal from '../Modal/Modal';
import Button from '../Button/Button'
import GalleryList from '../ImageGalleryList/ImageGalleryList'
import GalleryError from '../ImageGalleryError/ImageGalleryError'
import { useState, useEffect } from 'react';

const Status = {
  IDLE: 'idle',
  PENDING:'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

export default function ImageGallery() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [status, setStatus] = useState(Status.IDLE);
  const [showModal, setShowModal] = useState(false);
  const [largeImageURL, setLargeImageURL] = useState('');
  const [tags, setTags] = useState('');
  const [imageName, setImageName] =useState('')

  useEffect(() => {
    if (!imageName) {
    setStatus(Status.IDLE);
    }
  }, []);

  useEffect(() => {
    loadImages(imageName, 1);
    setPage(1);
  }, [imageName]);

  useEffect(() => {
    loadImages(imageName, page);
  }, [imageName, page]);

  
  const loadImages = async (thisName, thisPage) => {
    setLoading(true)
    try {
      const result = await fetchApi(thisName, thisPage);
      console.log(result)
      const items = result.hits;
      console.log(items)
      
      // присвоєння статусів
      
      if (items.length === 0 && imageName.length > 0) {
        setStatus(Status.REJECTED)
      }
      if (items.length > 0) {
        setStatus(Status.RESOLVED)
      }
      // рендер отриманого результату, якщо Ок
      if (thisPage === 1) {
        setImages([...items])
      } else {
        setImages(prev=>[...prev, ...items])
      }
    } catch (error) {
      console.log('error');
    }
    finally {
      setLoading(false)
    }
    };
  
  const openModal = (largeImageURL, tags) => {
    setShowModal(true);
    setLargeImageURL(largeImageURL);
    setTags(tags);
  };
  
  const closeModal = () => {
    setShowModal(false);
    setLargeImageURL('');
    setTags('');
  };

  const loadMore = () => {
    setPage(prevPage => prevPage + 1)
  };
  
    const isImages = Boolean(images.length);

    if (status === Status.IDLE) {
      return <IdleStyled>
        <p>Вже чекаю на твій запит</p>
        <img src="https://pixabay.com/get/ga7f08c360329f06ced6e1c838b2945258d635b5efd2ac21529ddfb1da6145b0860aef1f32399ebe2fe3e2c8737aabae8_640.jpg" alt="beagle"/>
      </IdleStyled>;
    }
    if (status === Status.PENDING) {
      return <div>
              {loading && <Loader />}
            </div>
    }
    if (status === Status.REJECTED) {
      return <IdleStyled>
              <GalleryError imageName={imageName} message="не знайшли, спробуй ще...." />,
              <img src="https://pixabay.com/get/gc54ee015018d1252101896baceaf13428e04d1792e094e1caf1d129aad7310250741ee4ea1018d5a21614d6805b85e3ca0c2bc5c0e8cb26c30e3d7509c629dd4_640.jpg" alt="beagle"/>
            </IdleStyled>
    }
    if (status === Status.RESOLVED) {
      return  <div>
                {images && <GalleryList items={images} onClick={openModal} />}    
                {isImages && <Button text="Load more..." loadMore={loadMore} />}
                {showModal && <Modal onClose={closeModal} largeImageURL={largeImageURL} tags={tags} />}
              </div>
    }
  }
