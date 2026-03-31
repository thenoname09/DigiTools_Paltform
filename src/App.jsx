
import './App.css'
import Banner from './Component/Banner'
import Navbar from './Component/Navbar'
import Pricing from './Component/Pricing'
import Product from './Component/Product'
import StaticsUser from './Component/StaticsUser'
import StepsSection from './Component/StepsSection'



const getProduct = async () =>{
  const res = await fetch("/Product.json")
return res.json()

}

const productPromise = getProduct()

const getPricing = async () =>{
  const res = await fetch("/PricingData.json")
return res.json()
}
const pricingPromise = getPricing()

function App() {


  return (
    <>
    <Navbar></Navbar>
    <Banner></Banner>
    <StaticsUser></StaticsUser>
    <Product productPromise ={productPromise} > </Product>
    <StepsSection ></StepsSection>
    <Pricing pricingPromise={pricingPromise}></Pricing>






    </>
  )
}

export default App
