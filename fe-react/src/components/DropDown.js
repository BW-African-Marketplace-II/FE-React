import React from "react";
import "semantic-ui-css/semantic.min.css";
import { Popup, List } from "semantic-ui-react";
import { FiMoreVertical } from "react-icons/fi";
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router-dom'
import { darkMode, useDarkMode } from './LightMode'

// import "./styles.css";
 const DropDown = () => {
    const history = useHistory()
    const [darkMode, setDarkMode] = useDarkMode(false)

    const toggleMode = e => {
        e.preventDefault();
        setDarkMode(!darkMode);
      };
  const Menu1 = () => {
    return (
      <List divided relaxed link>
        <List.Item as="a"><Link to='/protected'><p>Shop</p></Link></List.Item>
        <List.Item as="a"><p onClick={toggleMode} >Mode</p></List.Item>
        <List.Item as="a"><p onClick={() => history.push("/addItem")}>Add Item</p></List.Item>
        <List.Item as="a"><Link to="/signIn"> <nav onClick={()=>window.localStorage.removeItem('token')}>Log out</nav></Link></List.Item>
      </List>
    );
  };
  return (
    <div className="App">
     
      <div
        style={{
          display: "flex",
          justifyContent: "space-around"
        }}
      >
      
        <Popup
          content={<Menu1 />}
          on="click"
          pinned
          position="bottom center"
          trigger={<FiMoreVertical size={23} color="#767676" />}
        />
      </div>
    </div>
  );
}

export default DropDown
