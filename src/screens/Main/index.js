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

const dummyImages = [
  {
    id: '1',
    source: { uri: 'https://via.placeholder.com/180x240/318CBF/FFFFFF/?text=Product image 1' },
    style: { width: 180, height: 240 }
  },
  {
    id: '2',
    source: { uri: 'https://via.placeholder.com/180x240/318CBF/FFFFFF/?text=Product image 2' },
    style: { width: 180, height: 240 }
  }
];

export const dummyProducts = [
  {
    id: '1',
    title: 'IPhone XR',
    category: 'electronics',
    price: 849,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris quam diam, congue vitae placerat id, porta quis magna. Donec dictum fringilla felis, ac aliquet velit sagittis at. In porttitor aliquet metus. Phasellus enim massa, tristique eu orci consequat, viverra porta nibh. Mauris vehicula pharetra eros, eget consequat nunc aliquet vitae.',
    colors: ['blue', 'green', 'red'],
    images: dummyImages
  },
  {
    id: '2',
    title: 'Xiaomi Mi A3',
    category: 'electronics',
    oldPrice: 244,
    price: 222,
    discount: 9,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris quam diam, congue vitae placerat id, porta quis magna. Donec dictum fringilla felis, ac aliquet velit sagittis at. In porttitor aliquet metus. Phasellus enim massa, tristique eu orci consequat, viverra porta nibh. Mauris vehicula pharetra eros, eget consequat nunc aliquet vitae.',
    colors: ['blue'],
    images: dummyImages
  },
  {
    id: '3',
    title: 'OPPO K3',
    category: 'electronics',
    oldPrice: 200,
    price: 150,
    discount: 25,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris quam diam, congue vitae placerat id, porta quis magna. Donec dictum fringilla felis, ac aliquet velit sagittis at. In porttitor aliquet metus. Phasellus enim massa, tristique eu orci consequat, viverra porta nibh. Mauris vehicula pharetra eros, eget consequat nunc aliquet vitae.',
    colors: ['red'],
    images: dummyImages
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

export const MainScreen = Main;
