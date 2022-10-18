import './styles.css';
import { Link } from 'react-router-dom';
import MainImg from '../../assets/PhotoPersonal.jpg';
import arrowRight from '../../assets/arrowRight.svg';
function Intro(){
    return(
        <div className='intro__container'>
            <figure>
                <img src={MainImg} alt='the foto of worker'/>
                <figcaption className='offscreen'>
                    The foto of the worker
                </figcaption>
            </figure>
            <div className='intro__info'>
                <h2 className='info__intro--title'>
                    About me
                </h2>
                <div className='info__intro--subtitle'>
                    <p>
                        Hola! Mi nombre es Miguel 
                        y tengo gran afinidad hacía 
                        el trabajo colaborativo, 
                        me gusta crear diseños que 
                        inspiren e involucren a 
                        las personas. Como diseñador UI, 
                        considero que un buen producto 
                        no solo brinda una solución sino 
                        que permite crear una experiencia 
                        emocional en las personas que lo 
                        usan.
                    </p>
                    <p>
                        En mi proceso creativo utilizo 
                        herramientas como Figma, Adobe XD, 
                        Photoshop e Illustrator que me ayudan 
                        mucho en el flujo de trabajo para la 
                        producción de interfaces de usuario.
                    </p>
                </div>
                <Link to='/about'>
                    <button className='btn btn-secondary btn-secondary--link'>
                        Mas acerca de mi
                        <img src={arrowRight} alt=''/> 
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default Intro;