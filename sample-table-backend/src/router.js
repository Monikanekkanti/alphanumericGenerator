const express = require('express');
const controller = require('./controller');
const router = express.Router();

router.get('/alphaNumbers/:number', async (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
    const { number } = req.params;
    try {
      const result = await controller.convertToAlphaNumeric(number);
      res.send({
        success: true,
        data: result,
      });
    } catch (err) {
      res.status(400).send(err.message);
    }
});

module.exports = router;
