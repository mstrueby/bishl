import Header from "./Header"
import Footer from "./Footer"


const Layout = ({ children }) => {
  return (
    // <div className="mx-auto max-w-7xl sm:px-6 lg:px-8 ">
    <div className="">
      <Header />
      <div className="mx-auto max-w-7xl px-2 sm:px-4 md:px-8">
        {children}
      </div>
      <Footer />
    </div>
  )
}

export default Layout