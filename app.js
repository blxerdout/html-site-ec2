const express = require('express');
const app = express();
const port = 3000;
const path = require('path');


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/index.html'));
});


app.get('/public/styles.css', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/styles.css'));
});




app.use(express.static(path.join(__dirname, '/public/')));


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
 