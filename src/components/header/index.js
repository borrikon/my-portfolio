import './styles.css';
import '../../index.css';
import { Link } from 'react-router-dom';
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
            <section className='header__menuBtn'>
                <div></div>
            </section>
            <section className='header__menu'>
                <nav className='header__nav'>
                    <Link to='/my-portfolio' className='header__link'>
                        Main
                    </Link>
                    <Link to='/about' className='header__link'>
                        About 
                    </Link>
                </nav>
            </section>
        </div>
    )
}
export default Header;