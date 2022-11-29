import React, { useState } from 'react'
import { Box } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


const ListElement = () => {
    const [anchorElNav, setAnchorElNav] = useState(null);
    const dropdown = [ 'Blog', 'Podcast' ];

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

  return (
    <Box>
      <IconButton
        size="small"
        onClick={handleOpenNavMenu}
        color="inherit"
        sx={{ fontSize: '14px'}}
        >
        STORIES <ExpandMoreIcon />
      </IconButton>

      <Menu
        id="menu-appbar"
        anchorEl={anchorElNav}
        anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left',
        }}
        keepMounted
        transformOrigin={{
        vertical: 'top',
        horizontal: 'left',
        }}
        open={Boolean(anchorElNav)}
        onClose={handleCloseNavMenu}
        sx={{ display: { xs: 'none', md: 'block' }}}
        >
        {dropdown.map((page) => (
        <MenuItem key={page} onClick={handleCloseNavMenu}>
          <Typography textAlign="center">{page}</Typography>
        </MenuItem>
        ))}
      </Menu>
    </Box>
  )
}

export default ListElement
