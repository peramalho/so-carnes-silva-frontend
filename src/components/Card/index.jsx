import PropTypes from 'prop-types';

import { Wrapper, Info, Title, PriceRow, Image } from './styles';
import Price from '../Price';
import { formatPrice } from '../../utils/price';

function Card({ title, price, oldPrice = null }) {
  return (
    <Wrapper>
      <Info>
        <Title>{title}</Title>
        <PriceRow>
          {oldPrice && <Price blocked>{formatPrice(oldPrice)}</Price>}
          <Price>{formatPrice(price)}</Price>
        </PriceRow>
      </Info>
      <Image src="https://i.ytimg.com/vi/P172dFjf2nM/maxresdefault.jpg" />
    </Wrapper>
  );
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  oldPrice: PropTypes.number,
};

export default Card;
