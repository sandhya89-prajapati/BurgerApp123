import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import './Tool.css';
 const Toolbar = (props) => {
     return (
         <header className="Toolbar">
             <div>Menu</div>
             <Logo/>
             <div>
                 <nav>
                     <NavigationItems menu={props.menu} />
                 </nav>
             </div>
             </header>
     )
 }

 export default Toolbar;