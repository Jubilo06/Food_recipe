import styles from './InnerOne.module.css';

function InnerOne({children}){
    return(
        <div className={styles.inner}>
            {children}
        </div>
    )
}
export default InnerOne;