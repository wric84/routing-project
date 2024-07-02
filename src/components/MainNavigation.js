import { NavLink } from "react-router-dom"
import classes from './MainNavigation.module.css'

function MainNavigation(){
    return (<header className={classes.header}>
        <nav>
            <ul className={classes.list}>
                <li>
                    {/* Nav vs NavLink, NavLink allows a className function so that the link can behave depending on the css. Also adding 'end' to the end of our homepage is necessary because otherwise the link would always be active since it is looking for the '/' and all routes start with a '/' */}
                    <NavLink className={({isActive})=> isActive ? classes.active : undefined} to="/" end>Home</NavLink>
                </li>
                <li>
                    <NavLink className={({isActive})=> isActive ? classes.active : undefined} to="/products">Products</NavLink>
                </li>
            </ul>
        </nav>
    </header>
    )
}

export default MainNavigation