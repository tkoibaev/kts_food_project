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

import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";

import '../../assets/recipes.png'


const DishPage = () => {
    const [value, setValue] = useState<Option[]>([]);  
    const [dish, setDish] = useState([]);
    // const [cards, setCard] = useState([]);
    // const [hasMore, setHasMore] = useState(true);

    interface el {
        id: number;
        preparationMinutes: string;
        cookingMinutes: string;
        image: string;
        aggregateLikes: string;
        servings: string;
    }

    useEffect(()=>{
        const fetch = async () => {
            const result = await axios({
                method:'get',
                url:'https://api.spoonacular.com/recipes/782585/information?apiKey=fa7c6c2090c94745a6ec889e612a96da&addRecipeInformation=true'
            })
            setDish(result.data.results.map((pass:el)=>({
                id: pass.id,
                image: pass.image,
                preparationMinutes: pass.preparationMinutes,
                cookingMinutes: pass.cookingMinutes, 
                rating: pass.aggregateLikes,
                servings: pass.servings
            })))
        }

        fetch()
    },[])

    return(
        <div className="dish-page">
            <div className="dish-page__common-info">
                {dish.map((dish:el)=>
                <CommonInfo
                image={dish.image}
                preparation={dish.preparationMinutes}
                cooking={dish.cookingMinutes}
                ratings={dish.aggregateLikes}
                servings={dish.servings}
                />
                )}
            </div>
        </div>
    )
}

export default DishPage


