import styled from 'styled-components';
import { FaSlash } from 'react-icons/fa';

export const Wrapper = styled.div`
  position: relative;
`;

export const Value = styled.span`
  font-size: 1.3em;
  font-weight: 700;
  color: var(--red);
`;

export const OldValue = styled(Value)`
  font-size: 1em;
  font-weight: 400;
  color: var(--text);
`;

export const Block = styled(FaSlash)`
  position: absolute;
  top: -3px;
  left: 0;
  height: 120%;
  width: 100%;
`;
