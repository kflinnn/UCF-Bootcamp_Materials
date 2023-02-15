// TODO: Add a comment indicating how this file fits into the MVC framework (is it a Model, a View, or a Controller?) and what it is responsible for handling. this is a controller, it's responsible for the handoff. 

const router = require('express').Router();

// TODO: to return a file, specifically an index.html.
router.get('/', async (req, res) => {
//TODO: The index.html is rendered
  res.render('all');
});

module.exports = router;
