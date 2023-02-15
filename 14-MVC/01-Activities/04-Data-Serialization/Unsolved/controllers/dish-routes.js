const router = require('express').Router();
const sequelize = require('../config/connection');
const Dish = require('../models/Dish');

router.get('/', async (req, res) => {
  // TODO: Build out this route so that it serializes all of the dish objects that it receives. See the 'get' route below for a hint.
    const dishData = await Dish.findAll().catch((err) => {
      res.json(err);
    });
    const dishes = dishData.map((dish) => dish.get({ plain: true }));
    console.log(dishes);
    res.render('all', { dishes });
    // res.status(200).json({something : 'something' });
  
  });

// route to get one dish
router.get('/dish/:id', async (req, res) => {
  try{ 
      const dishData = await Dish.findByPk(req.params.id);
      if(!dishData) {
          res.status(404).json({message: 'No dish with this id!'});
          return;
      }
      const dish = dishData.get({ plain: true });
      res.render('dish', dish);
    } catch (err) {
        res.status(500).json(err);
    };     
});

module.exports = router;
