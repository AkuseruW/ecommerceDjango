import { Fragment } from 'react'
import { useDispatch } from 'react-redux'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { HiOutlineUser } from "react-icons/hi2"
import { Link } from 'react-router-dom'
import { logout } from '../actions/userActions'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Dropdown(props) {
  const dispatch = useDispatch()

  const logoutHandler = () => {
    dispatch(logout())
  }

  return (
    <Menu as="div" className="">
      <div>
        <Menu.Button className="flex items-center">
          <HiOutlineUser className='icon' size={20} />
          <span className="ml-2">
            {props.authUserInfo.name} {props.authUserInfo.lastname}
          </span>
          <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
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
        <Menu.Items className="absolute z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">

          <div className="">
            <Menu.Item>
              {({ active }) => (
                <Link to='/profile'
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}>Profile</Link>
              )}
            </Menu.Item>
          </div>

          <div className="py-1">
            <Menu.Item>
              <Link onClick={logoutHandler}
                className={classNames(
                  'text-gray-700',
                  'block px-4 py-2 text-sm'
                )}>
                Logout
              </Link>
            </Menu.Item>
          </div>

        </Menu.Items>
      </Transition>
    </Menu>
  )
}
