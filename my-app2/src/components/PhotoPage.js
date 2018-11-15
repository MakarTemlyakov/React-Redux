import React from 'react'
import PropTypes from 'prop-types'

export default class PhotoPage extends React.Component{
    state = {
        isLoading: false,
    }
    componentDidMount() {
        this.loadImage(this.props.url);
    }
     loadImage = src => {
        this.setState({isLoading:true})
        let img = new Image();
        img.onload = () =>{
            this.setState({isLoading:false})
        }
        img.src = src
    //    window.open(src,"Image");
    }
    render() {
        const {isLoading} = this.state;
        const {url} = this.props;
        return isLoading ? <p>Загрузка фото....</p> : window.open(url,"Image");
        //<img src={url} alt="big vk" target="_blank"/>
    }
}
PhotoPage.propTypes = {
    url:PropTypes.string.isRequired,
}