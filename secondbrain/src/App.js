import { Sidebar, Menu, MenuItem} from 'react-pro-sidebar';
import UserProfile from './components/user_profile';
import logo from './images/exxon_mobil_logo.png'
import lucas_photo from './images/foto_lucas.jpg'
import { Link, NavLink } from 'react-router-dom';
import AppRoutes from './AppRoutes';

function App() {
  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      <Sidebar backgroundColor="#006ADC" width='300px'>
        <UserProfile 
          imageUrl={lucas_photo} 
          name="Lucas Xiang Yu" 
          role="Transactional Analyst | Project Setup" 
        />
        <Menu menuItemStyles={{
          button: ({ level, active, disabled }) => {
            // only apply styles on first level elements of the tree
            if (level === 0)
              return {
                color: disabled ? '#000000' : '#000000',
                backgroundColor: active ? '#FFFFFF' : undefined,
              };
          },
         }}> 
          <MenuItem style={menuItems} component={<NavLink to="/home" style={({ isActive }) => isActive ? activeStyle : menuItemStyle}/>}> Home </MenuItem>
          <MenuItem style={menuItems} component={ <NavLink to="/your-peers" style={({ isActive }) => isActive ? activeStyle : menuItemStyle}/>}> Your Peers </MenuItem>
          <MenuItem style={menuItems} component={<NavLink to="/your-role" style={({ isActive }) => isActive ? activeStyle : menuItemStyle}/>}> Your Role </MenuItem>
          <MenuItem style={menuItems} component={<NavLink to="/your-pds" style={({ isActive }) => isActive ? activeStyle : menuItemStyle}/>} > Your PDS </MenuItem>
        </Menu>
        {/* Footer Logo */}
        <div style={footerStyles}>
          <img 
            src={logo}
            alt="Logo" 
            style={logoStyles}  
          />
        </div>
      </Sidebar>
      <div style={{ flex: 1, padding: '20px' }}>
        {/* Place where routes are rendered */}
        <AppRoutes />
      </div>
    </div>
  );
}

const footerStyles =  {
  padding: '16px',
  borderTop: '1px solid rgba(255, 255, 255, 0.2)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: '70%'
};

const logoStyles = {
  width: '130px', // Ensure width is not too small
  height: '80px',
  objectFit: 'contain', // Ensures the entire image is displayed without distortion
  marginbottom: '0px;'
};

const menuItems = {
  textAlign: 'center', 
  fontSize: '15px',
  fontWeight: 'bold'
}

const menuItemStyle = {
  textAlign: 'center', 
  fontSize: '15px',
  fontWeight: 'bold',
  textDecoration: 'none',
  color: '#000', // Default color
  fontWeight: 'bold',
};

const activeStyle = {
  ...menuItemStyle,
  color: '#000000', // Active color
  backgroundColor: '#FFFFFF', // Active background
};


export default App;
