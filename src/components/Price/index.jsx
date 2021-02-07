import PropTypes from 'prop-types';
import { Wrapper, OldValue, Value, Block } from './styles';

function Price({ children, blocked = false }) {
  return (
    <Wrapper>
      {blocked ? <OldValue>{children}</OldValue> : <Value>{children}</Value>}

      {blocked && <Block data-testid="block" />}
    </Wrapper>
  );
}

Price.propTypes = {
  children: PropTypes.string.isRequired,
  blocked: PropTypes.bool,
};

export default Price;
