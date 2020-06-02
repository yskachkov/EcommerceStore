import { createSelector } from '@reduxjs/toolkit';
import isEmpty from 'lodash/isEmpty';

import { Entities } from './config';

const getEntityState = entity => state => state.main[entity];

const getEntityList = entity => state => getEntityState(entity)(state).byId;

const getEntityIds = entity => state => getEntityState(entity)(state).allIds;

const getEntityLoading = entity => state => getEntityState(entity)(state).loading;

export const getCategories = state => getEntityState(Entities.Categories)(state);

export const getCategoriesList = state => getEntityList(Entities.Categories)(state);

export const getCategoryIds = state => getEntityIds(Entities.Categories)(state);

export const getCategoriesLoading = state => getEntityLoading(Entities.Categories)(state);

export const getProducts = state => getEntityState(Entities.Products)(state);

export const getProductsLoading = state => getEntityLoading(Entities.Products)(state);

export const getCategoriesSections = createSelector(
  [getCategories, getProducts],
  (
    { byId: categoriesById, allIds: allCategories },
    { byId: productsById, allIds: allProducts }
  ) => {
    if (isEmpty(allCategories) || isEmpty(allProducts)) {
      return [];
    }

    const productList = Object.values(productsById);

    return allCategories.reduce((sections, categoryId) => {
      const { id, title } = categoriesById[categoryId];
      const categoryProducts = productList.filter(({ categoryId }) => categoryId === id);

      if (!isEmpty(categoryProducts)) {
        sections.push({
          id,
          title,
          products: categoryProducts
        });
      }

      return sections;
    }, []);
  }
);

export const getFilter = state => state.main.filter;
