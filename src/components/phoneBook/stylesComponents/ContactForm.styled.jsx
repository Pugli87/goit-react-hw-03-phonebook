import styled from 'styled-components';

export const Form = styled.form`
  width: 300px;
  border: none;
  padding: 15px;
  display: flex;
  margin: 0 auto;
  flex-direction: column;
  margin-bottom: 20px
  border-radius: 15px;
`;

export const Input = styled.input`
  margin: 0 auto;
  width: 230px;
  padding: 6px 0 6px 20px;
  margin-bottom: 30px;
  border-radius: 15px;
  border: 1px solid gray;
  outline: 0;
  background-color: white;
  box-shadow: 0 1px 6px 0 #20212447;

  &:focus {
    box-shadow: 0 1px 6px 0 rgb(61, 129, 200);
    border: 1px solid rgb(61, 129, 200);
  }
`;

export const Button = styled.button`
  width: 120px;
  margin: 0 auto;
  background-color: transparent;
  border: none;
  padding: 3px;
  font-size: 1 rem;
  border-radius: 6px;
  text-transform: capitalize;
  background-color: rgb(61, 129, 200);
  box-shadow: 0 0 5px gray;
  cursor: pointer;

  &:hover {
    box-shadow: 0 1px 6px 0 rgb(61, 129, 200);
    outline: 1px solid rgb(61, 129, 200);
    color: lightgray;
  }

  &:focus {
    box-shadow: 0 1px 6px 0 rgb(61, 129, 200);
    outline: 1px solid rgb(61, 129, 200);
  }
`;

export const Text = styled.h3`
  margin: 0 auto;
  font-weight: 400;
  margin-left: 35px;
  margin-bottom: 10px;
  text-transform: capitalize;
`;

export const SubTitle = styled.h2`
  text-align: center;
  margin-bottom: 40px;

  &::first-letter {
    text-transform: uppercase;
  }
`;