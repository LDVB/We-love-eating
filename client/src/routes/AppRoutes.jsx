import {Routes, Route} from 'react-router-dom'
import Landing from '../pages/LandingPage/LandingPage'
import RestaurantList from '../pages/RestaurantListPages/RestaurantListPages'


const AppRoutes = () => {

    return (

        <Routes>
            <Route path='/' element={<Landing/>} />
            <Route path='/Restaurantes' element={<RestaurantList/>} />
            <Route path='*' element={<h1>Error 404</h1>} />         
        </Routes>
    )

}

export default AppRoutes