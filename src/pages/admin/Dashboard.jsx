import React from 'react'
import Cards from '../../components/admin/Cards'
import DashbordList from '../../components/admin/DashbordList'

const Dashboard = () => {
  return (
    <div className='mt-20 flex flex-wrap'>
      <div className='w-full md:w-1/3 m-0 md:m-4'>

      <DashbordList/>
      </div>
      <div class="flex w-3/5 flex-wrap">
      <Cards/>
      </div>
    </div>
  )
}

export default Dashboard