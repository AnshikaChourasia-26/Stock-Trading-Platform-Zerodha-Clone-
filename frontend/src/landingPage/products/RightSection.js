import React from 'react';

function RightSection({
  productName,
  productDescription,
  learnMore,
  imageURL,
  
}) {
    return  <div className='container mt-5'>
      <div className='row'>
        <div className='col-6 p-5 mt-5'>
          <h2 style={{color: "454545"}} className='mb-3'>{productName}</h2>
          <p style={{fontSize: "1.2em", lineHeight: "2.1rem"}} className='text-muted'>{productDescription}</p>
          <div>
            <a href={learnMore} style={{textDecoration: "none"}}>{learnMore} <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
          </div>
        </div>
        <div className='col-6'>
          <img src={imageURL} style={{width: "700px"}}/>
        </div>
      </div>
    </div>
}

export default RightSection;