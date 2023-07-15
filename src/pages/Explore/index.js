import styles from './Expolore.module.scss'
import Sidebar from '../../components/Sidebar/Sidebar'

const Explore = () => {
    return(
        <>
            <Sidebar/>
            <section className={styles.galerySection}>
                <img src='http://unsplash.it/350/350?random&gravity=center' alt=''/>
                <img src='http://unsplash.it/350/350?random&gravity=center' alt=''/>
                <img src='http://unsplash.it/350/350?random&gravity=center' alt=''/>
                <img src='http://unsplash.it/350/350?random&gravity=center' alt=''/>
                <img src='http://unsplash.it/350/350?random&gravity=center' alt=''/>
                <img src='http://unsplash.it/350/350?random&gravity=center' alt=''/>
                <img src='http://unsplash.it/350/350?random&gravity=center' alt=''/>
            </section>
        </>
    )
}
export default Explore