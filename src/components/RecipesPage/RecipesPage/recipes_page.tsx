import React from "react";
import {useEffect, useState} from 'react'

import './recipes_page.scss'
import { Link } from 'react-router-dom';
import Card from "components/RecipesPage/Card";
import Button from "components/Button";
import Input from "components/RecipesPage/Input";
import Dropdown from "components/RecipesPage/Dropdown";
import Text from "components/Text";
import { Option } from "components/RecipesPage/Dropdown";

import axios from "axios";

import '../../assets/recipes.png'


const RecipesPage = () => {
    const [value, setValue] = useState<Option[]>([]);  
    // const [card, setCard] = useState([]);
    const [cards, setCard] = useState([]);
    // const [hasMore, setHasMore] = useState(true);

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
                url:'https://api.spoonacular.com/recipes/complexSearch?apiKey=855cdc3f7d7548649e1b838fd967ca2d'
            })
            setCard(result.data.results.map((pass:el)=>({
                id: pass.id,
                title: pass.title,
                image: pass.image
            })))
            console.log('sssssssssssss')
        }
        fetch()
    },[])


    return(
        <div className="recipes-page">
            <div className="recipes-page__picture"></div>
            <div className="recipes-page__content">
                <Text tag="h3" className="recipes-page__content_description">Find the perfect food and drink ideas for every occasion, from weeknight dinners to holiday feasts.</Text>
                <div className="recipes-page__actions">
                    <div className="recipes-page__actions_input">
                        <Input placeholder="Enter dishes..." value={''} onChange={() => {}}></Input>
                        <Button style={{borderRadius:'10px'}}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                            <g clip-path="url(#clip0_505_662)">
                            <path d="M16 14H15.21L14.93 13.73C15.91 12.59 16.5 11.11 16.5 9.5C16.5 5.91 13.59 3 10 3C6.41 3 3.5 5.91 3.5 9.5C3.5 13.09 6.41 16 10 16C11.61 16 13.09 15.41 14.23 14.43L14.5 14.71V15.5L19.5 20.49L20.99 19L16 14ZM10 14C7.51 14 5.5 11.99 5.5 9.5C5.5 7.01 7.51 5 10 5C12.49 5 14.5 7.01 14.5 9.5C14.5 11.99 12.49 14 10 14Z" fill="white"/>
                            </g>
                            <defs>
                            <clipPath id="clip0_505_662">
                            <rect width="24" height="24" fill="white" transform="translate(0.5)"/>
                            </clipPath>
                            </defs>
                            </svg>
                        </Button>
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
                        <Link to={`/dish/${card.id}`}>
                             <Card captionSlot={card.id} contentSlot={card.id} actionSlot={<Button>Save</Button>} image={card.image} title={card.title} subtitle={card.id} />
                        </Link>
                        // <Card captionSlot={card.id} contentSlot={card.id} actionSlot={<Button>Save</Button>} image={card.image} title={card.title} subtitle={card.id} />)
                    )}
                </div>
            </div>  
        </div>
        
    )
}

export default RecipesPage


