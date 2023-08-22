import Header from './Header'
import styles from './styles.module.css'
const Navigation=({
	children, layout, head, ...rest
})=>{
    return <div className={styles.container}>
        <div><Header/></div> 
        <div>{children}</div>
    </div>
}
export default Navigation