import React from 'react'

const Alert = ({error}) => {
  return (
    <div className={`-translate-y-full opacity-0 transition-all w-full fixed flex items-center justify-center top-4  left-0 z-100 ${error && 'opacity-100 -translate-y-0'}`}>
    <div class="flex p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800" role="alert">
        <svg class="inline flex-shrink-0 mr-3 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
        <div>
            <span class="font-medium capitalize">alert!</span> {error}
        </div>
    </div>
</div>
  )
}

export default Alert