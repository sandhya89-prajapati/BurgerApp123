import Aux1 from "../../../Hoc/Aux1";
import './Model.css';

const Model = (props) => {
    return (
    <Aux1>
        <div className="Model">
            {props.children}</div>
    </Aux1>
    )
}

export default Model;