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
                    Boris Ushnevych
                </h2>
                <article className='userBio__subtitle'>
                    <p>
                        Junior front-end developer from Kiev (Ukraine).
                    </p>
                    <p>
                        Hello, my name is Boris. I’ve found 
                        myself in programming a few years ago. 
                        At first it was hobby, then it became my job.
                        In my work I use a wide stack of technologies 
                        such as HTML, CSS(SCSS), JS, React.js, Redux, 
                        Gulp, Git, npm and others.
                    </p>
                    <p>
                        I love finding solutions to hard tasks 
                        and puzzles and creating web-apps that 
                        would be convenient for people. I’m sure 
                        that not only clients but also developers 
                        are satisfied if the project is high-quality. 
                        Therefore I always improve my skills and learn 
                        how to make code better.
                    </p>
                    <p>
                        How to get in touch with me:
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