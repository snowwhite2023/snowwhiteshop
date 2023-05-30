import React from "react";


export default function Carousel() {

	return(
	<div className="bg-blue-200 mx-auto">
<div className="carousel w-full mx-auto">
  <div id="item1" className="carousel-item w-full">
    <img src="/carousel/b.png" className="w-md" />
  </div> 
  <div id="item2" className="carousel-item w-full">
    <img src="/carousel/c.png" className="w-md" />
  </div> 
  <div id="item3" className="carousel-item w-full">
    <img src="/carousel/d.png" className="w-md" />
  </div> 
  
</div> 
<div className="flex justify-center w-full py-2 gap-2">
  <a href="#item1" className="btn btn-xs">1</a> 
  <a href="#item2" className="btn btn-xs">2</a> 
  <a href="#item3" className="btn btn-xs">3</a> 
</div>
</div>)
}
