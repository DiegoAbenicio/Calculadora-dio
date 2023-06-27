import styled from "styled-components";
export const Background = styled.div`
  background-color: #ffd3b5;
  height:100vh;
`;
export const Container = styled.div`
  width: 100%;
  height: 85vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  background-color: #ffffff;
  border: 10px solid #ab1b24;
  box-shadow: 20px 20px #52141a;
  max-width: 270px;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  color: #ab1b24;
  font-size: 100px;
  font-family: cursive, sans-serif;
`;