import './styles.css';
import '../../index.css';
import logo from '../../assets/Logo.svg';

function Header(){
    return(
        <div className='header'>
            <figure className='header__logo'>
                <img src={logo} alt='logo'/>
                <figurecaption className='offscreen'>
                    logo
                </figurecaption>
            </figure>
            <section className='header__menuBtn'>
                <div></div>
            </section>
            <section className='header__menu'>
                <nav className='header__nav'>
                    <a className='header__link' href='/'>
                        Inicio
                    </a>
                    <a className='header__link' href='/'>
                        Acerca de mi 
                    </a>
                    <a className='header__link' href='/'>
                        Proyectos
                    </a>
                    <a className='header__link' href='/'>
                        Contáctame
                    </a>
                </nav>
            </section>
        </div>
    )
}
export default Header;