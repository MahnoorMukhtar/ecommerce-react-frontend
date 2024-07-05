import React from 'react';
import "./ProductCategory.scss"

const categories = [
    {
      id: 1,
      title: "Gadgets",
      image: "https://i.ibb.co/5GVkd3m/c1.jpg",
    },
    {
      id: 2,
      title: "Womens Fashion",
      image: "https://i.ibb.co/nQKLjrW/c2.jpg",
    },
    {
      id: 3,
      title: "Sport Sneakers",
      image: "https://i.ibb.co/fNkBYgr/c3.jpg",
    },
  ];

  const Category = (props)=>{
    // console.log("category", props)
    return(
            <div className='category'>
                <h2>{props.title}</h2>
                <img src={props.image} alt="category" />
                <button className='-btn'>
                    Shop Now &gt;&gt; &gt; 
                </button>
            </div>
    )   
  }

function ProcuctCategory(props) {
    return (
            <div className='categories'>
                {categories.map((item)=>(
                    <div key={item.id} className='d-flex m-auto'>
                        <Category
                            title={item.title}
                            image ={item.image}
                            />

                    </div>    
                )
                )}
            </div>
    );
}

export default ProcuctCategory;