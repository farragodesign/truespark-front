import React from 'react'
import { Dropdown } from 'flowbite-react'

const DropdownMenu = ({user,logoutHandler}) => {
  return (
    <div className='hidden md:block'>

    <Dropdown label={user ? user.name : 'user'} >
  <Dropdown.Header>
    <span className="block text-sm">
      {user ? user.name : 'user'}
     </span>
    <span className="block truncate text-sm font-medium">
      {user ? user.email : 'user@example.com'}
    </span>
  </Dropdown.Header>
  <Dropdown.Divider />
  <Dropdown.Item onClick={logoutHandler}>
     Logout
  </Dropdown.Item>
</Dropdown>
    </div>

  )
}

export default DropdownMenu