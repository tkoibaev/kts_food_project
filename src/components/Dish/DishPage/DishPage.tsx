import React from "react";
import {useEffect, useState} from 'react'

import './DishPage.scss'

import Card from "components/RecipesPage/Card";
import Button from "components/Button";
import Input from "components/RecipesPage/Input";
import Dropdown from "components/RecipesPage/Dropdown";
import Text from "components/Text";
import { Option } from "components/RecipesPage/Dropdown";
import CommonInfo from "components/Dish/CommonIfo";
import DishTitle from "components/Dish/Title";
import DishDescription from "components/Dish/Description";

import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";

import '../../assets/recipes.png'


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

        title:string;

        summary:string;
    }

    useEffect(()=>{
        const fetch = async () => {
            const result = await axios({
                method:'get',
                url:'https://api.spoonacular.com/recipes/782585/information?apiKey=855cdc3f7d7548649e1b838fd967ca2d&addRecipeInformation=true'
                // url:'https://api.spoonacular.com/recipes/complexSearch?apiKey=855cdc3f7d7548649e1b838fd967ca2d&number=1&addRecipeInformation=true&fillIngredients=true'
            })
            setDish({
                id: result.data.id,
                title: result.data.title,
                image: result.data.image,
                preparationMinutes: result.data.preparationMinutes,
                cookingMinutes: result.data.cookingMinutes,
                aggregateLikes: result.data.aggregateLikes,
                servings: result.data.servings,
                summary: result.data.summary,
              });
        }

        fetch()
    },[])

    return(
        <div className="dish-page">
            {dish && (<DishTitle>
                {dish.title}
            </DishTitle>)
            }
            <div className="dish-page__common-info">
                {dish && (<CommonInfo
                image={dish.image}
                preparation={dish.preparationMinutes}
                cooking={dish.cookingMinutes}
                ratings={dish.aggregateLikes}
                servings={dish.servings}
                />)}
            </div>
            <div className="dish-page__description">
                {dish &&
                (<DishDescription>
                    {dish.summary}
                </DishDescription>
                )}
            </div>
        </div>
    )
}

export default DishPage


