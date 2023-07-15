import style1 from '../Search/SidebarSearch.module.scss'
import style2 from './SidebarNotifications.module.scss'
import vsImg from '../../../assets/profile/jv-photo.jpg'
import yurePost from '../../../assets/profile/yure-poster.jpg'

const SidebarNotifications = () => {
    return(
        <div className={`${style1.side} ${style2.side}`}>
            <h2>Notificações</h2>
            <p>Hoje</p>
            <div className={style2.notification}>
                <img src={vsImg} alt='liked-vs' className={style2.likedBy}/>
                <p>vstectity <span>curtiu a sua foto.</span>  <span>7min</span> </p>
                <img src={yurePost} alt='yure-poster' className={style2.poster}/>
            </div>
            <hr/>
            <p>Esta semana</p>
            <div className={style2.notification}>
                <img src={vsImg} alt='liked-vs' className={style2.likedBy}/>
                <p>vstectity <span>começou a seguir você.</span> <span>2d</span> </p>
                <button>Seguindo</button>
            </div>
        </div>
    )
}
export default SidebarNotifications