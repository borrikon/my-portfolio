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
                        Hello, my name is Boris. I’ve 
                        found myself in programming a 
                        few years ago. At first it was hobby, 
                        then it became my job. In my work 
                        I use a wide stack of technologies 
                        such as HTML, CSS(SCSS), JS, React.js, 
                        Redux, Gulp, Git, npm and others.
                    </p>
                </div>
                <Link to='/about'>
                    <button className='btn btn-secondary btn-secondary--link'>
                        More about me
                        <img src={arrowRight} alt=''/> 
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default Intro;