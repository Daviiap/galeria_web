/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-filename-extension */
import React, { useState } from 'react';
import Modal from 'react-modal';
import { FaBars, FaTimes } from 'react-icons/fa';
import NavBar, { LoginModalButton, RegisterModalButton } from './style';

import SignIn from '../signIn/index';
import SignUp from '../signUp/index';

Modal.setAppElement('#root');

function navBar() {
  const [isClicked, setClicked] = useState('false');
  const [loginModalisOpen, setLoginModal] = useState(false);
  const [registerModalisOpen, setRegisterModal] = useState(false);

  function handleClick() {
    if (isClicked === 'false') {
      setClicked('true');
    } else {
      setClicked('false');
    }
  }

  return (
    <NavBar>
      <div className="logo">
        <h3>Logo</h3>
      </div>
      <div className="menu">
        <div className="menu-icon" onClick={handleClick}>
          <FaBars />
        </div>
        <div className="menu-items" id={isClicked}>
          <ul>
            <li>
              <button type="button" onClick={() => setLoginModal(true)}>Login</button>
              <Modal key="loginModal" className="modal" isOpen={loginModalisOpen}>
                <LoginModalButton onClick={() => setLoginModal(false)}>
                  <FaTimes size="20px" />
                </LoginModalButton>
                <SignIn />
              </Modal>
            </li>
            <li>
              <button type="button" onClick={() => setRegisterModal(true)}>Sign up</button>
              <Modal key="registerModal" className="modal" isOpen={registerModalisOpen}>
                <RegisterModalButton onClick={() => setRegisterModal(false)}>
                  <FaTimes size="30px" />
                </RegisterModalButton>
                <SignUp />
              </Modal>
            </li>
          </ul>
        </div>
      </div>
    </NavBar>
  );
}

export default navBar;
