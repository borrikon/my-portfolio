import './styles.css';
import { userSkillsData } from '../../helpers/userSkillsInfo';

function AboutSkills(){

    let itemList = userSkillsData.map((el, i)=>
            <div key={i+el.skill} className='slillItem'>
                <img src={el.img} alt=''/>
                <h4>{el.skill}</h4>
                <p>{el.description}</p>
            </div>
        )

    return(
        <div className='skillsCont'>
            <h2 className='skillsCont__title'>
                Mis habilidades
            </h2>
            <section className='slillItems__cont'>
                {itemList}
            </section>
        </div>
    )
}

export default AboutSkills;