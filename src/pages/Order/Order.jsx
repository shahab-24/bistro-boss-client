import { Helmet } from 'react-helmet-async';
import orderCoverImg from '../../../src/assets/assets/shop/banner2.jpg'
import Cover from '../../Menu/Cover/Cover';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useState } from 'react';

import useMenu from '../../useMenu/useMenu';
import OrderTab from './OrderTab';
import { useParams } from 'react-router-dom';


const Order = () => {
  const categories = ['salad', 'soup', 'pizza', 'dessert', 'drinks'];
  const {category} = useParams();
  const initialTabIndex = categories.indexOf(category)
  const [tabIndex, setTabIndex] = useState(initialTabIndex);
  const [menu] = useMenu();
 

  const salad = menu.filter(item => item.category === 'salad');
 
  const soups = menu.filter(item => item.category === 'soup');
  const pizza = menu.filter(item => item.category === 'pizza');
  const dessert = menu.filter(item => item.category === 'dessert');
  const drinks = menu.filter(item => item.category === 'drinks');

  return (
    <div>
    <Helmet><title>Bistro Boss | Order</title></Helmet>
      <Cover title={"Order food"} img={orderCoverImg}></Cover>
      <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
  <TabList>
    <Tab>Salad</Tab>
    <Tab>Soup</Tab>
    <Tab>Pizza</Tab>
    <Tab>Dessert</Tab>
    <Tab>Drinks</Tab>
  </TabList>
  <TabPanel>
    <OrderTab items={salad}></OrderTab>
  </TabPanel>
  <TabPanel>
  <OrderTab items={soups}></OrderTab>
  </TabPanel>
  <TabPanel>
  <OrderTab items={pizza}></OrderTab>
  
  </TabPanel>
  <TabPanel>
  <OrderTab items={dessert}></OrderTab>
  </TabPanel>
  <TabPanel>
  <OrderTab items={drinks}></OrderTab>
  </TabPanel>
  
</Tabs>
    </div>
  );
};

export default Order;