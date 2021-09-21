const Express = require('Express');
const dotenv = require('dotenv');
const cors = require('cors');
const { json } = require('body-parser');
const axios = require('axios');

const app = Express()

app.use(cors())
app.use(json())

const { parsed: config } = dotenv.config();

const BASE_URL = `https://api.cloudinary.com/v1_1/${config.CLOUD_NAME}`

const auth = {
  username: config.API_KEY,
  password: config.API_SECRET,
}

//photos loading and load more
app.get("/", (req, res) => res.status(200).send(`frontend at https://github.com/Smeks-ops/Image-Gallery`))


app.get('/photos', async (req, res) => {
  const response = await axios.get(BASE_URL + '/resources/image', {
    auth,
    params: {
      next_cursor: req.query.next_cursor
    },
  });
  return res.send(response.data)
});

//search endpoint
app.get('/search', async (req, res) => {
  const response = await axios.get(BASE_URL + '/resources/search', {
    auth,
    params: {
      expression: req.query.expression
    },
  });
  return res.send(response.data)
});

module.exports = app