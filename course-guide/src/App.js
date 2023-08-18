import React from 'react'
import data from './data' 
import Card from './Card'

export default function App() {
  const cards = data.map(item => {
    return (
      <Card
      key = {item.title} 
      {...item}
    />
    )
  })
  return (
    <div>
      {cards}
    </div>
  );
}


