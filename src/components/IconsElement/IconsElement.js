import React, { useState } from 'react'
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PersonIcon from '@mui/icons-material/Person';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { styles } from './styles';

const IconsElement = () => {
  const [value, setValue] = useState('recents');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <BottomNavigation sx={styles.iconsWrapper} value={value} onChange={handleChange}>
      <BottomNavigationAction
        sx={{ borderRight: "1px solid #3f7489", width: '33.3%' }}
        icon={<FavoriteIcon sx={styles.icons}/>}
      />

      <BottomNavigationAction
        // label="Profile"
        // value="profile"
        sx={{ borderRight: "1px solid #3f7489", width: '33.3%' }}
        icon={<PersonIcon sx={styles.icons}/>}
      />
      
      <BottomNavigationAction
        sx={{ width: '33.3%' }}
        icon={<NotificationsIcon sx={styles.icons}/>}
      />
    </BottomNavigation>
  )
}

export default IconsElement
