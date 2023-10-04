// const express = require('express');
// const port = process.env.port || 5500;
// const cors = require('cors')

// const app = express();
// app.use(cors())

// const rooms = require('./rooms.json')
// app.get('/', (req, res)=>{
//     res.send('travel port is running')
// })

// app.get('/rooms', (req, res)=>{
//     res.send(rooms)
// })

// app.listen(port, ()=>{
//     console.log('port is running at', port)
// })

const express = require('express');
const port = process.env.port || 5500;
const cors = require('cors');

const app = express();
app.use(cors());


const places = require('./data/places.json');
const hotels = require('./data/hotels.json')

app.get('/', (req, res)=>{
    res.send('travel port is running')
});

app.get('/places', (req, res)=>{
    res.send(places)
})

app.get('/hotels',(req, res)=>{
    res.send(hotels)
})

app.get('/hotels/:id', (req, res)=>{
    const id = req.params.id;
    const singleHotel = hotels.find(n=>n.id === id);
    res.send(singleHotel);
})

app.get('/places/:id', (req, res)=>{
    const id = req.params.id;
   if(id ==0){
    res.send(places)
   }else{
    const hotelsCategory= hotels.filter(n=>n.category_id === id)
    res.send(hotelsCategory)
   }
})



app.listen(port, ()=>{
    console.log('Port is running at', port)
})