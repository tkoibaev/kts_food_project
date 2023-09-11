import React from 'react';

import styles from './ingredients.module.scss';

import Text from 'components/Text';
import IngredientIcon from 'components/icons/IngredientIcon';
import EquipmentIcon from 'components/icons/EquipmentIcon';

export type DishIngredientsProps = {
  list: { original: string }[];
};

const DishIngredients: React.FC<DishIngredientsProps> = ({ list }) => {
  return (
    <div className={styles.blok}>
      <div className={styles.ingredients}>
        <Text tag="h2" weight="bold">
          Ingredients
        </Text>
        <div className={styles['ingredient-list']}>
          {list.map((ingredient, index) => (
            <div className={styles['ingredient-list_item']} key={index}>
              <div className="">
                <IngredientIcon />
              </div>
              <div>
                <Text view="p-16">{ingredient.original}</Text>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className={styles['ingredient__vertical']}>
        <EquipmentIcon />
        <div className={styles['ingredient__vertical-line']}></div>
      </div>
    </div>
  );
};

export default DishIngredients;
