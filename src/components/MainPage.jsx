import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #e9ecef;
  padding: 20px;
`;

const Title = styled.h2`
  margin-bottom: 20px;
  text-align: center;
`;

const Content = styled.p`
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 600px;
  box-sizing: border-box;

  @media (max-width: 500px) {
    padding: 15px;
  }
`;

function MainPage() {
  return (
    <Container>
      <Title>Main Page</Title>
      <Content>Welcome to the main page!</Content>
    </Container>
  );
}

export default MainPage;
