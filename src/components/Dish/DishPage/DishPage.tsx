import React, {useEffect, useState} from "react";
import axios from "axios";
import { useParams } from 'react-router-dom';

import styles from './DishPage.module.scss'
import '../../assets/recipes.png'


import { Option } from "components/RecipesPage/Dropdown";
import CommonInfo from "components/Dish/CommonIfo";
import DishTitle from "components/Dish/Title";
import DishDescription from "components/Dish/Description";
import DishIngredients from "components/Dish/Ingredients";
import DishEquipment from "components/Dish/Equipment";
import DishDirection from "components/Dish/Direction";







const DishPage = () => {
    const [value, setValue] = useState<Option[]>([]);  
    const [dish, setDish] = useState<el>();
    // const [cards, setCard] = useState([]);
    // const [hasMore, setHasMore] = useState(true);

    interface el {
        id: number;
        preparationMinutes: string;
        cookingMinutes: string;
        image: string;
        aggregateLikes: string;
        servings: string;
        readyMinutes:string;

        title:string;

        summary:string;

        extendedIngredients:[];

        equipment:[];
    }

    const { id } = useParams()

    useEffect(()=>{
        const fetch = async () => {
            const result = await axios({
                method:'get',
                url:`https://api.spoonacular.com/recipes/${id}/information?apiKey=e3eb9eb1dbd54b63aa8410aa35ae2a36&addRecipeInformation=true&instructionsRequired=true&includeEquipment=true`
            })
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
                extendedIngredients:result.data.extendedIngredients,
                equipment:result.data.analyzedInstructions[0].steps,
              });

            //   console.log(result.data)
            //   console.log(result.data.analyzedInstructions[0].steps[1].equipment[0].name)

        }

        fetch()
    },[])

    return(
        <div className={styles['dish-page']}>
            {dish && (<DishTitle className={styles["dish-page__title"]}>
                {dish.title}
            </DishTitle>)
            }
            <div className={styles["dish-page__common-info"]}>
                {dish && (<CommonInfo
                image={dish.image}
                preparation={dish.preparationMinutes}
                cooking={dish.cookingMinutes}
                total={dish.readyMinutes}
                ratings={dish.aggregateLikes}
                servings={dish.servings}
                />)}
            </div>
            <div className={styles["dish-page__description"]}>
                {dish &&
                (<DishDescription>
                    <div dangerouslySetInnerHTML={{ __html: dish.summary }}></div>
                </DishDescription>
                )}
            </div>
            <div className={styles["dish-page__need"]}>
                <div>
                    {dish && 
                    (<DishIngredients list={dish.extendedIngredients} />
                    )}
                </div>
                <div>
                    {dish && 
                    (<DishEquipment list={dish.equipment} />
                    )}
                </div>
            </div>
                
            <div>
                {dish && 
                (<DishDirection list={dish.equipment} />
                )}
            </div>
        </div>
    )
}

export default DishPage


