import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

import styles from './DishPage.module.scss';
import '../../../src/components/assets/recipes.png';

import { Option } from 'components/RecipesPage/Dropdown';
import CommonInfo from 'components/Dish/CommonIfo';
import DishTitle from 'components/Dish/Title';
import DishDescription from 'components/Dish/Description';
import DishIngredients from 'components/Dish/Ingredients';
import DishEquipment from 'components/Dish/Equipment';
import DishDirection from 'components/Dish/Direction';

import { dishInfo } from '../../config';

const apiKey = '35c0d5eef2554a03ad6c2caad7962b2a';
//fa7c6c2090c94745a6ec889e612a96da
//855cdc3f7d7548649e1b838fd967ca2d
//efa577eb5e8e4f1fa5087327495ea145

const DishPage = () => {
  const [value, setValue] = useState<Option[]>([]);
  const [dish, setDish] = useState<dishInfo>();

  const { id } = useParams();

  useEffect(() => {
    const fetch = async () => {
      const result = await axios({
        method: 'get',
        url: `https://api.spoonacular.com/recipes/${id}/information?apiKey=${apiKey}&addRecipeInformation=true&instructionsRequired=true&includeEquipment=true`,
      });
      setDish({
        id: result.data.id,
        title: result.data.title,
        image: result.data.image,
        preparationMinutes: result.data.preparationMinutes,
        cookingMinutes: result.data.cookingMinutes,
        readyMinutes: result.data.readyInMinutes,
        aggregateLikes: result.data.aggregateLikes,
        servings: result.data.servings,
        summary: result.data.summary,
        extendedIngredients: result.data.extendedIngredients,
        equipment: result.data.analyzedInstructions[0].steps,
      });
    };

    fetch();
  }, []);

  return (
    <div className={styles['dish-page']}>
      {dish && <DishTitle className={styles['dish-page__title']}>{dish.title}</DishTitle>}
      <div className={styles['dish-page__common-info']}>
        {dish && (
          <CommonInfo
            image={dish.image}
            preparation={dish.preparationMinutes}
            cooking={dish.cookingMinutes}
            total={dish.readyMinutes}
            ratings={dish.aggregateLikes}
            servings={dish.servings}
          />
        )}
      </div>
      <div className={styles['dish-page__description']}>
        {dish && (
          <DishDescription>
            <div dangerouslySetInnerHTML={{ __html: dish.summary }}></div>
          </DishDescription>
        )}
      </div>
      <div className={styles['dish-page__need']}>
        <div>{dish && <DishIngredients list={dish.extendedIngredients} />}</div>
        <div>{dish && <DishEquipment list={dish.equipment} />}</div>
      </div>

      <div>{dish && <DishDirection list={dish.equipment} />}</div>
    </div>
  );
};

export default DishPage;
