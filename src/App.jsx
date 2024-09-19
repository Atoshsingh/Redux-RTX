import React from 'react'
// import Allproducts from './components/Allproducts'
// import SpecificProduct from './components/SpecificProduct'
// import AddNewProduct from './components/AddNewProduct.jsx'
// import Get from './components/Get.jsx'
import UpdatedProducts from './components/UpdatedProducts.jsx'
import DeleteProduct from './components/DeleteProduct.jsx'

const App = () => {
  return (
    <>
    {/* // <div><Allproducts/></div>
    // <div><SpecificProduct/></div> */}
    {/* <Get/>
    <AddNewProduct/> */}
    {/* <UpdatedProducts productId={2}/> */}
    <DeleteProduct productId={2}/>
    </>
  )
}

export default App