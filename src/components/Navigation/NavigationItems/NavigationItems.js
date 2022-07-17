import NavigationItem from './NavigationItem/NavigationItem';
import './NavigationItems.css';
 function NavigationItems(props) {
     return (
         <>
         <ul className="NavigationItems">
             {props.menu.map((m, index)=> {
                 return <NavigationItem key={m.title + index} title={m.title} link={m.link} active={m.active} />
             })}
         </ul>
         </>
     )
 }

 export default NavigationItems;
