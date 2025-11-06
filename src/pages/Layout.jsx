import { Outlet } from "react-router-dom"
import { Navbar } from "../components/Navbar/Navbar"
import { Footer } from "../components/Footer/Footer"

export const Layout = () => {
    return (
        <>
        <div style={{maxWidth: "100dvw"}}>
            <Navbar />
                <div className="d-flex flex-row">
                    <Outlet />
                </div>
            <Footer />
        </div>
        </>
    )
}