import { Main } from './Main';

export const dummyCategories = [
  {
    id: 'electronics',
    title: 'Electronics'
  },
  {
    id: 'cloth',
    title: 'Cloth'
  },
  {
    id: 'furniture',
    title: 'Furniture'
  }
];

export const dummyProducts = [
  {
    id: '1',
    title: 'IPhone XR',
    category: 'electronics',
    price: 849
  },
  {
    id: '2',
    title: 'Xiaomi Mi A3',
    category: 'electronics',
    oldPrice: 244,
    price: 222,
    discount: 9
  },
  {
    id: '3',
    title: 'OPPO K3',
    category: 'electronics',
    oldPrice: 200,
    price: 150,
    discount: 25
  }
];

export const dummySections = dummyCategories.reduce((sectionsConfig, { id, title }) => {
  const section = {
    title,
    data: [dummyProducts.filter(({ category }) => category === id)]
  };

  sectionsConfig.push(section);

  return sectionsConfig;
}, []);

export default Main;
