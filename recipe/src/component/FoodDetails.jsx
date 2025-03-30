import { useEffect, useState } from "react";
import styles from "./rightDiv.module.css";


function FoodDetails({foodId}){
    const [food, setFood]= useState({});
    const [isLoading, setIsLoading] = useState(true);
    const URL=`https://api.spoonacular.com/recipes/${foodId}/information`;
    const API_KEY="ef2f4f2acde44ca2a3d7c6f98336cb31";
    useEffect(()=>{
        async function fetchFood(){
        const res = await fetch(`${URL}?apiKey=${API_KEY}`);
        const data = await res.json(); 
        console.log(data);
        setFood(data);
        setIsLoading(false);
        }
        fetchFood();
    },[foodId]);

    return(
        <div>
            <div className={styles.rightDiv}>
                <h1 className={styles.word}>{food.title}</h1> <br />
                <div className={styles.word}> {foodId} 
                    <br></br> <br />
                    <img src={food.image} alt="" className={styles.itemImg} />
                </div> <br /> <br />
                <span className={styles.word}><strong>{food.readyInMinutes} minutes</strong></span> &nbsp; &nbsp;
                <span className={styles.word}>{food.vegetarian?"Vegetarian":"Non-vegetarian"}</span> &nbsp; &nbsp;
                <span className={styles.word}>{food.servings}</span>
                <h2 className={styles.word}>Instructions</h2> <br />
                {isLoading? (<p>Loading...</p>):(food.analyzedInstructions[0].steps.map((step)=>(<li key={step.step} className={styles.word}>{step.step}</li>)))}
            </div>
        </div>
    )
}
export default FoodDetails;