import React from 'react'

const dashbordList = () => {
  return (
    <div>
        <section class="antialiased bg-gray-200 font-anak flex rounded-2xl w-full">
  <div class="mx-auto my-8 space-y-6 w-11/12">
    {/* <!--  Monthly card start  --> */}
    <div class="pl-1 w-full h-20 bg-green-400 rounded-lg shadow-md cursor-pointer">
      <div class="flex w-full h-full py-2 px-4 bg-white rounded-lg justify-between">
        <div class="my-auto">
          <p class="font-bold">TOTAL USERS (THIS MONTH)</p>
          <p class="text-lg">$40,000</p>
        </div>
        <div class="my-auto">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
</svg>                   
        </div>
      </div>
    </div>
    {/* <!--  Monthly card end  --> */}
    {/* <!--  Annual card start --> */}
    <div class="pl-1 w-full h-20 bg-blue-500 rounded-lg shadow-md cursor-pointer">
      <div class="flex w-full h-full py-2 px-4 bg-white rounded-lg justify-between">
        <div class="my-auto">
          <p class="font-bold">TOTAL USERS</p>
          <p class="text-lg">$215,000</p>
        </div>
        <div class="my-auto">
<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
</svg>               
        </div>
      </div>
    </div>
    {/* <!--  Annual card end  --> */}
    {/* <!--  Tasks card start  --> */}
    <div class="pl-1 w-full h-20 bg-purple-500 rounded-lg shadow-md cursor-pointer">
      <div class="flex w-full h-full py-2 px-4 bg-white rounded-lg justify-between">
        <div class="my-auto">
          <p class="font-bold">TOTAL ARTICLES</p>
          <p class="text-lg">50%</p>
        </div>
        <div class="my-auto">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
</svg>
        </div>
      </div>
    </div>
    {/* <!--  Tasks card end  --> */}
    {/* <!--  Pending requests card start  --> */}
    <div class="pl-1 w-full h-20 bg-yellow-400 rounded-lg shadow-md cursor-pointer">
      <div class="flex w-full h-full py-2 px-4 bg-white rounded-lg justify-between">
        <div class="my-auto">
          <p class="font-bold">TOTAL CATEGORIES</p>
          <p class="text-lg">18</p>
        </div>
        <div class="my-auto">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
</svg>
        </div>
      </div>
    </div>
    {/* <!--  Pending requests card end  --> */}
  </div>
</section>
    </div>
  )
}

export default dashbordList