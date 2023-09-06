import './App.css'
import '../src/styles/styles.scss'
import {useState, useEffect} from 'react'
import Header from 'components/Header'
import axios from 'axios'


const App = () => {
  
  return (
    <Header navElements={['Recipes','Ingradients','Products','Menu Items','Meal Planning']}></Header>
  )
}

export default App
