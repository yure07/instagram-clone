import { useState } from 'react'
import { Link } from 'react-router-dom'

import styles from './SidebarMobile.module.scss'
import SidebarSearch from '../Search/SidebarSearch'
import SidebarNotifications from '../Notifications/SidebarNotifications'

import nameLogo from '../../../assets/instagram-name-logo.svg'
import notificationsIcon from '../../../assets/SVG INSTA/like.svg'
import directIcon from '../../../assets/SVG INSTA/mensagens.svg'
import homeIcon from '../../../assets/SVG INSTA/home.svg'
import searchIcon from '../../../assets/SVG INSTA/search.svg'
import createIcon from '../../../assets/SVG INSTA/create.svg'
import reelsIcon from '../../../assets/SVG INSTA/reels.svg'
import profileYure from '../../../assets/profile/yure.jpg'

const SidebarMobile = () => {
    const [sideSearchMobile, setSideSearchMobile] = useState(false)
    const [sideNotificationsMobile, setSideNotificationsMobile] = useState(false)

    return(
        <article className={styles.container}>
        <section className={styles.containerTop}>
            <img src={nameLogo} alt='insta-name-logo'/>
            <div className={styles.iconsTop}>
            <img src={notificationsIcon} alt='notification-ico' onClick={()=> setSideNotificationsMobile(!sideNotificationsMobile)}/>
            <img src={directIcon} alt='direct-ico'/>
            </div>
        </section>
        <section className={styles.containerBottom}>
            <a href="/"><img src={homeIcon} alt='home-ico-mobile' className={styles.homeIcon}/></a>
            <img src={searchIcon} alt='search-ico-mobile' onClick={()=> setSideSearchMobile(!sideSearchMobile)}/>
            <img src={createIcon} alt='create-ico-mobile'/>
            <img src={reelsIcon} alt='reels-ico-mobile'/>
            <Link to="/profile/_yurerafael">
                <img src={profileYure} alt='yure-img-profile' className={styles.profilePhoto}/>
            </Link>
        </section>
        {sideSearchMobile && <SidebarSearch/>}
        {sideNotificationsMobile && <SidebarNotifications/>}
        </article>
    )
}
export default SidebarMobile