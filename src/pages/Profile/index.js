import styles from './Profile.module.scss'
import Sidebar from "../../components/Sidebar/Sidebar"
import SidebarMobile from '../../components/Sidebar/Mobile/SidebarMobile'
import yureImg from '../../assets/profile/yure.jpg'
import vsImg from '../../assets/profile/jv-photo2.jpg'
import opcoes from '../../assets/SVG INSTA/Opções.svg'
import publicacoes from '../../assets/SVG INSTA/publicacoes.svg'
import { useParams } from 'react-router-dom'

const Profile = () => {
    const params = useParams()
    return(
        <>
            <Sidebar/>
            <SidebarMobile/>
            <section className={styles.container}>
                <div className={styles.infoPersonalContainer}>
                    {params.name === '_yurerafael' ? 
                    <img src={yureImg} alt='img-profile' className={styles.imgProfile}/>
                    : <img src={vsImg} alt='img-profile' className={styles.imgProfile}/>
                    }
                    
                    <div className={styles.infoPersonal}>
                        <div className={styles.toFlex}>
                        {params.name === '_yurerafael' ?
                        <p>_yurerafael</p> :
                        <p>vstectity</p>
                        }
                        <button>Editar Perfil</button>
                        <button>Ferramentas para anúncio</button>
                        <img src={opcoes} alt='config-profile'/>
                        </div>
                    <div className={styles.followers}>
                        <p> <span>7</span> publicações</p>
                        <p> <span>724</span> seguidores</p>
                        <p> <span>636</span> seguindo</p>
                    </div>
                        {params.name === '_yurerafael' ?
                        <div className={styles.bio}>
                            <p>Yure Rafael</p>
                            <p>Dev. Front-end</p>
                            <a href='https://yurerafael.dev/' target='_blank'>yurerafael.dev</a> 
                        </div>
                            : 
                        <div className={styles.bio}>
                            <p>João</p>
                            <p>Brand / UI Designer</p>
                            <a href='https://vstectity.com/' target='_blank'>vstectity.com</a>
                        </div>
                        }
                    </div>
                </div>

                <div className={styles.infoPersonalContainerMobile}>
                    {params.name === '_yurerafael' ? 
                    <img src={yureImg} alt='img-profile' className={styles.imgProfile}/>
                    : <img src={vsImg} alt='img-profile' className={styles.imgProfile}/>
                    }
                    
                    <div className={styles.infoPersonalMobile}>
                        <div className={styles.toFlex}>
                        {params.name === '_yurerafael' ?
                        <p>_yurerafael</p> :
                        <p>vstectity</p>
                        }
                        </div>
                    <div className={styles.followersMobile}>
                        <p> <span>7</span> publicações</p>
                        <p> <span>724</span> seguidores</p>
                        <p> <span>636</span> seguindo</p>
                    </div>
                    <div className={styles.buttonsMobile}>
                        <button>Editar Perfil</button>
                        <button>Compartilhar Perfil</button>
                    </div>
                        {params.name === '_yurerafael' ?
                        <div className={styles.bioMobile}>
                            <p>Yure Rafael</p>
                            <p>Dev. Front-end</p>
                            <a href='https://yurerafael.dev/' target='_blank'>yurerafael.dev</a> 
                        </div>
                            : 
                        <div className={styles.bioMobile}>
                            <p>João</p>
                            <p>Brand / UI Designer</p>
                            <a href='https://vstectity.com/' target='_blank'>vstectity.com</a>
                        </div>
                        }
                    </div>
                </div>
                    <div className={styles.publicationsContainer}>
                        <hr/>
                        <p><img src={publicacoes} alt='emoji-publications'/> PUBLICAÇÕES </p>
                        <div className={styles.publications}>
                            <img src='http://unsplash.it/270/270?random&gravity=center' alt=''/>
                            <img src='http://unsplash.it/270/270?random&gravity=center' alt=''/>
                            <img src='http://unsplash.it/270/270?random&gravity=center' alt=''/>
                            <img src='http://unsplash.it/270/270?random&gravity=center' alt=''/>
                            <img src='http://unsplash.it/270/270?random&gravity=center' alt=''/>
                            <img src='http://unsplash.it/270/270?random&gravity=center' alt=''/>
                            <img src='http://unsplash.it/270/270?random&gravity=center' alt=''/>
                        </div>
                        <footer className={styles.footer}>
                            <p>Meta</p> 
                            <p>Sobre</p>
                            <p>Blog</p>
                            <p>Carreiras</p>
                            <p>Ajuda</p>
                            <p>API</p>
                            <p>Privacidade</p>
                            <p>Termos</p>
                            <p>Principais contas</p>
                            <p>Localizações</p>
                            <p>Instagram Lite</p>
                            <p>Carregamento de contatos e não usuários</p>
                            <p>Meta Verified</p>
                        </footer>
                        <div className={styles.copy}>
                            <p>&copy; 2023 Yure Rafael</p>
                        </div>
                    </div>
            </section>
        </>
    )
}
export default Profile