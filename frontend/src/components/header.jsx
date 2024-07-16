import logo from '../images/logo.png'

function Header() {
    return(
        <section className="header">
            <img id="logo" src={logo} alt="logo"/>
            <div className="navbar">
                <p className='nav-item'>SOBRE MI</p>
                <p className='nav-item'>SERVICIOS</p>
                <p className='nav-item'>CONTACTO</p>
            </div>
        </section>
    )
}

export default Header