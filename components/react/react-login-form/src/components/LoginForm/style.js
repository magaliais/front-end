import styled from "styled-components";


export const Form = styled.form`
  display: block;
  position: relative;

  &::after {
    content: "";
    display: block;
    position: absolute;
    top: -5px;
    left: -5px;
    right: -5px;
    bottom: -5px;
    z-index: 1;
    background-image: linear-gradient(to bottom right, #ffce00, #fe4aa0);
  }

  .inner-form {
    position: relative;
    display: block;
    background-color: #fff;
    padding: 30px;
    z-index: 2;

    .error {
      margin-bottom: 2rem;
    }

    h2 {
      color: #333;
      font-size: 28px;
      font-weight: 600;
      margin-bottom: 30px;
    }

    .form-group {
      display: block;
      color: #6666;
      width: 300px;
      margin-bottom: 15px;

      label {
        display: block;
        color: #666;
        font-size: 16px;
        font-weight: 500;
        margin-bottom: 5px;
        transition: 0.4s;
      }

      &:focus-within label {
        color: #ff7e61;
      }

      input {
        display: block;
        width: 100%;
        padding: 10px 15px;
        background-color: #f8f8f8;
        border-radius: 8px;
        transition: 0.4s;

        &:focus {
          box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.4);
        }
      }
    }
  }
`;