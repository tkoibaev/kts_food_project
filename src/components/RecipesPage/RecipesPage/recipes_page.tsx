import React, { useEffect, useLayoutEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import InfiniteScroll from 'react-infinite-scroll-component';
import axios from 'axios';

import styles from './recipes_page.module.scss';

import { Option } from 'components/RecipesPage/Dropdown';
import Card from 'components/RecipesPage/Card';
import Button from 'components/Button';
import Input from 'components/RecipesPage/Input';
import Dropdown from 'components/RecipesPage/Dropdown';
import Text from 'components/Text';
import Loader from 'components/Loader';
import RecipesText from 'components/icons/RecipesText';
import FindIcon from 'components/icons/FindIcon';

import {cardInfoRequest} from '../../../config'
import {cardInfoProps} from '../../../config'

const RecipesPage = () => {
  const [value, setValue] = useState<Option[]>([]);
  const [cards, setCard] = useState<cardInfoProps[]>([]);
  const [offset, setOffset] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  // const [isInitialFetchDone, setInitialFetchDone] = useState(false);



  const options = [
    { key: 'hot', value: 'Горячее' },
    { key: 'cold', value: 'Холодное' },
    { key: 'desert', value: 'Десерты' },
  ];

  useEffect(() => {
    const fetch = async () => {
      if (cards.length > 24) {
        setHasMore(false);
        return;
      }
      const result = await axios({
        method: 'get',
        url: `https://api.spoonacular.com/recipes/complexSearch?apiKey=855cdc3f7d7548649e1b838fd967ca2d&addRecipeInformation=true&instructionsRequired=true&includeEquipment=true&analyzedInstructions=true&addRecipeNutrition=true&offset=${offset}&number=9`,
      });
      // setCard(result.data.results.map((pass:el)=>({
      //     id: pass.id,
      //     title: pass.title,
      //     image: pass.image,
      //     readyInMinutes: pass.readyInMinutes,
      //     ccal: pass.nutrition.nutrients[0].amount,
      //     ings: pass.nutrition.ingredients.reduce((acc,elem,index)=> {
      //         if (index === 0) {
      //             return elem.name;
      //           } else {
      //             return acc + "+" + elem.name;
      //           }
      //         },'')
      // })))
      // setCard((prevCards) => [...prevCards, ...newCards]);
      // setHasMore(car.length > 0);

      //При бесконечном скролле возникает проблема: поочередно уходят запросы на 3 карточки, и почему-то первая тройка рендерится 2 раза. При обычном запросе(нет б.с.) все работает нормально
      const newCards = result.data.results.map((pass: cardInfoRequest) => ({
        id: pass.id,
        title: pass.title,
        image: pass.image,
        readyInMinutes: pass.readyInMinutes,
        ccal: pass.nutrition.nutrients[0].amount,
        ings: pass.nutrition.ingredients.reduce((acc, elem, index) => {
          if (index === 0) {
            return elem.name;
          } else {
            return acc + '+' + elem.name;
          }
        }, ''),
      }));
      setCard((prevCards) => [...prevCards, ...newCards]);
    };
    fetch();
  }, [offset]);

  const loadMore = () => {
    setOffset((prevOffset) => prevOffset + 9);
  };

  return (
    <div className={styles['recipes-page']}>
      <div className={styles['recipes-page__picture']}>
        <RecipesText />
      </div>
      <div className={styles['recipes-page__content']}>
        <Text tag="h3" className={styles['recipes-page__content_description']}>
          Find the perfect food and drink ideas for every occasion, from weeknight dinners to holiday feasts.
        </Text>
        <div className={styles['recipes-page__actions']}>
          <div className={styles['recipes-page__actions_input']}>
            <Input placeholder="Enter dishes..." value={''} onChange={() => {}}></Input>
            <Button style={{ borderRadius: '10px' }}>
              <FindIcon />
            </Button>
          </div>
          <div className={styles['recipes-page__actions_dropdown']}>
            <Dropdown
              options={options}
              value={value}
              onChange={setValue}
              getTitle={(values: Option[]) =>
                values.length === 0 ? 'Categories' : values.map(({ value }) => value).join(', ')
              }
            />
          </div>
        </div>

        <InfiniteScroll
          dataLength={cards.length}
          next={loadMore}
          hasMore={hasMore}
          loader={
            <div
              style={{ width: '300px', height: '80px', margin: '0 auto', display: 'flex', justifyContent: 'center' }}
            >
              <Loader size="l"></Loader>
            </div>
          }
          endMessage={<Text>No more recipes to load.</Text>}
        >
          <div className={styles['recipes-page__cards-block']}>
            {cards.map((card: cardInfoProps) => (
              <Link to={`/dish/${card.id}`} key={card.id}>
                <Card
                  captionSlot={card.readyInMinutes}
                  contentSlot={`${card.ccal} kkal`}
                  actionSlot={<Button style={{ borderRadius: '10px' }}>Save</Button>}
                  image={card.image}
                  title={card.title}
                  subtitle={card.ings}
                />
              </Link>
            ))}
          </div>
        </InfiniteScroll>
      </div>
    </div>
  );
};

export default RecipesPage;
