import React from "react";
import {useEffect, useState} from 'react'

import './recipes_page.scss'

import Card from "components/RecipesPage/Card";
import Button from "components/Button";
import Input from "components/RecipesPage/Input";
import Dropdown from "components/RecipesPage/Dropdown";
import Text from "components/Text";
import { Option } from "components/RecipesPage/Dropdown";

import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";

import '../../assets/recipes.png'


const RecipesPage = () => {
    const [value, setValue] = useState<Option[]>([]);  
    // const [card, setCard] = useState([]);
    const [cards, setCard] = useState([]);
    const [hasMore, setHasMore] = useState(true);

    interface el {
        id: number;
        title: string;
        image: string;
    }

    const options = [
        { key: 'msk', value: 'Москва' },
        { key: 'spb', value: 'Санкт-Петербург' },
        { key: 'ekb', value: 'Екатеринбург' },
    ];

    useEffect(()=>{
        const fetch = async () => {
            const result = await axios({
                method:'get',
                url:'https://api.spoonacular.com/recipes/complexSearch?apiKey=fa7c6c2090c94745a6ec889e612a96da'
            })
            setCard(result.data.results.map((pass:el)=>({
                id: pass.id,
                title: pass.title,
                image: pass.image
            })))
        }

        fetch()
    },[])

    const fetchMoreData = async () => {
        const result = await axios({
          method: 'get',
          url: 'https://api.spoonacular.com/recipes/complexSearch?apiKey=fa7c6c2090c94745a6ec889e612a96da'
        });
        const newCards = result.data.results.map((pass: el) => ({
          id: pass.id,
          title: pass.title,
          image: pass.image
        }));
    
        // Если новые карточки не получены, значит больше нет данных для загрузки
        if (newCards.length === 0) {
          setHasMore(false);
          return;
        }
        // Объединяем новые карточки с уже существующими
        setCard(prevCards => prevCards.concat(newCards))
      };

    return(
        <div className="recipes-page">
            <div className="recipes-page__picture"></div>
            <div className="recipes-page__content">
                <Text tag="h3" className="recipes-page__content_description">Find the perfect food and drink ideas for every occasion, from weeknight dinners to holiday feasts.</Text>
                <div className="recipes-page__actions">
                    <div className="recipes-page__actions_input">
                        <Input placeholder="Enter dishes..." value={''} onChange={() => {}}></Input>
                    </div>
                    <div className="recipes-page__actions_dropdown">
                    <Dropdown
                        options={options}
                        value={value}
                        onChange={setValue}
                        getTitle={(values: Option[]) => values.length === 0 ? 'Выберите города' : values.map(({ value }) => value).join(', ')}
                        />
                    </div>
                </div>

                <div className="recipes-page__cards-block">
                    {cards.map((card: el) =>
                        <Card captionSlot={card.id} contentSlot={card.id} actionSlot={<Button>Save</Button>} image={card.image} title={card.title} subtitle={card.id} />)
                    }
                </div>
            
            </div>  
        </div>
        
    )
}

export default RecipesPage


