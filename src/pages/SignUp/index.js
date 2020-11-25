/* eslint-disable no-restricted-syntax */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import SignUpForm from './style';

function SignUp() {
  const days = [];
  for (let i = 1; i < 32; i += 1) {
    days.push(<option value={{ i }}>{ i }</option>);
  }

  const monthsAux = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun',
    'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'];
  const months = [];
  for (const month of monthsAux) {
    months.push(<option value={{ month }}>{ month }</option>);
  }

  const years = [];
  const actualYear = new Date().getFullYear();
  const initialYear = actualYear - 150;
  for (let i = actualYear; i >= initialYear; i -= 1) {
    years.push(<option value={{ i }}>{ i }</option>);
  }

  return (
    <SignUpForm>
      <div className="header">
        <h1>Cadastre-se</h1>
        <p>É rápido e fácil.</p>
      </div>

      <div className="content">
        <input type="text" placeholder="Name" />
        <input type="text" placeholder="Email" />
        <div className="inline-group">
          <input type="password" placeholder="Password" />
          <input type="password" placeholder="Re-enter your password" />
        </div>
        <input type="text" placeholder="Instagram" />
        <div className="group">
          <p> Data de nascimento </p>
          <select name="day">
            {days}
          </select>
          <select name="month">
            {months}
          </select>
          <select name="year">
            {years}
          </select>
        </div>
        <div className="sex-group">
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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid ex quis quisquam
          fugit? Ipsa explicabo sapiente quia,
          <b>ducimus dolore </b>
          tempore laborum vitae perferendis
          repudiandae.
          <b> Dolore </b>
          est distinctio ratione cupiditate nam?
        </p>
        <button type="submit">
          Cadastre-se
        </button>
      </div>
    </SignUpForm>
  );
}

export default SignUp;
