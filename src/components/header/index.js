import './styles.css';
import '../../index.css';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/Logo.svg';

function Header(){
    return(
        <div className='header'>
            <figure className='header__logo'>
                <img src={logo} alt='logo'/>
                <figcaption className='offscreen'>
                    logo
                </figcaption>
            </figure>
            <section className='header__menu'>
                <nav className='header__nav'>
                    <NavLink 
                        to='/my-portfolio' 
                        className='header__link'
                        activeclassname='header__link active'
                    >
                        Main
                    </NavLink>
                    <NavLink 
                        to='/about' 
                        className='header__link'
                        activeclassname='header__link active'
                    >
                        About 
                    </NavLink>
                </nav>
            </section>
        </div>
    )
}
export default Header;