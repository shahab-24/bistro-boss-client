import { Helmet } from 'react-helmet-async';
import orderCoverImg from '../../../src/assets/assets/shop/banner2.jpg'
import Cover from '../../Menu/Cover/Cover';

const Order = () => {
  return (
    <div>
    <Helmet><title>Bistro Boss | Order</title></Helmet>
      <Cover title={"Order food"} img={orderCoverImg}></Cover>
    </div>
  );
};

export default Order;