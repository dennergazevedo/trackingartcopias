import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #00B2E3;
  color: #FFF;
  padding: 50px;
  width: 100vw;
  height: 100vh;
`;

export const Background = styled.img`
  height: 100vh;
  position: absolute;
  top: 0;
  right: 0;
  opacity: 0.3;
  z-index: 1;

  @media only screen and (max-width: 800px){
    height: auto;
    width: 90vw;
  }
`;

export const Body = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 60vw;
  min-width: 300px;
  height: auto;
  z-index: 2;

  div{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 50px;

    span{
      text-align: center;
    }
  }

  button{
    width: 200px;
    height: 40px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-top: 50px;
    padding-left: 20px;
    padding-right: 20px;
    background-color: #FFF;
    color: #00B2E3;
    font-size: 14px;

    &:hover{
      background-color: #FFF9;
    }
  }
`;

export const Title = styled.span`
  font-size: 24px;
  color: #FFF;
  font-weight: 600;
  text-align: center;
`;

export const Situacao = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
`;

export const Logomarca = styled.img`
  width: 15vw;
  min-width: 150px;
`;