import { useState } from 'react';
import Layout from "./components/Layouts1/Layout";
import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder";

function App() {
  const [menuList, setMenuList] = useState([
    {
      title: 'Home',
      link: '/',
      active: true,
    },
    {
      title: 'Cart',
      link: '/cart',
      active: false,
    },
  ])
  return (
    <div>
      <Layout menu={menuList}>
        <BurgerBuilder />
      </Layout>
    </div>
  );
}

export default App;