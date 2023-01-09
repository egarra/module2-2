import { Outlet, NavLink } from "react-router-dom"
{/* <Tab>Gallary</Tab>
        <Tab>Todos</Tab>
        <Tab>Counter</Tab>
        <Tab>Friends</Tab>
        <Tab>Movies</Tab> */}
export const AppBar = () => {
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <NavLink to='/'>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to='/gallery'>Gallery</NavLink>
                    </li>
                    <li>
                        <NavLink to='/todos'>Todos</NavLink> 
                    </li>
                    <li>
                        <NavLink to='/counter'>Counter</NavLink>
                    </li>
                    <li>
                        <NavLink to='/friends'>Friends</NavLink>
                    </li>
                    <li>
                        <NavLink to='/movies'>Movies</NavLink>
                    </li>
                </ul>
            </nav>
            <Outlet/>
        </>
    )
}