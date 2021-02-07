import styled from 'styled-components';

export const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;

  background: #fff;
  border-right: 1px solid var(--red);

  height: 100%;
  width: 60vw;
  transform: translateX(-60vw);

  @media (min-width: 768px) {
    width: 250px;
  }

  transform: ${(props) => props.isOpen && 'translateX(0)'};
  transition: transform 0.3s;

  display: flex;
  flex-direction: column;

  & > img {
    margin: 10px 40px;
  }

  & > a {
    height: 50px;
    display: flex;
    align-items: center;
    padding: 0 15px;

    &:hover,
    &.active {
      color: var(--white);
      background: var(--red);
      transition: background 0.3s, color 0.3s;
    }
  }
`;

export const Panel = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;

  width: 100vw;
  height: 100vh;

  background: #fff;
  opacity: 0;
  visibility: hidden;

  opacity: ${(props) => props.isOpen && '0.6'};
  visibility: ${(props) => props.isOpen && 'visible'};

  transition: opacity 0.3s, visibility 0.3s;
  cursor: pointer;
`;
