import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useNavigate } from 'react-router-dom';
import './PositionedMenu.css'
import { useState, useEffect } from 'react';

export default function PositionedMenu() {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [content, setContent] = useState('Demo Tracker Details')
  const open = Boolean(anchorEl);
  const [menuKey, setMenuKey] = useState(0);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {

    setAnchorEl(null);

  };

  const handleDemo = () => {
    navigate('/demo');
    setContent('Demo Tracker Details')
  }

  const handleCall = () => {
    navigate('/call');
    setContent(() => 'Call Tracker Details');
  }

  
  return (
    <div className="category_dropdown">
      <Button
        id="demo-positioned-button"
        aria-controls={open ? 'demo-positioned-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        {content}
        <ExpandMoreIcon />
      </Button>
      <Menu
        key={menuKey}
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <MenuItem onClick={handleDemo}>Demo Tracker Details</MenuItem>
        <MenuItem onClick={handleCall}>Call Tracker Details</MenuItem>

      </Menu>
    </div>
  );
}