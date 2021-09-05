import React from "react";
import styled from "styled-components";

const Login = () => {
  return (
    <Container>
      <CTA>
        <CTAlogoOne src="/images/cta-logo-one.svg" />
        <SignUp>GET ALL THERE</SignUp>
        <Description>
          ​Get Premier Access to Raya and the Last Dragon for an additional fee
          with a Disney+ subscription. As of 03/26/21, the price of Disney+ and
          The Disney Bundle will increase by $1.
        </Description>
        <CTAlogoTwo src="/images/cta-logo-two.png" />
      </CTA>
    </Container>
  );
};

export default Login;

const Container = styled.div`
  display: flex;
  align-items: top;
  justify-content: center;
  height: calc(100vh - 70px);
  background: url("/images/login-background.jpg") no-repeat;
  background-position: top;
  background-size: cover;
  opacity: 0.8;
`;

const CTA = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;
  width: 80%;
  max-width: 650px;
  padding: 80px 40px;
`;

const CTAlogoOne = styled.img``;

const SignUp = styled.a`
  cursor: pointer;
  width: 100%;
  margin-top: 8px;
  margin-bottom: 12px;
  padding: 17px 0;
  background-color: #0063e5;
  font-weight: bold;
  color: #f9f9f9;
  border-radius: 4px;
  font-size: 18px;
  text-align: center;
  letter-spacing: 1.5px;
  transition: background-color 250ms;

  &:hover {
    background-color: #0483ee;
  }
`;

const Description = styled.p`
  font-size: 11px;
  letter-spacing: 1.5px;
  text-align: center;
  line-height: 1.5;
`;

const CTAlogoTwo = styled.img`
  width: 90%;
`;
