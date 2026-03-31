
import './App.css'
import Banner from './Component/Banner'
import Navbar from './Component/Navbar'
import Product from './Component/Product'
import StaticsUser from './Component/StaticsUser'



const getProduct = async () =>{
  const res = await fetch("/Product.json")
return res.json()

}

const productPromise = getProduct()

function App() {


  return (
    <>
    <Navbar></Navbar>
    <Banner></Banner>
    <StaticsUser></StaticsUser>
    <Product productPromise ={productPromise} > </Product>







    </>
  )
}

export default App
