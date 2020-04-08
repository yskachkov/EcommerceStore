import { createSelector } from '@reduxjs/toolkit';
import isEmpty from 'lodash/isEmpty';

export const getCategories = state => state.main.categories;

export const getProducts = state => state.main.products;

export const getCategoriesSections = createSelector(
  [getCategories, getProducts],
  (categories, products) => {
    if (isEmpty(categories)) {
      return [];
    }

    const categoryList = [...(categories?.values?.() || [])];
    const productList = [...(products?.values?.() || [])];

    return categoryList.map(({ id, name }) => ({
      id,
      name,
      data: [productList.filter(({ categoryId }) => categoryId === id)]
    }));
  }
);
