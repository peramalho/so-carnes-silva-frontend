import Card from '../../components/Card';
import { Wrapper } from './styles';
import Title from '../../components/Title';

function Home() {
  return (
    <Wrapper>
      <Title>Ofertas do dia</Title>
      <Card title="Alcatra" price={20} />
      <Card title="Picanha" price={24} oldPrice={30} />
      <Card title="Coxinha" price={10} oldPrice={12} />
    </Wrapper>
  );
}

export default Home;
