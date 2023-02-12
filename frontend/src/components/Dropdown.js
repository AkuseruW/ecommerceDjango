import React, { Fragment } from 'react'
import { useDispatch } from 'react-redux'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { HiOutlineUser } from "react-icons/hi2"
import { Link } from 'react-router-dom'
import { logout } from '../actions/userActions'
import '../styles/components/header.scss'

const Dropdown = ({ authUserInfo }) => {
  const dispatch = useDispatch()

  const logoutHandler = () => {
    dispatch(logout())
  }

  return (
    <Menu as="div">
      <div>
        <Menu.Button className="btn_drop_menu">
          <HiOutlineUser className='icon' size={20} />
          <span className="info_user">
            {authUserInfo.name}
          </span>
          <ChevronDownIcon className="chevron_icon" aria-hidden="true" />
        </Menu.Button>

      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className='menu_items'>
          <Menu.Item className='item'>
            {({ active }) => (
              <Link to='/profile'
                className={`block px-4 py-2 text-sm ${active ? 'bg-gray text-gray' : 'text-gray'}`}>
                Profile
              </Link>
            )}
          </Menu.Item>
            <hr />
          <Menu.Item className='item'>
            <Link onClick={logoutHandler}
              className="block px-4 py-2 text-sm text-gray-700">
              Logout
            </Link>
          </Menu.Item>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}

export default Dropdown
