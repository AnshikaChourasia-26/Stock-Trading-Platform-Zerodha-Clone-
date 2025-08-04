import React from "react";

function LeftSection({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore
}) {
  return <div className="container mt-5">
    <div className="row">
        <div className="col-6 p-5">
            <img src={imageURL}/>
        </div>
        <div className="col-6 p-5 mt-5">
            <h2 className='mb-3'style={{color: "#454545"}}>{productName}</h2>
            <p  className='text-muted'style={{lineHeight: "2.2rem", fontSize: "1.2rem"}}>{productDescription}</p>
            <div>
            <a href={tryDemo} style={{textDecoration: "none"}}>Try Demo <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
            <a href={learnMore} style={{marginLeft: "70px", textDecoration: "none"}}>Learn More <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
            </div>
            <div className="mt-4">
            <a href={googlePlay}><img src="media/images/googlePlayBadge.svg"/></a>
            <a href={appStore} style={{marginLeft: "30px"}}><img src="media/images/appstoreBadge.svg"/></a>
            </div>

        </div>

    </div>
  </div>
}

export default LeftSection;
