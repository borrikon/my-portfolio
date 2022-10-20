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
                    Boris Ushnevich
                </h2>
                <article className='userBio__subtitle'>
                    <p>
                        Junior front-end developer from Kiev (Ukraine).
                    </p>
                    <p>
                        Lorem Lorem Lorem Lorem Lorem Lorem
                        Lorem Lorem Lorem Lorem Lorem Lorem
                        Lorem Lorem Lorem Lorem Lorem Lorem
                        Lorem Lorem Lorem Lorem Lorem Lorem
                        Lorem Lorem Lorem Lorem Lorem Lorem
                        Lorem Lorem Lorem Lorem Lorem Lorem
                    </p>
                    <p>
                        Lorem Lorem Lorem Lorem Lorem Lorem
                        Lorem Lorem Lorem Lorem Lorem Lorem
                        Lorem Lorem Lorem Lorem Lorem Lorem
                        Lorem Lorem Lorem Lorem Lorem Lorem
                        Lorem Lorem Lorem Lorem Lorem Lorem
                        Lorem Lorem Lorem Lorem Lorem Lorem
                        Lorem Lorem Lorem Lorem Lorem Lorem
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