import FoodItem from "./FoodItem";

function FoodList({foodData, setFoodData, setFoodId}){
    return(
        <div>
            {foodData.map((food)=>
            <FoodItem key= {food.title} food={food} setFoodId={setFoodId} />
            )}
        </div>
    )
}
export default FoodList;