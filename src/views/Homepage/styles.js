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
`;

export const Body = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 60vw;
  min-width: 300px;
  height: auto;

  @media only screen and (max-width: 800px){
    width: 90vw;
  }

  input{
    padding: 10px 10px 10px 20px;
    font-size: 12px;
    min-height: 50px;
    min-width: 300px;
  }

  button{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 20px;
    padding-left: 50px;
    padding-right: 50px;
    background-color: #FFF;
    color: #00B2E3;
    font-weight: 600;
    margin-top: 30px;
    font-size: 12px;

    .icon{
      margin-right: 10px;
    }
  }

  div{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin: 40px;
    margin-top: 150px;
    font-size: 24px;
    text-align: center;
    width: 100%;

    @media only screen and (max-width: 800px){
      font-size: 14px;
      font-weight: 600;
    }

    .icon{
      margin-right: 10px;
      font-size: 30px;

      @media only screen and (max-width: 800px){
        font-size: 20px;
      }
    }
  }
`;

export const Logomarca = styled.img`
  width: 15vw;
  min-width: 150px;
`;