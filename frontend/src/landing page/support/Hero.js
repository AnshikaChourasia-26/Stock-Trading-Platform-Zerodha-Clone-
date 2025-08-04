import React from 'react';

function Hero() {
    return ( 
       
       <section className='container-fluid' id='supportHero'>
        <div className='p-3' id='supportWrapper'>
            <h1>Support Portal</h1>
            <button type='button' class="btn btn-primary">My Tickets</button>
            
            </div>
            <div className='row'>
              <div className='col p-4'>
              <input type='text' placeholder= ' Eg: how do i activate F&O....'></input>
              </div>
              </div>
       </section>
     );
}

export default Hero;