import React from 'react'
import PropTypes from 'prop-types'

export class User extends React.Component {
  renderTemplate = () => {
    const { name, error, isLoading } = this.props

    if (error) {
      return <p>Во время запроса произошла ошибка, обновите страницу</p>
    }

    if (isLoading) {
      return <p>Загружаю...</p>
    }

    if (name) {
      return <p>Привет, {name}!</p>
    } else {
      return (
        <button className="btn" onClick={this.props.handleLogin}>
          Войти
        </button>
      )
    }
  }
  render() {
    return <div className="ib user">{this.renderTemplate()}</div>
  }
}

User.propTypes = {
  name: PropTypes.string.isRequired,
  error: PropTypes.string,
  isLoading: PropTypes.bool.isRequired,
  handleLogin: PropTypes.func.isRequired,
}