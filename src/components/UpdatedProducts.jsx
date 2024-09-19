import React from 'react'
import { useUpdateProductMutation } from '../app/service/dummyData'
const UpdatedProducts = ({productId}) => {

    const [updateProduct,{data,isError, isLoading}]= 
    useUpdateProductMutation();


    const handlerUpdatedProduct= async()=>{
        console.log("getting ")
        try {
            const item={
                "title":"Title updated"
            }
            await updateProduct({
                id:productId,
                updatedProduct:item
            })
        } catch (error) {
            
        }
    }
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
    <button onClick={handlerUpdatedProduct}>Updated Content</button>
    </div>
}

export default UpdatedProducts