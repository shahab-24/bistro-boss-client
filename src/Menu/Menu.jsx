
import { Helmet } from 'react-helmet-async';

import Cover from './Cover/Cover';
import menuImg from '../../src/assets/assets/menu/banner3.jpg'
import dessertImg from '../../src/assets/assets/menu/dessert-bg.jpeg'
import saladImg from '../../src/assets/assets/menu/salad-bg.jpg'
import soupsImg from '../../src/assets/assets/menu/soup-bg.jpg'
import pizzaImg from '../../src/assets/assets/menu/pizza-bg.jpg'
import SectionTitle from '../Components/SectionTitle/SectionTitle';
import useMenu from '../useMenu/useMenu';
import MenuCategory from './MenuCategory/MenuCategory';

const Menu = () => {
  const [menu] = useMenu();
  const salad = menu.filter(item => item.category === 'salad');
  const offered = menu.filter(item => item.category === 'offered');
  const soups = menu.filter(item => item.category === 'soup');
  const dessert = menu.filter(item => item.category === 'dessert');
  const pizza = menu.filter(item => item.category === 'pizza');
  return (
    <div className=''>
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>
      <Cover img={menuImg} title={'Our Menu'}></Cover>
      <SectionTitle subHeading="Don't Miss"  heading="Today's Offer"></SectionTitle>
      <MenuCategory items={offered}></MenuCategory>
      <MenuCategory items={dessert} title={'dessert'} itemImg={dessertImg}></MenuCategory>
      <MenuCategory items={salad} title={'salad'} itemImg={saladImg}></MenuCategory>
      <MenuCategory items={soups} title={'soup'} itemImg={soupsImg}></MenuCategory>
      <MenuCategory items={pizza} title={'pizza'} itemImg={pizzaImg}></MenuCategory>
     
    </div>
  );
};

export default Menu;