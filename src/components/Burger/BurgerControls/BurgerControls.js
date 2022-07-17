import './BurgerControls.css';
import BurgerControl from './BurgerControl/BurgerControl';
const BurgerControls = (props) => {
    const controls = [
        { label: 'Salad', type: 'salad' },
        { label: 'Bacon', type: 'bacon' },
        { label: 'Cheese', type: 'cheese' },
        { label: 'Meat', type: 'meat' },
    ]
    return (
        <div className="BurgerControls">
            <p>Total Price:-- <strong>{props.price}</strong></p>
            {controls.map(ctrl => {
                return <BurgerControl
                    key={ctrl.type}
                    label={ctrl.label}
                    added={() => props.ingredientsAdded(ctrl.type)}
                    remove={() => props.ingredientsRemove(ctrl.type)}
                    disabled={props.disabled[ctrl.type]}
                />
            })}
            <button className="OrderButton" disabled={!props.purchasable} onClick={props.purchasing}>ORDER Now</button>
        </div>
    )
}

export default BurgerControls