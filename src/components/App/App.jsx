import React, { Component } from 'react';
import Searchbar from 'components/Searchbar/Searchbar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import ImageGallery from 'components/ImageGallery/ImageGallery';
import Button from 'components/Button/Button';
import { AppWrapper } from './App.styled';
import Loader from 'components/Loader/Loader';

export default class App extends Component {
  APP_KEY = '8185021-24268e96be1b2c00462570825';
  state = {
    query: '',
    hits: null,
    page: 1,
    loader: false,
  };
  async componentDidUpdate(_, prevState) {
    if (
      prevState.page !== this.state.page ||
      prevState.query !== this.state.query
    ) {
      this.setState({
        loader: true,
      });
      try {
        const response = await axios.get(
          `https://pixabay.com/api/?q=${this.state.query}&page=${this.state.page}&key=${this.APP_KEY}&image_type=photo&orientation=horizontal&per_page=12`
        );

        this.setState({
          hits: response.data.hits,
          loader: false,
        });
      } catch (error) {
        console.log(error);
      }
    }
  }
  handleSearchQuery = query => {
    this.setState({
      query,
      page: 1,
    });
  };
  handleLoadMoreBtn = () => {
    this.setState(prev => {
      return { page: prev.page + 1 };
    });
  };

  render() {
    return (
      <AppWrapper>
        <ToastContainer
          position="top-left"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
        <Searchbar onSubmit={this.handleSearchQuery} />
        {this.state.hits && (
          <>
            <ImageGallery hits={this.state.hits} />
            <Button onClick={this.handleLoadMoreBtn} />
          </>
        )}
        {this.state.loader && <Loader />}
      </AppWrapper>
    );
  }
}
