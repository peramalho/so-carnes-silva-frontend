import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 150px;
  border: 1px solid var(--red);
  margin-bottom: 10px;
  padding: 15px;

  display: flex;
  box-shadow: 1px 1px 5px var(--red);
`;

export const Info = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const PriceRow = styled.div`
  display: flex;
  align-items: flex-end;

  & > div:first-child {
    margin-right: 10px;
  }
`;

export const Image = styled.img`
  width: 40%;
`;

export const Title = styled.h2`
  font-size: 1.4em;
  font-weight: 400;
`;
