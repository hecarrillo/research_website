import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Servicios Ofrecidos</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/suspension.png'
              text='Suspensión'
              label='Nuevos Productos!'
              path='/services'
            />
            <CardItem
              src='images/motor.png'
              text='Motor'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/transmision.jpg'
              text='Transmisión'
              label='Oferta en transmisiones'
              path='/services'
            />
            <CardItem
              src='images/img-4.jpg'
              text='Lorem Ipsum Dolor'
              label='Item 3'
              path='/products'
            />
            <CardItem
              src='images/img-8.jpg'
              text='Lorem Ipsum Dolor'
              label='Item 4'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
