import React from 'react'
import PropTypes from 'prop-types'
import PhotoPage from './PhotoPage';
import {Link, Switch,Route,BrowserRouter} from 'react-router-dom'
export class Page extends React.Component {
      state = {
        clikedPhoto: false,
      }
  onBtnClick = e => {
    const year = +e.currentTarget.innerText
    this.props.getPhotos(year) 
  }
  onCheckClick= e => {
    this.setState({clikedPhoto:true})
  }
  renderTemplate = () => {
    const { photos, isLoading, error } = this.props
    if (error) {
      return <p className="error">Во время загрузки фото произошла ошибка</p>
    }

    if (isLoading) {
      return <p>Загрузка...</p>
    } else {
      return photos.map((photo, index) => ( 
        <div key={photo} className="photo">
          <p>
            <img src={photo.sizes[0].url} alt="" onClick={this.onCheckClick}/>
          </p>
          <p>{photo.likes.count} ❤</p>
           {
             this.state.clikedPhoto ?  <PhotoPage  url={photo.sizes[4].url}/>: ""
           }
        </div>
        
      ))
    }
  }

  render() {
    const { year, photos } = this.props
    return (
      <div className="ib page">
        <p>
          <button className="btn" onClick={this.onBtnClick}>
            2018
          </button>{' '}
          <button className="btn" onClick={this.onBtnClick}>
            2017
          </button>{' '}
          <button className="btn" onClick={this.onBtnClick}>
            2016
          </button>{' '}
          <button className="btn" onClick={this.onBtnClick}>
            2015
          </button>{' '}
          <button className="btn" onClick={this.onBtnClick}>
            2014
          </button>
        </p>
        <h3>
          {year} год [{photos.length}]
        </h3>
        {this.renderTemplate()}
      </div>
    )
  }
}

Page.propTypes = {
  year: PropTypes.number.isRequired,
  photos: PropTypes.array.isRequired,
  getPhotos: PropTypes.func.isRequired,
  error: PropTypes.string,
  isLoading: PropTypes.bool.isRequired,
}
