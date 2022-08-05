import React,{useState} from 'react'

export default function Mainpage() {
   const [images,setimages]=useState([])
   const [cart,setcart]=useState([])
    fetch("http://fakestoreapi.com/products")
    .then((response)=>response.json())
    .then((data)=>{
        setimages(data)
    })
    function handleAdd(e){
        fetch(`http://fakestoreapi.com/products/${e.target.id}`)
             .then((response)=>response.json())
             .then((data)=>{
              cart.push(data)
    })
    }
  return (
    <div className='container-fluid'>
        <header className='bg-danger text-center text-white p-2'>
            <h1><span className='bi bi-cart'></span> shop - cart</h1> 
        </header>
        <hr/>
        <section className='row'>
            <div className='col-8 d-flex flex-wrap ' style={{height:"700px"}}>
                {
                    images.map((items)=>
                        <div key={items.id} className='card m-4 p-2' style={{width:"390px"}} >

                            <img src={items.image} className="card-img-top" height="280"/>
                            <div className='card-header text-center p-4 'style={{height:"100px"}}>
                                <p>{items.title}</p>
                            </div>
                            <div className='card-body'>
                                <dl>
                                    <dt>Price</dt>
                                    <dd>{items.price}</dd>
                                    <dt>Rating</dt>
                                    <dd>
                                        <span className='bi bi-star-fill text-success'></span>
                                        {items.rating.rate} <span>{items.rating.count}</span>
                                    </dd>
                                </dl>
                            </div>
                            <button id={items.id} onClick={handleAdd} className="btn btn-danger w-100">
                               <span className='bi bi-cart4'></span> Add to cart</button>
                        </div>
                    )
                }
            </div>
            <div className='col-4'>
                <button className="btn btn-warning w-100">
                    <span className='bi bi-cart3'> Your card items</span>
                </button> 
                    <div className='col-16 d-flex flex-wrap justfy-content-center' style={{height:"700px"}}>
                    {
                        cart.map((product)=>
                            <div key={product.id} className="card m-3 p-2" style={{width:"700"}}>
                                <div><img src={product.image} height="500px" width="500"/></div>
                                <div className='card-header text-center p-4 'style={{height:"100px"}}>
                                    {product.title}</div>
                                <div>
                                <a href={product.image} download ><button className='btn btn-primary text-center w-100'>Download</button></a>
                                </div>  
                            </div>
                            )              
                    }   
                    </div>        
            </div>
        </section>
    </div>
  )
}
