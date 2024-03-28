/* eslint-disable react/no-unescaped-entities */
import { useContext, useState } from 'react';
import UserInfoContext from '../../context/UserInfo/UserInfoContext';
import useFetch from '../../hooks/useFetch';

import LoginModal from '../../components/Modals/LoginModal';
import logo from '../../assets/Images/BfB_Logo.png';

import { FetchOptions } from '../../type';

import * as S from './Login.styles';
import LoginForm from './LoginForm';

function Login() {
  document.title = 'Login | Byte for Bite';

  const { user, RESET_USER, handleChange, signUpDispatch } = useContext(UserInfoContext);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // GETS USER INITIAL STATE FROM CONTEXT, FILLS WITH INFORMATION FROM FORM BELLOW AND SENDS TO DB
  const url = 'http://localhost:3001/user/login';

  const requestBody = user;
  const options: FetchOptions = { method: 'POST', body: requestBody };

  const { handleFetch, data, isLoading } = useFetch(url, options);

  // SUBMITS DATA INVOKING handleFetch, SAVES USER E-MAIL IN LOCALSTORAGE FOR FURTHER USAGE, RESETS CONTEXT USER INFO AND SET MODAL OPEN FOR BACKEND AUTH.
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    handleFetch();
    setIsModalOpen(true);
    localStorage.setItem('user', JSON.stringify(user.email));
    signUpDispatch({ type: RESET_USER });
  };

  return (
    <S.Main>
      <section>
        <div>
          <img src={ logo } alt="logo" />
        </div>
        { !isModalOpen ? (
          <LoginForm
            user={ user }
            handleChange={ handleChange }
            handleSubmit={ handleSubmit }
          />
        ) : null }

        { isModalOpen && !isLoading ? (
          <LoginModal
            setIsModalOpen={ setIsModalOpen }
            token={ data.token }
            message={ data.message }
          />
        ) : null }
      </section>
    </S.Main>
  );
}

export default Login;
