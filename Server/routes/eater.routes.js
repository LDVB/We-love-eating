const router = require("express").Router();
const Eater = require ('./../models/Eater.model')

//mostramos todos los Eater

router.get('/getAllEaters', (req, res) =>{
    
    Eater
        .find()
        .select ('name image')
        .then (response =>  res.json (response))
        .catch (err => res.status (500).json(err))
})

//mostramos perfil Eater

router.get("/getOneEater/:id", (req, res, next) => {

    const { id } = req.params
  
    Eater
      .findById(id)
      .then(response => res.json(response))
      .catch(err => res.status(500).json(err))
  });

//Nuevo Eater

router.post('/saveEater', (req, res,) =>{

    const {name, image, email} = req.body

    Image
        .create ({name, image, email})
        .then (response =>  res.json (response))
        .catch (err => res.status (500).json(err))
})

//Eliminamos un Eater

router.delete ('/deleteEater/:id', (req, res) =>{

    const {id} = req.params

    Eater
        .findByIdAndDelete(id)
        .then (response =>  res.json (response))
        .catch (err => res.status (500).json(err))
})


module.exports = router;
