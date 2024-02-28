import Header from "../header/header.jsx";
import Footer from "../footer/footer.jsx";

const Layout = ({children}) => {

    return (
        <div className="layout">
            <Header/>
            {children}
            <Footer/>
        </div>
    )
}

export default Layout;
