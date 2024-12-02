import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import {config} from '../../../config'
import {getData} from '../../../lib'
import Loading from '../../Component/Loading/Loading'
import ProductCard from '../../Component/Pagination/ProductCard/ProductCard'
import CategoryFilters from '../../Component/CategoryFilters/CategoryFilters'

const Category = () => {

const {id} = useParams()
const [isLoading, setIsLoading] = useState(false)
const [products, setProducts] = useState([])

useEffect(()=>{
  const fetchData = async () => {
    const endpoint = `${config?.baseUrl}/products/${id}`
    try{
      const data = await getData(endpoint)
      setProducts(true)
    }catch(error){
      console.error("Error Fetching data", Error)
    }finally{
      setIsLoading(false)
    }
  }
  fetchData()
},[id])


const formatId = (id) => {
  return id
  .replace(/([a-z])([A-Z])/g, "$1 $2")
  .replace(/(^\w|\s\w)/g, (match) => match.toUpperCase());
}

  return (
    <section>
     {isLoading ? <Loading /> : <div className='container'>
      <h2 className='text-4xl text-center font-semibold mb-5'>{formatId(id)}</h2>

      <div className="flex  items-start gap-10">
            <CategoryFilters id={id} />
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
              {products?.map((item) => (
                <ProductCard item={item} key={item?._id} />
              ))}
            </div>
          </div>

      </div>}
    </section>
  )
}

export default Category
