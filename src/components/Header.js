import React, { useEffect } from "react";
import { auth, provider } from "../firebase";
import { signInWithPopup, signOut, onAuthStateChanged } from "firebase/auth";
import styled from "styled-components";
import {
  selectUserName,
  selectUserPhoto,
  setUserLogin,
  setSignOut,
} from "../features/user/useSlice";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

const Header = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const userName = useSelector(selectUserName);
  const userPhoto = useSelector(selectUserPhoto);

  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        dispatch(
          setUserLogin({
            name: user.displayName,
            email: user.email,
            photo: user.photoURL,
          })
        );
        history.push("/");
      }
    });
  }, []);

  const menuProps = [
    { key: 1, src: "/images/home-icon.svg", name: "HOME" },
    { key: 2, src: "/images/search-icon.svg", name: "SEARCH" },
    { key: 3, src: "/images/watchlist-icon.svg", name: "WATCHLIST" },
    { key: 4, src: "/images/original-icon.svg", name: "ORIGINALS" },
    { key: 5, src: "/images/movie-icon.svg", name: "MOVIES" },
    { key: 6, src: "/images/series-icon.svg", name: "SERIES" },
  ];

  const signIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        let user = result.user;
        dispatch(
          setUserLogin({
            name: user.displayName,
            email: user.email,
            photo: user.photoURL,
          })
        );
        history.push("/");
      })
      .catch((error) => console.log(error.message));
  };

  const signOutFn = () => {
    signOut(auth).then(() => {
      dispatch(setSignOut());
      history.push("/login");
    });
  };

  return (
    <Nav>
      <Logo src="/images/logo.svg" />
      {!userName ? (
        <LoginContainer>
          <Login onClick={signIn}>Login</Login>
        </LoginContainer>
      ) : (
        <>
          <NavMenu>
            {menuProps.map(({ src, name, key }) => (
              <a key={key}>
                <img src={src} />
                <span>{name}</span>
              </a>
            ))}
          </NavMenu>
          <UserImage
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyEaZqT3fHeNrPGcnjLLX1v_W4mvBlgpwxnA&usqp=CAU"
            onClick={signOutFn}
          />
        </>
      )}
    </Nav>
  );
};

export default Header;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  padding: 0 36px;
  height: 70px;
  background: #090b13;
  overflow-x: hidden;
`;

const Logo = styled.img`
  width: 80px;
`;

const NavMenu = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  margin-left: 25px;

  a {
    cursor: pointer;
    display: flex;
    align-items: center;
    padding: 0 12px;

    img {
      height: 20px;
    }

    span {
      position: relative;
      font-size: 13px;
      letter-spacing: 1.42px;

      &::after {
        content: "";
        position: absolute;
        left: 0;
        right: 0;
        bottom: -6px;
        height: 2px;
        background: white;
        opacity: 0;
        transform: scaleX(0);
        transition: transform 250ms ease-in-out;
      }
    }

    &:hover {
      span::after {
        transform: scale(1);
        opacity: 1;
      }
    }
  }
`;

const UserImage = styled.img`
  cursor: pointer;
  width: 48px;
  height: 48px;
  border-radius: 50%;
`;

const Login = styled.div`
  cursor: pointer;
  padding: 8px 16px;
  background-color: rgba(0, 0, 0, 0.6);
  border: 1px solid #f9f9f9;
  border-radius: 4px;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  transition: all 0.2s;

  &:hover {
    background-color: #f9f9f9;
    color: #000;
    border-color: transparent;
  }
`;

const LoginContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-end;
`;
