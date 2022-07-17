import Aux1 from "../../../Hoc/Aux1";
import Button from "../../UI/Button/Button";

const OrderSummary = (props) => {
    const ingredientsSummary = Object.keys(props.ingredients).map(key => {
        return<li key ={key}> <span style={{ textTransform: "capitalize" }}>{key}</span>: {props.ingredients[key]}</li>

    });
    return (
        <Aux1>
            <h3>Your Order</h3>
            <p>A Delicious burger with the following ingredients</p>
            <ul>
                {ingredientsSummary}
            </ul>
            <p>Continue to checkout ..?</p>
            <Button class="Danger" >Cancle</Button>
            <Button class="Success" >Continue</Button>
        </Aux1>
    )
}

export default OrderSummary;