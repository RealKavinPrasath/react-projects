import React from 'react'
import data from './data' 
import Card from './Card'
import NavBar from './Navbar'

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
    <div className='page--container'>  
      <NavBar/>
      <section>
        {cards}
      </section>
    </div>
  );
}


