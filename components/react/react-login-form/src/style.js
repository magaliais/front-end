import styled from "styled-components";

export const Application = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgb(58 55 119);

  input[type="submit"], button {
    display: inline-block;
    padding: 10px 15px;
    border-radius: 8px;
    background-image: linear-gradient(to right, #ffce00 50%, #fe4880);
    background-size: 200%;
    background-position: 0%;
    transition: 0.4s;
    color: #fff;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;

    &:hover, &:focus {
      background-position: 100%;
    }
  }

  .welcome {
    width: 100%;
    max-width: 480px;
    background-color: #fff;
    padding: 15px 30px;
    
    h2 {
      color: #888;
      font-size: 28px;
      font-weight: 500;
      margin-bottom: 30px;

      span {
        color: #fe4880;
        font-weight: 700;
      }
    }
  }
`;