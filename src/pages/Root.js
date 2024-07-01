import { Outlet } from "react-router-dom"
import MainNavigation from "../components/MainNavigation"

function RootLayout(){
    return <>
    <MainNavigation/>
    {/* The place where the child components are laid out */}
    <main>
    <Outlet/>
    </main>
    </>
}

export default RootLayout