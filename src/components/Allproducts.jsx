import React from 'react'
import { useGetAllProductQuery } from '../app/service/dummyData'
const Allproducts = () => {
    const {data , isError , isLoading} = useGetAllProductQuery();
    console.log(data);
    if(isError){
        return <h1>OoohNoooooo...</h1>
    }
    if(isLoading){
        return <h1>Loading.....</h1>
    }
  return <div>

    {data?.products.map((p)=>(
            <div  key={p.id}>
            <h1>{p.title}</h1>
            <p>{p.description}</p>
            <img src={p.images}/>
            </div>
    ))}

    </div>
  
}

export default Allproducts