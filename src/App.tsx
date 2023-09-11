import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import '../src/styles/styles.scss';

import Header from 'components/Header';
import RecipesPage from 'components/RecipesPage/RecipesPage';
import DishPage from 'components/Dish/DishPage';


const App = () => {
  return (
    <>
      <Header navElements={['Recipes', 'Ingradients', 'Products', 'Menu Items', 'Meal Planning']}></Header>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<RecipesPage />} />
          <Route path="/dish">
            <Route path=":id" element={<DishPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
      {/* <RecipesPage></RecipesPage> */}
      {/* <DishPage></DishPage> */}
    </>
  );
};

export default App;
