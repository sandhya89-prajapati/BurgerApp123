import "./NavigationItem.css";

function NavigationItem(props) {
    return (
        <>
        <li className="NavigationItem"><a className={props.active ? 'active' : ''} href={props.link}>{props.title}</a></li>
        </>
    )
}

export default NavigationItem;