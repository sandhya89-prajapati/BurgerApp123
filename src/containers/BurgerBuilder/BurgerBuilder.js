import { Component } from "react";
import Burger from "../../components/Burger/Burger";
import BurgerControls from "../../components/Burger/BurgerControls/BurgerControls";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";
import Model from "../../components/UI/Model/Model";
import BackDrop from "../../components/UI/BackDrop/BackDrop";
import Aux from "../../Hoc/Aux1";

const INGREDIENT_PRICES = {
    salad: 20,
    cheese: 50,
    meat: 60,
    bacon: 75,
}

class BurgerBuilder extends Component {

    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0,
        },
        totalPrice: 20,
        purchasable: false,
        purchasing: false,
    }

    updatePurchasable = (ingredients) => {

        const sum = Object.keys(ingredients).map((key) => {
            return ingredients[key];
        }).reduce((sum, el) => {
            return sum + el;
        }, 0);
        this.setState({ purchasable: sum > 0 });
    }

    purchaseHandler = () => {
        this.setState({ purchasing: true })
    }

    closeModel = () => {
        this.setState({ purchasing: false })
    }

    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updateCount = oldCount + 1;
        const updatedIngredients = {
            ...this.state.ingredients
        }
        updatedIngredients[type] = updateCount;
        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;
        this.setState({ totalPrice: newPrice, ingredients: updatedIngredients });
        this.updatePurchasable(updatedIngredients);
    }

    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        if (oldCount <= 0) {
            return;
        }
        const updateCount = oldCount - 1;
        const updatedIngredients = {
            ...this.state.ingredients
        }
        updatedIngredients[type] = updateCount;
        const priceDeduction = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceDeduction;
        this.setState({ totalPrice: newPrice, ingredients: updatedIngredients });
        this.updatePurchasable(updatedIngredients);
    }

    render() {
        const disabledInfo = {
            ...this.state.ingredients
        }
        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0
        }
        let model = null
        if (this.state.purchasing) {
            model = (
                <Aux>
                    <BackDrop close={this.closeModel} />

                    <Model>
                        <OrderSummary ingredients={this.state.ingredients} />
                    </Model>
                </Aux>
            );
        }
        return (
            <Aux>
                {model}
                <Burger ingredients={this.state.ingredients} />
                <BurgerControls
                    ingredientsAdded={this.addIngredientHandler}
                    ingredientsRemove={this.removeIngredientHandler}
                    disabled={disabledInfo}
                    price={this.state.totalPrice}
                    purchasable={this.state.purchasable}
                    purchasing={this.purchaseHandler}
                />
            </Aux>
        );
    }
}
export default BurgerBuilder;