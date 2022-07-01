import { Rings } from 'react-loader-spinner';
import Container from 'components/Container/Container';

const Loader = () => {
  return (
    <Container>
      <Rings color="rgb(122, 131, 131)" height={80} width={80} />
    </Container>
  );
};

export default Loader;
