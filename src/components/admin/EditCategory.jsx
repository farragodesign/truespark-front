import React, { useEffect, useState } from 'react'
import Axios from '../../Axios'
import ErrorToast from '../ErrorToast'
import Spinner from '../Spinner'
import SuccessTost from '../SuccessTost'


const EditCategory = ({id,name}) => {

  const [category, setCategory] = useState('')
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const [loading, setLoading] = useState(false)

useEffect(() => {
  setCategory(name)
}, [name])

  const onSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    if (category === '') {
      setLoading(false)
      setError('Please enter a category')
      setTimeout(() => {
        setError('')
      }
        , 3000)
    } else {
      const jwt = localStorage.getItem('jwt')
      Axios.patch(`/categories/${id}`, { name:category, jwt })
        .then(res => {
          setLoading(false)
          setSuccess('Category edited successfully')
          setTimeout(() => {
            setSuccess('')
          }
            , 3000)
        }
          , err => {
            setLoading(false)
            setError(err.response.data.message)
            setTimeout(() => {
              setError('')
            }
              , 3000)
          }
        )
    }
  }
  

  return (
    <div>

    <div className='w-full h-full mt-20 flex items-center justify-center flex-col'>
       <h1 className='uppercase font-anak font-bold text-blue-700 text-2xl'>Edit Category</h1>
  	<form onSubmit={onSubmit} class="flex w-9/12 transition-all  mt-4">
    	<input value={category} onChange={(e)=> setCategory(e.target.value)} class="w-3/4 focus:w-full transition-all rounded-l-lg p-4 border-t mr-0 border-b border-l focus:border-gray-200 text-gray-800 border-gray-200 bg-white" placeholder="your category name here"/>
		<button type='submit' class="px-8 rounded-r-lg bg-blue-700  text-gray-800 font-bold p-2 uppercase border-blue-800 border-t border-b border-r">{loading ? <Spinner/> : "EDIT" }</button>
	</form>
<ul class='marker:text-green list-outside list-disc ml-6 mt-8'>
  <li className='font-anak text-blue-700'>please use singular words.</li>
  <li className='font-anak text-blue-700'>please do not make unwanted categories.</li>
  <li className='font-anak text-blue-700'>it will be shown on navbar</li>

</ul>

    </div>

    <ErrorToast event={error} onClick={()=>setError('')}/>
    <SuccessTost data={success} isSuccess={success} setSuccess={()=>setSuccess('')} />
    </div>
  )
}

export default EditCategory