import React from 'react'
import { useGetProductByIdQuery } from '../app/service/dummyData'
const SpecificProduct = () => {
    const {data , isError, isLoading} = useGetProductByIdQuery(23);
    console.log(data);
    if(isError){
        return <h1>OoohNoooooo...</h1>
    }
    if(isLoading){
        return <h1>Loading.....</h1>
    }
  return <div>

    <h1>{data?.title}</h1>
    <h1>{data?.category}</h1>
    <h1>{data?.description}</h1>

    </div>
}

export default SpecificProduct