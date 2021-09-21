import React, {useState} from 'react'
import Title from './components/Title/Title'
import Label from './components/Label/Label'
import Input from './components/Input/Input'
import './Login.css'

import Home from '../Home/Home'

const Login = () => {
  const [user, setUser] = useState('')
  const [password, setPassword] = useState('')
  const [passwordError, setPasswordError] = useState(false)
  const [isLogin, setIsLogin] = useState(false)
  const [hasError, setHasError] = useState(false)

  function handleChange(name, value) {
    if (name === 'user') {
      setUser(value)
      setHasError(false)
    } else {
      if (value.length < 8) {
        setPasswordError(true)
        setHasError(false)
      } else {
        setPasswordError(false)
        setPassword(value)
        setHasError(false)
      }
    }
  }

  function ifMatch(param) {
    if (param.user.length > 0 && param.password.length > 0) {
      if (param.user === 'jumper' && param.password === '12345678') {
        const {user, password} = param
        let ac = {user, password}
        let account = JSON.stringify(ac)
        localStorage.setItem('account', account)
        setIsLogin(true)
      } else {
        setIsLogin(false)
        setHasError(true)
      }
    } else {
      setIsLogin(false)
      setHasError(true)
    }
  }

  function handleSubmit() {
    let account = {user, password}
    if (account) {
      ifMatch(account)
    }
  }

  return (
    <>
    { isLogin ? <>
                  <Home />
                </>
    :
      <div className="d-flex justify-content-center mt-5">
        <div className="container d-flex flex-column  w-25 login__container">
          <Title text="Welcome!" />
          { hasError && 
          <div class="alert alert-primary" role="alert">
            Your password or user are invalid!
          </div>
          }
          <Label className="text-start" text="User" />
          <Input
            attribute={{
              id: 'user',
              name: 'user',
              type: 'text',
              placeholder: 'type your user',
            }}
            handleChange={handleChange}
          />
          <Label text="Password" />
          <Input
            attribute={{
              id: 'password',
              name: 'password',
              type: 'password',
              placeholder: 'type your password',
            }}
            handleChange={handleChange}
            param={passwordError}
          />
          {passwordError && (
            <div className="alert alert-danger" role="alert">
              Password Invalid
            </div>
          )}
          <button
            type="button"
            className="btn btn-primary mb-5"
            onClick={(e) => handleSubmit()}
          >
            Login
          </button>
        </div>
      </div>
      }
    </>
  )
}

export default Login
