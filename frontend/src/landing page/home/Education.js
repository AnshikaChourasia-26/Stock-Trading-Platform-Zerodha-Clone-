import React from 'react';
 function Education() {
    return ( 
        <div className='container'>
            <div className='row'>
                <div className='col-5'>
                    <img src='media/images/education.svg'/>
                </div>
                <div className='col-7'>
                  
                  <div className='p-5'>
                <h3 className='mb-4'>Free and open market education</h3>
                  <p className='text-muted'>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
                  <a href=''>varsity <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                  <p className='text-muted mt-4'>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
                  <a href=''>TradingQ&A <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>

                  </div>
                 </div>
               

            </div>
        </div>
     );
 }
 
 export default Education;