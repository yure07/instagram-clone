import styles from './Sidebar.module.scss'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import nameLogo from '../../assets/SVG INSTA/insta logo.svg'
import home from '../../assets/SVG INSTA/home.svg'
import search from '../../assets/SVG INSTA/search.svg'
import explore from '../../assets/SVG INSTA/explorar.svg'
import reels from '../../assets/SVG INSTA/reels.svg'
import messages from '../../assets/SVG INSTA/mensagens.svg'
import notifications from '../../assets/SVG INSTA/like.svg'
import create from '../../assets/SVG INSTA/create.svg'
import profilePhoto from '../../assets/profile/yure.jpg'
import more from '../../assets/SVG INSTA/mais.svg'
import logo from '../../assets/SVG INSTA/logo.svg'

import SidebarSearch from './Search/SidebarSearch'
import SidebarNotifications from './Notifications/SidebarNotifications'

const Sidebar = () => {
    const [classSidebar, setClassSidebar] = useState('')
    const [srcLogo, setSrcLogo] = useState(nameLogo)
    const [sideSearch, setSideSearch] = useState(false)
    const [sideNotifications, setSideNotifications] = useState(false)

    const changeClass = () => {
            setClassSidebar((prevClass)=>
            prevClass === styles.containerLess ? (setSideSearch(false), setSideNotifications(false)) : styles.containerLess
            )
            setSrcLogo((prevSrc) =>
                prevSrc === logo ? nameLogo : logo
            )
    }

    return(
        <>
        <aside className={`${styles.container} ${classSidebar}`} >
            <Link to="/"><img src={srcLogo} alt='name-logo' className={styles.logoName}/></Link>
            <img src={logo} alt='logo-img' className={styles.logoPhone}/>
            <div className={styles.links} onClick={changeClass}>
                <Link to="/"><p><img src={home} alt='home-icon'/> <span>Página inicial</span> </p> </Link>
                <p onClick={()=> setSideSearch(true)}><img src={search} alt='search-icon'/> <span>Pesquisa</span></p>
                <Link to="/explore"><p id={styles.explore}><img src={explore} alt='explore-icons'/> <span>Explorar</span> </p></Link>
                <p className={styles.reels}><img src={reels} alt='reels-icon'/> <span>Reels</span> </p>
                <p><img src={messages} alt='message-icon'/> <span className={styles.messages}>7</span> <span>Mensagens</span> </p>
                <p onClick={()=> setSideNotifications(true)}><img src={notifications} alt='notifications-icon'/> <span>Notificações</span> </p>
                <p className={styles.create}><img src={create} alt='create-icon'/> <span>Criar</span> </p>
                <Link to="/profile/_yurerafael" className={styles.toProfile}><p><img src={profilePhoto} alt='profile' className={styles.profile}/> <span>Perfil</span> </p></Link>
            </div>
            <div className={styles.more}>
                <img src={more} alt='more-icon'/> <span>Mais</span>
            </div>
        </aside>
        {sideSearch && (<SidebarSearch/>)}
        {sideNotifications && (<SidebarNotifications/>)}
        </>
    )
}
export default Sidebar