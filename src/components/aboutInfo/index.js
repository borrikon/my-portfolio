import './styles.css';
import FotoPersonal from '../../assets/PhotoPersonal.jpg';

function AboutInfo(){
    return(
        <div className='aboutInfo__cont'>
            <figure>
                <img src={FotoPersonal} 
                    alt='the foto of the worker'
                /> 
                <figcaption className='offscreen'>
                    The foto of the worker
                </figcaption>
            </figure>
            <section className='userBio'>
                <h2 className='userBio__title'>
                    Miguel Ruz
                </h2>
                <article className='userBio__subtitle'>
                    <p>
                        Soy Diseñador UI, actualmente vivo en 
                        Turbaco-Bolivar, un pueblo a las afueras 
                        de Cartagena (Colombia).
                    </p>
                    <p>
                        Me agrada la idea de trabajar en equipo, 
                        pienso que es una manera de conectar 
                        con nuevas habilidades y de brindar 
                        mi conocimiento al equipo con el fin 
                        de mejorar la productividad en el 
                        desarrollo de algun producto digital. 
                        Me gusta descubrir cosas nuevas a diario 
                        y ser un activo valioso en cualquier 
                        equipo en el que me desarrolle, por lo 
                        que estoy aprendiendo constantemente e 
                        investigando acerca de las nuevas 
                        tendencias.
                    </p>
                    <p>
                        Trato de buscar todo el Feedback 
                        posible en los proyectos, con el 
                        fin de mejorar y poder hacer diseños 
                        que no solo sean atractivos 
                        esteticamente sino que sean accesibles 
                        y funcionales por lo que me gusta 
                        trabajar muy de la mano con los 
                        stakeholders.
                    </p>
                    <p>
                        Hablemos!
                    </p>
                </article>
                <a 
                    className='userBio__email'
                    href='mailto: borrikon@gmail.com'
                >
                    Text me with E-mail!
                </a>
            </section>
        </div>
    )
}

export default AboutInfo;