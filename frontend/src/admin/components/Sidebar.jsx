import { NavLink } from 'react-router-dom'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const Sidebar = (props) => {
    let navigation = props.navigation

    return (
        <div className="flex flex-grow flex-col overflow-y-auto border-r border-gray-200 bg-white pt-5 pb-4">
            {/* <div className="flex flex-shrink-0 items-center space-y-5 px-4">
                <img
                    className="h-8 w-auto"
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                    alt="Your Company"
                />
            </div> */}
            <div className="mt-5 flex flex-grow flex-col">
                <nav className="flex-1 space-y-1 bg-white" aria-label="Sidebar">
                    {navigation.map((item) => (
                        <NavLink
                            key={item.name}
                            to={item.href}
                            className={({ isActive }) => isActive
                                ? 'bg-indigo-50 border-indigo-600 text-indigo-600 group flex items-center px-3 py-2 text-sm font-medium border-l-4'
                                : 'border-transparent text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-3 py-2 text-sm font-medium border-l-4'
                            }
                        >
                            <item.icon
                                className={classNames(
                                    item.current ? 'text-indigo-500' : 'text-gray-400 group-hover:text-gray-500',
                                    'mr-3 flex-shrink-0 h-6 w-6'
                                )}
                                aria-hidden="true"
                            />
                            {item.name}
                        </NavLink>
                    ))}
                </nav>
            </div>
        </div>
    )
}

export default Sidebar