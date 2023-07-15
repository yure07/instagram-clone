import styles from './Posts.module.scss'
import { Link } from 'react-router-dom'
import yureImg from '../../assets/profile/yure.jpg'
import yurePost from '../../assets/profile/yure-poster.jpg'
import vsImg from '../../assets/profile/jv-photo.jpg'
import vsPost from '../../assets/profile/jv-photo.jpg'
import more from '../../assets/SVG INSTA/3 pontin.svg'
import like from '../../assets/SVG INSTA/like.svg'
import comment from '../../assets/SVG INSTA/Comentar-1.svg'
import share from '../../assets/SVG INSTA/Compartilhar publicação-1.svg'
import save from '../../assets/SVG INSTA/Salvar-1.svg'
import verified from '../../assets/SVG INSTA/verified.svg'

const Posts = () => {
    return(
        <section className={styles.container}>
            <div className={styles.who}>
                <img src={yureImg} alt='yure-avatar'/>
                <Link to={"/profile/_yurerafael"}><p>_yurerafael
                <span><img src={verified} alt='verify'/></span>
                <span>&sdot; 15min</span>
                </p></Link>
                <img src={more} alt='3-dots' className={styles.dots}/>
            </div>
            <div className={styles.posterContainer}>
                <img src={yurePost} alt='yure-post'/>
                <div className={styles.reactions}>
                    <img src={like} alt='like-poster'/>
                    <img src={comment} alt='comment-poster'/>
                    <img src={share} alt='share-poster'/>
                    <img src={save} alt='save-post' className={styles.sharePost}/>
                    <div className={styles.likes}> <img src={vsImg} alt='vs-img'/>  <p> <span>Curtido por</span> vstectity e outras 323 pessoas</p></div>
                    <div className={styles.captions}>
                        <Link to={"/profile/_yurerafael"}>_yurerafael <span>i´m back!</span></Link>
                        <p>Ver Tradução</p>
                        <span>Ver todos os 76 comentários</span>
                        <input placeholder='Adicione um comentário'/>
                    </div>
                </div>
            </div>
            <hr/>
            <div className={styles.who}>
                <img src={vsImg} alt='yure-avatar'/>
                <Link to={"/profile/vstectity"}><p>vstectity
                <span><img src={verified} alt='verify'/></span>
                <span>&sdot; 2h</span>
                </p></Link>
                <img src={more} alt='3-dots' className={styles.dots}/>
            </div>
            <div className={styles.posterContainer}>
                <img src={vsPost} alt='yure-post'/>
                <div className={styles.reactions}>
                    <img src={like} alt='like-poster'/>
                    <img src={comment} alt='comment-poster'/>
                    <img src={share} alt='share-poster'/>
                    <img src={save} alt='save-post' className={styles.sharePost}/>
                    <div className={styles.likes}> <img src={yureImg} alt='yure-img'/>  <p> <span>Curtido por</span> _yurerafael e outras 431 pessoas</p></div>
                    <div className={styles.captions}>
                        <Link to={"/profile/vstectity"}>vstectity <span>this is a caption</span></Link>
                        <p>Ver Tradução</p>
                        <span>Ver todos os 81 comentários</span>
                        <input placeholder='Adicione um comentário'/>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Posts