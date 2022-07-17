import Aux from "../../Hoc/Aux1";
import Toolbar from "../Navigation/Toolbar/Toolbar";
import './Layout.css';

const Layout = (props) => {
    return (
        <Aux>
            <Toolbar menu={props.menu}/>
            <main className='Content'>
                {props.children}
            </main>
        </Aux>
    );
}

export default Layout;