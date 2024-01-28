const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

// PUT /gallery/like/:id
router.put('/like/:id', (req, res) => {
  // code here
  const galleryId = req.params.id;
  const queryText = `UPDATE gallery SET likes = likes + 1 WHERE id = $1;`;

  pool
    .query(queryText, [galleryId])
    .then((response) => {
      res.sendStatus(200);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
});

// GET /gallery
router.get('/', (req, res) => {
  // code here
  const sqlText = `SELECT * FROM gallery ORDER BY title;`;
  pool
    .query(sqlText)
    .then((result) => {
      console.log('DB returned', result);
      res.send(result.rows);
    })
    .catch((error) => {
      console.log(`Error making DB ${sqlText}`, error)
    });
});

module.exports = router;
