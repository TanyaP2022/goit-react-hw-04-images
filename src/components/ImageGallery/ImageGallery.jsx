import React, { Component } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { Loader } from '../Loader/Loader';
import fetchApi from '../Services/FetchApi';
import {IdleStyled} from './ImageGalleryStyled'

import Modal from '../Modal/Modal';
import Button from '../Button/Button'
import GalleryList from '../ImageGalleryList/ImageGalleryList'
import GalleryError from '../ImageGalleryError/ImageGalleryError'


export default class ImageGallery extends Component {
  state = {
    images: [],
    loading: false,
    error: '',
    page: 1,
    status: 'idle',
    contentModal: {
      largeImageURL: '',
      title: '',
    }
  };

  componentDidUpdate(prevProps, prevState) {
    const nextName = this.props.imageName;
    const prevName = prevProps.imageName;
    const nextPage = this.state.page;
    const prevPage = prevState.page;

    if (nextPage > prevPage) {
      this.loadImages(nextName, nextPage);
      return;
    }
    if ((prevName !== nextName) && nextPage === prevPage) {
      this.loadImages(nextName, 1);
      this.setState({
        page: 1,
        status: 'pending'

      })
    }
  }
  
  async loadImages(thisName, thisPage) {
    this.setState({
      loading: true,
    })
    try {
      const result = await fetchApi(thisName, thisPage);
      console.log(result)
      const items = result.hits;
      console.log(items)
      
// присвоєння статусів
      if (items.length === 0) {
        this.setState(() => {
          return {
            status: 'rejected',
          }
        });
      } else {
        this.setState(() => {
          return {
            status: 'resolved'
          }
        });
      }
      // рендер отриманого результату, якщо Ок
      if (thisPage === 1) {
        this.setState(() => {
          return {
            images: [...items],
          }
        });
        console.log('items.length')

      } else {
        this.setState(({ images }) => {
          return {
            images: [...images, ...items]
          }
        });
      }
    } catch (error) {
      console.log('error');
    }
    finally {
      this.setState({
        loading: false,
      })
    }
  }
    
  openModal = (largeImageURL, tags) => {
    this.setState({
      showModal: true,
      contentModal: {
        largeImageURL,
        tags,
      }
    });
  }
  
  closeModal = () => {
  this.setState({
    showModal: false,
    contentModal: {
      largeImageURL: '',
      tags: '',
    }
  });
  }

  loadMore = () => {
    this.setState(({ page }) => {
      return {
        page: page + 1
      }
    });
  }
  
  render() {
    const { images, loading, showModal, contentModal} = this.state;
    const { openModal, closeModal, loadMore } = this;
    const { status} = this.state;
    const { imageName } = this.props;
    const isImages = Boolean(images.length);

    if (status === 'idle') {
      return <IdleStyled>
        <p>Вже чекаю на твій запит</p>
        <img src="https://pixabay.com/get/g15b53ab17e17b2b805f444142f8239a3b2afaacdd80fb4a49d627a90766d6c92b33bf902472591e4ad9a3b425545bbcc371e674b90e79818705957f95638cce3_1280.jpg" alt="beagle"/>
      </IdleStyled>;
    }
    if (status === 'pending') {
      return <div>
              {loading && <Loader />}
            </div>
    }
    if (status === 'rejected') {
      return <IdleStyled>
              <GalleryError imageName={imageName} message="не знайшли, спробуй ще...." />,
              <img src="https://pixabay.com/get/g88f8e681dffc162d35a17f618db2775cc95d2735e790c30d4f0ec070e7481b03297a6be8aab11ed97c02bef78eb2d58e5a98f2a387e8b807a8433c4209c680ed_1280.jpg" alt="beagle"/>
            </IdleStyled>
    }
    if (status === 'resolved') {
      return  <div>
                {images && <GalleryList items={images} onClick={openModal} />}    
                {isImages && <Button text="Load more..." loadMore={loadMore} />}
                {showModal && <Modal onClose={closeModal} content={contentModal }  />}
              </div>
    }
  }
}
