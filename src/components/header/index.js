import './styles.css';
import '../../index.css';
import { Link } from 'react-router-dom';
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
                    <Link to='/' className='header__link'>
                        Inicio
                    </Link>
                    <Link to='/about' className='header__link'>
                        Acerca de mi 
                    </Link>
                    <Link to='/contacts' className='header__link'>
                        Contáctame
                    </Link>
                </nav>
            </section>
        </div>
    )
}
export default Header;