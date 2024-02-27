import React from 'react'

const RocketLoader = () => {
  return (
    <div><div id="LBP">
    <div id="loading">
      <h1>Loading...</h1>
      <h1 class="h1-2">Loading...</h1>
    </div>
    <div id="border">
      <div class="square"></div>
      <div class="square"></div>
      <div class="square"></div>
      <div class="square"></div>
      <div class="square"></div>
    </div>
  
    <div id="spaceship">
      <div id="animateRocket">
        <div id="rocket">
          <section id="nose"></section>
          <section id="body"></section>
        </div>
        <div id="wing1"></div>
        <div id="wing2"></div>
      </div>
      <div class="tail"><span></span></div>    
    </div>
    
    <div id="container">
      <div id="overflow">
        <i class="fa fa-star star1"></i>
        <i class="fa fa-star star2"></i>
        <i class="fa fa-star star3"></i>
        <i class="fa fa-star star4"></i>
        <i class="fa fa-star star5"></i>
        <i class="fa fa-star star6"></i>
        <div id="smoke1">
          <div class="circle"></div>
          <div class="circle"></div>
          <div class="circle"></div>
          <div class="circle"></div>
          <div class="circle"></div>
        </div>
        <div id="smoke2">
          <div class="circle"></div>
          <div class="circle"></div>
          <div class="circle"></div>
          <div class="circle"></div>
          <div class="circle"></div>
        </div>
      </div>
    </div>
    <div id="shadow"></div>
  </div></div>
  )
}

export default RocketLoader