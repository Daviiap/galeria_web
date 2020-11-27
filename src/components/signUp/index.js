/* eslint-disable no-restricted-syntax */
/* eslint-disable react/jsx-filename-extension */
import React, { useState } from 'react';
import util from '../../util/util';
import validator from '../../validator/validator';
import SignUpForm from './style';
// import api from '../../services/api';

function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordAux, setPasswordAux] = useState('');
  const [instagram, setInstagram] = useState('');

  const [day, setDay] = useState(1);
  const [month, setMonth] = useState('Jan');
  const [year, setYear] = useState(2020);
  const [gender, setGender] = useState('');

  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [dateError, setDateError] = useState('');

  const days = [];
  for (let i = 1; i < 32; i += 1) {
    days.push(<option value={i}>{ i }</option>);
  }

  const monthsAux = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun',
    'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'];
  const months = [];
  for (let i = 0; i < monthsAux.length; i += 1) {
    months.push(<option value={i + 1}>{ monthsAux[i] }</option>);
  }

  const years = [];
  const actualYear = new Date().getFullYear();
  const initialYear = actualYear - 120;
  for (let i = actualYear; i >= initialYear; i -= 1) {
    years.push(<option value={i}>{ i }</option>);
  }

  const errors = {
    nameError,
    emailError,
    passwordError,
    dateError,
  };

  function restartErrors() {
    setNameError('');
    setEmailError('');
    setPasswordError('');
    setDateError('');
  }

  function validation(age) {
    if (!validator.NameValidator(name)) {
      setNameError('Insira um nome válido');
      return false;
    }
    if (!validator.EmailValidator(email)) {
      setEmailError('Insira um email válido');
      return false;
    }
    if (!validator.PasswordValidator(password)) {
      setPasswordError('A senha deve ter pelo menos 8 caracteres');
      return false;
    }
    if (password !== passwordAux) {
      setPasswordError('As senhas não coincidem');
      return false;
    }
    if (!validator.DateValidator(age)) {
      setDateError('Você deve ter pelo menos 12 anos');
      return false;
    }
    return true;
  }

  async function handleSubmit(e) {
    e.preventDefault();

    restartErrors();

    const date = `${year}/${month}/${day}`;
    const age = util.getAge(date);

    if (!validation(age)) return;

    const data = {
      name,
      email,
      age,
      gender,
      instagram,
      password,
    };

    // await api.post('/register', data);
    console.log(data);
  }

  return (
    <SignUpForm onSubmit={handleSubmit}>
      <div className="header">
        <h1>Cadastre-se</h1>
        <p>É rápido e fácil.</p>
      </div>

      <div className="content">
        <input type="text" placeholder="Nome" value={name} onChange={(e) => setName(e.target.value)} />
        <div className="error">
          <h5>
            {errors.nameError}
          </h5>
        </div>
        <input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <div className="error">
          <h5>
            {errors.emailError}
          </h5>
        </div>
        <div className="inline-group">
          <input type="password" placeholder="Senha" value={password} onChange={(e) => setPassword(e.target.value)} />
          <input type="password" placeholder="Confirme sua senha" value={passwordAux} onChange={(e) => setPasswordAux(e.target.value)} />
        </div>
        <div className="error">
          <h5>
            {errors.passwordError}
          </h5>
        </div>
        <input type="text" placeholder="Instagram*" value={instagram} onChange={(e) => setInstagram(e.target.value)} />
        <div className="group">
          <p> Data de nascimento </p>
          <select onChange={(e) => setDay(e.target.value)}>
            {days}
          </select>
          <select onChange={(e) => setMonth(e.target.value)}>
            {months}
          </select>
          <select onChange={(e) => setYear(e.target.value)}>
            {years}
          </select>
        </div>
        <div className="error">
          <h5>
            {dateError}
          </h5>
        </div>
        <div className="sex-group" onChange={(e) => setGender(e.target.value)}>
          <p>Gênero</p>
          <div className="item">
            <span>Masculino</span>
            <input type="radio" name="sexo" value="Male" />
          </div>
          <div className="item">
            <span>Feminino</span>
            <input type="radio" name="sexo" value="Female" />
          </div>
          <div className="item">
            <span>Outro</span>
            <input type="radio" name="sexo" value="Other" />
          </div>
        </div>
      </div>

      <div className="footer">
        <p>
          Ao clicar em cadastre-se, você concorda com nossos
          <b> Termos de responsabilidade </b>
          e
          <b> Política de dados</b>
          . Você poderá receber notificações por SMS e
          cancelar isso quando quiser.
        </p>
        <button type="submit">
          Cadastre-se
        </button>
      </div>
    </SignUpForm>
  );
}

export default SignUp;
