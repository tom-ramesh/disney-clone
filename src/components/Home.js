import React, { useEffect } from "react";
import ImageSlider from "./ImageSlider";
import Viewers from "./Viewers";
import Movies from "./Movies";
import db from "../firebase";
import { collection, onSnapshot, query } from "firebase/firestore";
import { useDispatch } from "react-redux";
import { setMovies } from "../features/movie/movieSlice";
import styled from "styled-components";

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    async function getData() {
      const q = query(collection(db, "movies"));
      onSnapshot(q, (snapshot) => {
        let tempMovies = snapshot.docs.map((doc) => {
          return { id: doc.id, ...doc.data() };
        });
        dispatch(setMovies(tempMovies));
      });
    }
    getData();
  }, []);

  return (
    <Container>
      <ImageSlider />
      <Viewers />
      <Movies />
    </Container>
  );
};

export default Home;

const Container = styled.main`
  position: relative;
  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vw + 5px);
  overflow-x: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url("/images/home-background.png") center center / cover
      no-repeat fixed;
    z-index: -1;
  }
`;
