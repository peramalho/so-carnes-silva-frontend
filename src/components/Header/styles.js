import styled from 'styled-components';

export const Wrapper = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;

  display: flex;
  height: 60px;
  background: var(--red);
  display: flex;
  justify-content: space-between;
  padding: 0 10px;

  & a,
  button {
    display: flex;
    height: 100%;
    align-items: center;
  }
`;
