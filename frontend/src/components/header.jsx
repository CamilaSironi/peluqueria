import logo from '../images/logo.png'

function Header() {
    return(
        <section className="header">
            <img id="logo" src={logo} alt="logo"/>
            <div className="navbar">
                <a className='nav-item' href= "#about">SOBRE MI</a>
                <a className='nav-item' href= "#services">SERVICIOS</a>
                <a className='nav-item' href= "#contact">CONTACTO</a>
            </div>
        </section>
    )
}

export default Header