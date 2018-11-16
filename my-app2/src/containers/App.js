import React, { Component } from 'react'
import { connect } from 'react-redux'
import { User } from '../components/User'
import { Page } from '../components/Page'
import { getPhotos } from '../actions/PageActions'
import { handleLogin } from '../actions/UserActions'
import {Link,Switch} from 'react-router-dom'
import {Route} from 'react-router-dom'
import PhotoPage from '../components/PhotoPage'

 class App extends Component {
  render() {
    const { user, page, getPhotosAction, handleLoginAction } = this.props
    return (
      <div className="app">
        <Page
          photos={page.photos}
          year={page.year}
          isLoading={page.isLoading}
          error={page.error}
          getPhotos={getPhotosAction}
        />
        <User
          name={user.name}
          error={user.error}
          isLoading={user.isLoading}
          handleLogin={handleLoginAction}
        />

        <Link to="/PhotoPage" target="_blank">Перейти на страницу фото</Link>
        <Switch>
          <Route path="/PhotoPage" component={PhotoPage}/>
        </Switch>
      </div>
    )
  }
}
const mapStateToProps = store => {
  return {
    user: store.user,
    page: store.page,

  }
}
const mapDispatchToProps = dispatch => {
  return {
    getPhotosAction: year => dispatch(getPhotos(year)),
    handleLoginAction: () => dispatch(handleLogin()),
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
