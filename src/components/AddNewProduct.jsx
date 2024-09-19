
import { useAddNewProductMutation } from '../app/service/dummyData'
import React from 'react'

const AddNewProduct = () => {
 const handleAddProduct = async () => {
        try {
            const item = {
                "id": 1,
                "title": "Amazing",
                "description": "nothing else"
            }
            await addNewProduct(item);

        } catch (error) {
            console.error(error);
        }
    }
    const [addNewProduct, { data, isError, isLoading }] = useAddNewProductMutation();
    if (isError) {
        return <h1>OoohNoooooo...</h1>
    }
    if (isLoading) {
        return <h1>Loading.....</h1>
    }

  return (
      <>
      <div>AddNewProduct</div>
      <div>
        <h1>Page</h1>
        <h1>{data?.title}</h1>
        <h1>{data?.category}</h1>
        <h1>{data?.description}</h1>
        <button disabled={isLoading} onClick={handleAddProduct} >Add new Product</button> 
    </div>
    </>
  )
}

export default AddNewProduct