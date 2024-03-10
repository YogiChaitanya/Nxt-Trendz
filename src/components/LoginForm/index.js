// Write your JS code here
import {Component} from 'react'

import './index.css'

class LoginForm extends Component {
  state = {
    userNameInput: '',
    passwordInput: '',
    showSubmitError: false,
    errorMsg: '',
  }

  onSubmitSuccess = () => {
    const {histroy} = this.props
    histroy.replace('/')
  }

  onSubmitFailure = errorMsg => {
    this.setState({showSubmitError: true, errorMsg})
  }

  onSubmitForm = async event => {
    event.preventDefault()
    const {userNameInput, passwordInput} = this.state
    const userDetails = {userNameInput, passwordInput}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    console.log(data)
    if (response.ok === true) {
      this.onSubmitSuccess()
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  onChangeUserName = event => {
    this.setState({
      userNameInput: event.target.value,
    })
  }

  onChangePasswordInput = event => {
    this.setState({
      passwordInput: event.target.value,
    })
  }

  render() {
    const {showSubmitError, errorMsg} = this.state
    const {userNameInput, passwordInput} = this.state
    return (
      <div className="login-form-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
          className="website-login"
          alt="website login"
        />

        <form className="form-control" onSubmit={this.onSubmitForm}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
            className="website-logo"
            alt="website logo"
          />
          <label htmlFor="usernameId" className="label-names">
            USERNAME
          </label>
          <input
            id="usernameId"
            type="text"
            className="user-name"
            placeholder="Username"
            value={userNameInput}
            onChange={this.onChangeUserName}
          />

          <label htmlFor="passwordId" className="label-names">
            PASSWORD
          </label>
          <input
            id="passwordId"
            type="password"
            className="password-input"
            placeholder="Password"
            value={passwordInput}
            onChange={this.onChangePasswordInput}
          />
          <button type="submit" className="login-btn">
            Login
          </button>
          {showSubmitError && <p className="error-msg">*{errorMsg}</p>}
        </form>
      </div>
    )
  }
}

export default LoginForm
