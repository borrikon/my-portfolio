import './styles.css';
import { Link as LinkScrool } from 'react-scroll';
import doc from '../../documents/MyCV.pdf';
import Download from '../../assets/download.svg';

function Greating(){
    return(
        <div className='greating'>
            <h1 className='greating__title'>
                Hi I'm 
                <span>Borus</span>
            </h1>
            <h2 className='greating__subtitle'>
                Front-end developer
            </h2>
            <h4>This is my website</h4>
            <div className='btn-container'>
                <button className='btn btn-primary'>
                    <LinkScrool to='projects' smooth={true}>
                        My projects
                    </LinkScrool>
                </button>
                <a  
                    href={doc} 
                    download='JuniorFrontEndDevCV' 
                    target='_blank' 
                    rel="noreferrer"
                >
                    <button className='btn btn-secondary btn-secondary--download'>
                        <img src={Download} alt=''></img>
                            Download CV
                    </button>
                </a>
            </div>
        </div>
    )
}

export default Greating;