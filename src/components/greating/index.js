import './styles.css';
import Download from '../../assets/download.svg';

function Greating(){
    return(
        <div className='greating'>
            <h1 className='greating__title'>
                Soy 
                <span>Miguel Ruz.</span>
            </h1>
            <h2 className='greating__subtitle'>
                Diseñador UI
            </h2>
            <h4>Este es mi Portafolio web!</h4>
            <div className='btn-container'>
                <button className='btn btn-primary'>
                    Ver proyectos
                </button>
                <button className='btn btn-secondary btn-secondary--download'>
                    <img src={Download} alt=''></img>
                    Descargar CV
                </button>
            </div>
        </div>
    )
}

export default Greating;