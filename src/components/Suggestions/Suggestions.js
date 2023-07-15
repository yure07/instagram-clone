import styles from './Suggestions.module.scss'
import yureImg from '../../assets/profile/yure.jpg'
import noPhoto from '../../assets/profile/user-no-image.jpg'
import { Link } from 'react-router-dom'

const Suggestions = () => {
    return(
        <section className={styles.container}>
            <div className={styles.info}>
                <img src={yureImg} alt='profile'/>
                <Link to="/profile/_yurerafael"><p>_yurerafael
                    <p>Yure Rafael</p>
                </p></Link>
                <p>Mudar</p>
            </div>
            <div className={styles.suggestionsText}>
                <p>Sugestões para você</p>
                <p>Ver tudo</p>
            </div>
            <div className={styles.suggestions}>
                <div className={styles.info}>
                    <img src={noPhoto} alt='avatar'/>
                    <Link to="/profile/_yurerafael"><p>_yurerafael
                        <p>Seguido(a) por vstectity</p>    
                    </p> </Link>
                    <p>Seguir</p>
                </div>
                <div className={styles.info}>
                    <img src={noPhoto} alt='avatar'/>
                    <p>_yurerafael
                        <p>Seguido(a) por vstectity e outros 3</p>    
                    </p> 
                    <p>Seguir</p>
                </div>
                <div className={styles.info}>
                    <img src={noPhoto} alt='avatar'/>
                    <p>_yurerafael
                        <p>Seguido(a) por vstectity</p>    
                    </p> 
                    <p>Seguir</p>
                </div>
                <div className={styles.info}>
                    <img src={noPhoto} alt='avatar'/>
                    <p>_yurerafael
                        <p>Seguido(a) por vstectity</p>    
                    </p> 
                    <p>Seguir</p>
                </div>
            </div>
            <div className={styles.about}>
                <p>Sobre &sdot; Ajuda &sdot; Imprensa &sdot; Carreiras &sdot; Privacidade &sdot; 
                    Termos &sdot; Localizações &sdot; Idioma &sdot; Meta Verified</p>
                <p>&copy; 2023 INSTAGRAM FROM YURE RAFAEL</p>
            </div>
        </section>
    )
}
export default Suggestions