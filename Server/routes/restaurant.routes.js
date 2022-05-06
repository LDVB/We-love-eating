const router = require("express").Router();
const Restaurant = require ('./../models/Restaurant.model')

//mostramos todos los Restaurantes

router.get('/getAllRestaurant', (req, res) =>{
    
    Restaurant
        .find()
        .select ('name  image')
        .then (response =>  res.json (response))
        .catch (err => res.status (500).json(err))
})

//mostramos perfil Restaurante

router.get("/getOneRestaurant/:id", (req, res, next) => {

    const { id } = req.params
  
    Restaurant
      .findById(id)
      .then(response => res.json(response))
      .catch(err => res.status(500).json(err))
  });

//Nuevo Restaurante

router.post('/saveRestaurant', (req, res,) =>{

    const {name, image, location, website, description} = req.body

    Restaurant
        .create ({name, image, location, website, description})
        .then (response =>  res.json (response))
        .catch (err => res.status (500).json(err))
})

//Eliminamos un Restaurante

router.delete ('/deleteRestaurant/:id', (req, res) =>{

    const {id} = req.params

    Restaurant
        .findByIdAndDelete(id)
        .then (response =>  res.json (response))
        .catch (err => res.status (500).json(err))
})


module.exports = router;
