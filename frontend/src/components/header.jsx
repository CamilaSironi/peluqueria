import logo from '../images/logo.png';
import { Menu } from 'antd';

function Header() {

    const items = [
        {
            key: 'about',
            className: '.nav-item',
            label: (
                <a href="#about">SOBRE MÍ</a>
            )
        },
        {
            key: 'services',
            className: '.nav-item',
            label: (
                <a href="#services">SERVICIOS</a>
            ),
        },
        {
            key: 'contact',
            className: '.nav-item',
            label: (
                <a href="#contact">CONTACTO</a>
            ),
        }
    ];

    return(
        <section className="header">
            <img id="logo" src={logo} alt="logo"/>
            <div className="navbar">
                <Menu mode="horizontal" items={items} />
            </div>
        </section>
    )
}

export default Header