import React, { useState } from 'react'
import Axios from '../../Axios'
import ErrorToast from '../../components/ErrorToast'
import Spinner from '../../components/Spinner'
import SuccessTost from '../../components/SuccessTost'


const EditCategory = () => {

  const [category, setCategory] = useState('')
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const [loading, setLoading] = useState(false)

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
      Axios.post('/categories', { name:category, jwt })
        .then(res => {
          setLoading(false)
          setSuccess('Category added successfully')
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

    <div className='w-full h-screen mt-20 flex items-center justify-center flex-col'>
       <h1 className='uppercase font-anak font-bold text-blue-700 text-2xl'>ADD Category</h1>
  	<form onSubmit={onSubmit} class="flex w-11/12 md:w-1/4 mt-4">
    	<input value={category} onChange={(e)=> setCategory(e.target.value)} class="w-3/4 rounded-l-lg p-4 border-t mr-0 border-b border-l focus:border-gray-200 text-gray-800 border-gray-200 bg-white" placeholder="your category name here"/>
		<button type='submit' class="px-8 rounded-r-lg bg-blue-700  text-gray-800 font-bold p-2 uppercase border-blue-800 border-t border-b border-r">{loading ? <Spinner/> : "ADD" }</button>
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