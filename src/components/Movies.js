import React from "react";
import styled from "styled-components";

const Movies = () => {
  return (
    <Container>
      <h4>Recommended for You</h4>
      <Content>
        <Wrap>
          <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_m_0_5x/sources/r1/cms/prod/5558/665558-h" />
        </Wrap>
      </Content>
    </Container>
  );
};

export default Movies;

const Container = styled.div``;

const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  grid-gap: 25px;
`;

const Wrap = styled.div`
  cursor: pointer;
  border-radius: 10px;
  border: 3px solid rgb(249, 249, 249, 0.1);
  box-shadow: rgb(0 0 0 /69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  overflow: hidden;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &:hover {
    transform: scale(1.05);
    border-color: rgba(249, 249, 249, 0.8);
    box-shadow: rgb(0 0 0 /80%) 0px 40px 58px -16px,
      rgb(0 0 0 / 72%) 0px 30px 22px -10px;
  }
`;
