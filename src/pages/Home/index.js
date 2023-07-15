import styles from './Home.module.scss';
import Sidebar from '../../components/Sidebar/Sidebar'
import Stories from '../../components/Stories/Stories'
import Suggestions from '../../components/Suggestions/Suggestions'
import Post from '../../components/Posts/Posts'
import SidebarMobile from '../../components/Sidebar/Mobile/SidebarMobile';

const Home = () => {
    return(
        <main className={styles.container}>
            <Sidebar/> 
            <SidebarMobile/>     
            <Stories/>
            <Suggestions/>
            <Post/>
        </main>
    )
}
export default Home