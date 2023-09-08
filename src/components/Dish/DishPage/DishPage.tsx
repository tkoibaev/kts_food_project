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
            setDish([
                {
                  id: result.data.results.id,
                  title: result.data.results.title,
                  image: result.data.results.image,
                  preparationMinutes: result.data.results.preparationMinutes,
                  cookingMinutes: result.data.results.cookingMinutes,
                  aggregateLikes: result.data.results.aggregateLikes,
                  servings: result.data.results.servings,
                  summary: result.data.results.summary,
                }
              ]);
            // setDish(result.data.results.map((pass:el)=>({
            //     id: pass.id,
            //     image: pass.image,
            //     preparationMinutes: pass.preparationMinutes,
            //     cookingMinutes: pass.cookingMinutes, 
            //     aggregateLikes: pass.aggregateLikes,
            //     servings: pass.servings,

            //     title: pass.title,

            //     summary: pass.summary,
            // })))
            // console.log('aaaaaaaaaaaaaaa')

            // console.log(result.data.results)
            // console.log('aaaaaaaaaaaaaaa')
        }

        fetch()
    },[])

    return(
        <div className="dish-page">
            {dish.map((dish:el)=>
            <DishTitle>
                {dish.title}
            </DishTitle>
            )}
            <div className="dish-page__common-info">
                {/* {dish.map((dish:el)=> */}
                <CommonInfo
                image={dish.image}
                preparation={dish.preparationMinutes}
                cooking={dish.cookingMinutes}
                ratings={dish.aggregateLikes}
                servings={dish.servings}
                />
                {/* )} */}
            </div>
            <div className="dish-page__description">
                {dish.map((dish:el)=>
                <DishDescription>
                    {dish.summary}
                </DishDescription>
            )}
            </div>
        </div>
    )
}

export default DishPage


