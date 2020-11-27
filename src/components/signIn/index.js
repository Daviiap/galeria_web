/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-restricted-syntax */
/* eslint-disable react/jsx-filename-extension */
import React, { useState } from 'react';
import validator from '../../validator/validator';
import SignInForm from './style';

function signIn() {
  const [email, setEmai] = useState('');
  const [password, setPassword] = useState('');

  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const errors = {
    emailError,
    passwordError,
  };

  function emailValidator() {
    setEmailError('');
    if (!validator.EmailValidator(email)) {
      setEmailError('Insira um email válido');
      return false;
    }
    return true;
  }

  function passwordValidator() {
    setPasswordError('');
    if (!validator.PasswordValidator(password)) {
      setPasswordError('A senha deve ter pelo menos 8 caracteres');
      return false;
    }
    return true;
  }

  function validation() {
    if (!emailValidator()) return false;
    if (!passwordValidator()) return false;
    return true;
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!validation()) return;

    const data = {
      email,
      password,
    };

    console.log(data);
  }

  return (
    <SignInForm onSubmit={handleSubmit}>
      <div className="content">
        <input type="text" onKeyUp={emailValidator} placeholder="Email" value={email} onChange={(e) => setEmai(e.target.value)} />
        <div className="error">
          <h5>
            {errors.emailError}
          </h5>
        </div>
        <input type="password" onKeyUp={passwordValidator} placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <div className="error">
          <h5>
            {errors.passwordError}
          </h5>
        </div>
        <button type="submit">Iniciar sessão</button>
      </div>
    </SignInForm>
  );
}

export default signIn;
