import React from 'react'
import { Link } from 'react-router-dom'
import {Helmet} from 'react-helmet'

const Error = () => {
  return (
    <div className='container_here'>
	  <Helmet>
		<title>404 | ERROR</title>
		<meta name="description" content="Error" />
		<meta name="keywords" content="Error" />
		<link rel="canonical" href="https://www.truespark.live/error" />
		<meta name="robots" content="noindex" />
	  </Helmet>
	     <section className="flex items-center h-full p-16 dark:bg-gray-900 dark:text-gray-100">
	<div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
		<div className="max-w-md text-center">
			<h2 className="mb-8 font-extrabold text-9xl text-gray-600">
				<span className="sr-only">Error</span>404
			</h2>
			<p className="text-2xl font-semibold md:text-3xl text-gray-600 font-anak">Sorry, we couldn't find this page.</p>
			<p className="mt-4 mb-8 dark:text-gray-400 font-anak">But dont worry, you can find plenty of other things on our homepage.</p>
			<Link rel="noopener noreferrer" to="/" className="px-8 py-3 font-semibold rounded text-white bg-blue-700 dark:text-gray-900">Back to homepage</Link>
		</div>
	</div>
</section>
    </div>
  )
}

export default Error