import styled from 'styled-components';

export const Container = styled.div`
  width: 320px;
  padding: 10px;
  display: flex;
  margin: 100px auto;
  flex-direction: column;
  border-radius: 15px;
  border: 1px solid rgb(61, 129, 200);
  box-shadow: 0 1px 6px 0 rgb(61, 129, 200);
  background-color: rgb(228, 227, 227);
`;

export const Title = styled.h1`
  margin: 0 auto;
  margin-bottom: 30px;
  text-transform: capitalize;
`;

export const Heading2 = styled.h2`
  display: block;
  margin: 20px auto;
  text-transform: capitalize;
`;

export const Text = styled.h3`
  margin: 0 auto;
  margin-bottom: 20px;

  &::first-letter {
    text-transform: uppercase;
  }
`;
