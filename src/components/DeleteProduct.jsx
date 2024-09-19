import React from 'react'
import { useDeleteProductMutation } from '../app/service/dummyData'
const DeleteProduct = ({productId}) => {
    const [deleteProduct,{data , isError , isLoading}] = useDeleteProductMutation();

    const deleteHandler = async() =>{
        try {
            await deleteProduct(productId);
        } catch (error) {
            console.log("getting error")
        }
    }

    if(isError){
        return <h1>OoohNoooooo...</h1>
    }
    if(isLoading){
        return <h1>Loading.....</h1>
    }
    
  return <div>

    <h1>Name of item which has been deleted {data?.title}</h1>
   
    <button onClick={deleteHandler} disabled={isLoading}>Delete Product</button>
    </div>
}

export default DeleteProduct;