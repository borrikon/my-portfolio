import './styles.css';
import ProjectImg from '../../assets/project.png';

function Experience(){
    return(
        <div id='projects' className='experience__cont'>
            <h2 className='experience__cont--title'>
                Projects
            </h2>
            <section className='projects'>
                <div className='projects__item'>
                    <figure className='projects__item--figure'>
                        <img 
                        src={ProjectImg} 
                        alt='img of the project'
                        />
                        <figcaption className='offscreen'>
                            project title
                        </figcaption>
                    </figure>
                    <article className='projects__item--descr'>
                        <h4>Some name of project</h4>
                        <p>some description of the project</p>     
                    </article>
                </div>
                <div className='projects__item'>
                    <figure className='projects__item--figure'>
                        <img 
                        src={ProjectImg} 
                        alt='img of the project'
                        />
                        <figcaption className='offscreen'>
                            project title
                        </figcaption>
                    </figure>
                    <article className='projects__item--descr'>
                        <h4>Some name of project</h4>
                        <p>some description of the project</p>     
                    </article>
                </div>
                <div className='projects__item'>
                    <figure className='projects__item--figure'>
                        <img 
                        src={ProjectImg} 
                        alt='img of the project'
                        />
                        <figcaption className='offscreen'>
                            project title
                        </figcaption>
                    </figure>
                    <article className='projects__item--descr'>
                        <h4>Some name of project</h4>
                        <p>some description of the project</p>     
                    </article>
                </div>
            </section>
        </div>
    )
}

export default Experience;