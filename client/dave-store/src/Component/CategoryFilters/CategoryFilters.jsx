import React, {useState, useEffect} from 'react'
import { config } from '../../../config'
import { getData } from '../../../lib'
import { Link } from 'react-router-dom'
import { DNA } from 'react-loader-spinner'



const CategoryFilters = ({id}) => {

    const [categories, setCategories] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        const fetchData = async () => {
            const endpoint = `${config?.baseUrl}/categories`
            try{
setIsLoading(true)
const data = await getData(endpoint)
setCategories(data)
            }catch(error){
console.error("Error fetching data", error)
            } finally{
                setIsLoading(false)
            }
        }
        fetchData()
    }, [])

  return (
    <div className='hidden md:inline-flex flex-col gap-6'>

{/* <p className='text-3xl font-bold'>Filters</p> */}

<div>
{/* <p className='text-sm uppercase font-semibold underline underline-offset-2 decoration-[1px] mb-2'>Select Categories</p> */}

{/* <div className='flex flex-col gap-y-2 min-w-40'>
    {isLoading ? <div className='flex items-center justify-center my-5'>
        <DNA ariaLabel='DNA-loading'/>
    </div> : (categories?.map((item) => (
        <Link to={`/category/${item?.category}`} key={item.id}> {item?.name} </Link>
    )) )}
</div> */}

</div>
      
    </div>
  )
}

export default CategoryFilters
