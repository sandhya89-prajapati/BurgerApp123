import './BurgerControl.css'
const BurgerControl = (props) => {
    return (
        <div className="BurgerControl">
            <div className="Label">{props.label}</div>
            <button className="Less" onClick={props.remove} disabled={props.disabled}>Less</button>
            <button className="More" onClick={props.added} >More</button>
        </div>
    )
}

export default BurgerControl;