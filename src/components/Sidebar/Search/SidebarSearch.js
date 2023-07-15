import styles from './SidebarSearch.module.scss'
import { Link } from 'react-router-dom'
import yureImg from '../../../assets/profile/yure.jpg'
import vsImg from '../../../assets/profile/jv-photo.jpg'

const SidebarSearch = () => {
    return(
        <div className={styles.side}>
        <h2>Pesquisa</h2>
        <input placeholder='Pesquisar'/>
        <hr/>
        <div className={styles.recents}>
            <p>Recentes</p>
            <p>Limpar tudo</p>
        </div>
        <div className={styles.profileSide}>
            <img src={yureImg} alt='profile-img'/>
            <Link to="/profile/_yurerafael">
            <div>
                <p>_yurerafael</p>
                <span>Yure Rafael</span>
            </div>
            </Link>
        </div>
        <div className={styles.profileSide}>
            <img src={vsImg} alt='profile-img'/>
            <Link to={"/profile/vstectity"}>
            <div>
                <p>vstectity</p>
                <span>João</span>
            </div>
            </Link>
        </div>
    </div>
    )
}
export default SidebarSearch