import axios from 'axios'
import { useEffect, useState } from 'react'
import './RestaurantListPages.css'

const RestaurantList = () => {

    let [restaurant, setRestaurant] =useState ([])

    useEffect(() => {

        axios
        .get('http://localhost:5005/api/restaurant/getallRestaurant')
        .then(response => setRestaurant(response.data))
        .catch (err=> console.log (err))
    }, [])

    return (
        <h1>HIIII</h1>

    )

}

export default RestaurantList