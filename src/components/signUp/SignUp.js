import React from "react";
import PopupWithForm from '../popupWithForm/PopupWithForm';

function SignUp(props) {
  return(
    <PopupWithForm name="sign-up" title="Sign up" isOpen={props.isOpen} onClose={props.onClose} isLoading={props.isLoading}>

      <div className="popup__input-wrapper">
        <label className="popup__input-label" htmlFor="username-input">Username</label>
        <input type="username" className="popup__input" id="username-input" autoComplete="off" placeholder="Enter username" name="username" required />
        <p id="password-input-error" className="popup__error"></p>
      </div>

        <button className="popup__submit-button" type="submit" aria-label="Sign in">Sign up</button>
        <p className='popup__signin-signup'>or <span className='popup__link' onClick={props.onSignInClick}>Sign in</span></p>
    </PopupWithForm>
  );
}

export default SignUp;