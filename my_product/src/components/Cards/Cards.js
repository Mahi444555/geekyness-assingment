
import React from 'react'
import './Card.css'



const Cards = (props) => {
    return (
        <div className="card">
            <div className='tag'>
                <span><i class="bi bi-tag"></i></span>
                <span className='stars'><i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-half"></i>
                    <i class="bi bi-star"></i>
                </span>
            </div>
            <div className='img'>
                <img src={props.imgage} alt={props.id} />
            </div>
            <div className='title'>
                <h4 className='title'>{props.title} </h4>
            </div>
            <div className='content'>
                <p >{props.content} <i style={{'color': 'blue'}} class="bi bi-bag-check"></i></p>
            </div>
            <div className='price'>
           <h5 className='price1'>Price:  <i class="bi bi-wallet2 "></i>  <del> {props.newprice} </del></h5>
                <h3 className='price2'>${props.prev} </h3>
                
            </div>
            <div className='details'>
            <span className='cmpy'>Brand: {props.company}</span>
            </div>
            <p className='colr'>Color: {props.color} </p>
        <button style={{'width': 'auto', 'background-color':'#b0bbcf', 'border':'none', 'height':'25px', 'cursor': 'pointer',
    
                'border-radius':'5px'}} className='btn btn-primary'>BUYNOW</button>
          </div>
    );
};

export default Cards;



// import * as React from 'react';
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';

// export default function Cards(props) {
//   return (
//     <Card sx={{ maxWidth: 345 }}>
//       <CardMedia
//         component="img"
//         alt="green iguana"
//         height="140"
//         image={props.imgage}
//       />
//       <CardContent>
//         <Typography gutterBottom variant="h5" component="div">
//           Lizard
//         </Typography>
//         <Typography variant="body2" color="text.secondary">
//           Lizards are a widespread group of squamate reptiles, with over 6,000
//           species, ranging across all continents except Antarctica
//         </Typography>
//       </CardContent>
//       <CardActions>
//         <Button size="small">Share</Button>
//         <Button size="small">Learn More</Button>
//       </CardActions>
//     </Card>
//   );
// }

