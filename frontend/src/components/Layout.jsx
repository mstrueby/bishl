import Header from "./Header"
import Footer from "./Footer"
import NavBar from "./NavBar"


const Layout = ({children}) => {
  return (
    <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
        {/* <Header /> */}
        <NavBar/>
        {children}
        <Footer/>
        <Footer/>
        <Footer/>
    </div>
  )
}

export default Layout