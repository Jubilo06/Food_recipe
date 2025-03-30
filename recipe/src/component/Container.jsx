import styles from './containee.module.css';

function Container({children}){
    return(
        <div className={styles.containee}>
            {children}
        </div>
        
    )
}
export default Container;