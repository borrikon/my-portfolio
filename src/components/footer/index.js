import './styles.css';
import Logo from '../../assets/Logo.svg';
import Linked from '../../assets/Linked.svg';

function Footer(){
    return(
        <div className='footer'>
            <section className='footer__main'>
                <figure className='footer__main--logo'>
                    <img src={Logo} alt='logo'/>
                    <figcaption className='offscreen'>
                        logo
                    </figcaption>
                </figure>
                <div className='footer__main--linkCont'>
                    <h2>Inicio</h2>
                    <a href='/'>Acerca de mi</a>
                    <a href='/'>Proyectos</a>
                </div>
                <div className='footer__main--linkCont'>
                    <h2>Contáctame</h2>
                    <a href='/'>Acerca de mi</a>
                    <a href='/'>LinkedIn</a>
                </div>
                <div className='footer__main--linkCont'>
                    <h2>Social</h2>
                    <div className='footer__main--social'>
                        <a href='/'>
                            <img src={Linked} alt=''/>
                        </a>
                        <a href='/'>
                            <img src={Linked} alt=''/>
                        </a>
                        <a href='/'>
                            <img src={Linked} alt=''/>
                        </a>
                    </div>
                </div>
            </section>
            <section className='footer__copy'>
                <p>
                    <span>&#169;</span>
                    2022 Borus Ushnevich
                </p>
            </section>
        </div>
    )
}

export default Footer;