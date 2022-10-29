import { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';

class App extends Component {
  state = {
    imageName: '',
  }
  hendleSubmit = imageName => {
    this.setState({ imageName });
  };
  render() {
    const { hendleSubmit } = this;
    const { imageName } = this.state;
    return (
      <div className="App">
        <Searchbar onSubmit={hendleSubmit} />
        <ImageGallery imageName={imageName} />
        <ToastContainer
          position="top-center"
          autoClose={2000}
        />
      </div>
  );
  }
};

export default App;