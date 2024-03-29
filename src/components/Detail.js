import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import db from "../firebase";
import { collection, doc, getDoc } from "firebase/firestore";
import styled from "styled-components";

const Detail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState({});

  useEffect(() => {
    async function getMovie() {
      const movieData = collection(db, "movies");
      const movieRef = doc(movieData, id);
      const movie = await getDoc(movieRef).then((doc) => {
        if (doc.exists()) {
          setMovie(doc.data());
        } else {
        }
      });
    }
    getMovie();
  }, [id]);

  return (
    <Container>
      {movie && (
        <>
          <Background>
            <img src={movie.backgroundImg} />
          </Background>
          <ImageTitle>
            <img src={movie.titleImg} />
          </ImageTitle>
          <Controls>
            <PlayButton>
              <img src="/images/play-icon-black.png" />
              <span>PLAY</span>
            </PlayButton>
            <TrailerButton>
              <img src="/images/play-icon-white.png" />
              <span>Trailer</span>
            </TrailerButton>
            <AddButton>
              <span>+</span>
            </AddButton>
            <GroupWatchButton>
              <img src="/images/group-icon.png" />
            </GroupWatchButton>
          </Controls>
          <SubTitle>{movie.subTitle}</SubTitle>
          <Description>{movie.description}</Description>
        </>
      )}
    </Container>
  );
};

export default Detail;

const Container = styled.div`
  position: relative;
  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vw + 5px);
`;

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: -1;
  opacity: 0.8;

  img {
    width: 100%;
    height: 100;
    object-fit: cover;
  }
`;

const ImageTitle = styled.div`
  height: 30vh;
  min-height: 170px;
  width: 35vw;
  min-width: 200px;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

const Controls = styled.div`
  display: flex;
  align-items: center;
`;

const PlayButton = styled.button`
  cursor: pointer;
  display: flex;
  align-items: center;
  height: 56px;
  margin-right: 22px;
  padding: 0 24px;
  background: rgb(249, 249, 249);
  border-radius: 4px;
  font-size: 15px;
  letter-spacing: 1.8px;
  border: none;

  &:hover {
    background: rgb(198, 198, 198);
  }
`;

const TrailerButton = styled(PlayButton)`
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid rgb(249, 249, 249);
  color: rgb(249, 249, 249);
  text-transform: uppercase;
`;

const AddButton = styled.button`
  cursor: pointer;
  border: none;
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 16px;
  background-color: rgba(0, 0, 0, 0.6);
  border-radius: 50%;
  border: 2px solid white;

  span {
    font-size: 30px;
    color: white;
  }
`;

const GroupWatchButton = styled(AddButton)`
  background-color: rgb(0, 0, 0);
`;

const SubTitle = styled.div`
  margin-top: 26px;
  color: rgb(249, 249, 249);
  font-size: 15px;
  min-height: 20px;
`;

const Description = styled.div`
  margin-top: 16px;
  line-height: 1.4;
  font-size: 20px;
  color: rgb(249, 249, 249);
`;
