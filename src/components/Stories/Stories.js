import styles from './Stories.module.scss'
import jvImg from '../../assets/profile/jv-photo.jpg'
import yureImg from '../../assets/profile/yure.jpg'

const Stories = () => {
    return(
        <section className={styles.container}>
            <div className={styles.info}>
                <img src={jvImg} alt='vs-img'/>
                <p>vstectity</p>
            </div>
            <div className={styles.info}>
                <img src={yureImg} alt='yure-img' className={styles.cf}/>
                <p>_yurerafael</p>
            </div>
            <div className={styles.info}>
                <img src={jvImg} alt='vs-img'/>
                <p>vstectity</p>
            </div>
            <div className={styles.info}>
                <img src={yureImg} alt='yure-img' className={styles.cf}/>
                <p>_yurerafael</p>
            </div>
            <div className={styles.info}>
                <img src={jvImg} alt='vs-img'/>
                <p>vstectity</p>
            </div>
            <div className={styles.info} id={styles.infoHidden}>
                <img src={yureImg} alt='yure-img' className={styles.cf}/>
                <p>_yurerafael</p>
            </div>
            <div className={styles.info} id={styles.infoHidden}>
                <img src={jvImg} alt='vs-img'/>
                <p>vstectity</p>
            </div>
        </section>
    )
}
export default Stories