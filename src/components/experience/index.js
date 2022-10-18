import './styles.css';
import { projectsInfo } from '../../helpers/projectsInfo';

function Experience(){

    let projectItems = projectsInfo.map((el, i)=>(
                <div key={el.title+i} className='projects__item'>
                    <figure className='projects__item--figure'>
                        <img 
                        src={el.img} 
                        alt='img of the project'
                        />
                        <figcaption className='offscreen'>
                            {el.title}
                        </figcaption>
                    </figure>
                    <article className='projects__item--descr'>
                        <h4>{el.title}</h4>
                        <p>{el.descr}</p>     
                    </article>
                </div>
    ))
    return(
        <div id='projects' className='experience__cont'>
            <h2 className='experience__cont--title'>
                Projects
            </h2>
            <section className='projects'>
                {projectItems}
            </section>
        </div>
    )
}

export default Experience;