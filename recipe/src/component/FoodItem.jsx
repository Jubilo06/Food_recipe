import styles from "./foodDiv.module.css"

function FoodItem({food, setFoodId}){
    return(
        <div className={styles.foodDiv}>
            <img src={food.image} className={styles.itemImg}></img>
            <h1 key={food.id}>{food.title}</h1>
            <button onClick={()=> {console.log(food.id); setFoodId(food.id)}} className={styles.itemBut}>View Recipe</button>
            <hr />
        </div>
    )
}
export default FoodItem;