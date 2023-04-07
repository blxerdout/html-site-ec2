const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('/Users/blxerdout/new_repos/creativespxce_site/creativespxce_site/index.html');
})

app.get('/products', (req, res) => {
  res.send([
    {
      productId: '101',
      price: 100
    },
    {
      productId: '102',
      price: 150
    }
  ])
})

app.listen(port, ()=> {
  console.log(`Demo app is up and listening to port: ${port}`);
})
 