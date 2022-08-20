// Dependencies
import React from 'react';
import { AppBar, Box, Menu, useScrollTrigger } from '@mui/material';
import { ExcaliburComponent } from 'src/@types';
import classnames from 'classnames';
// Style
import './NavBar.css';

interface NavBarProps extends ExcaliburComponent {}

interface ElevationScrollProps extends Omit<ExcaliburComponent, 'children'> {
  children: React.ReactElement;
}

const NavBar = ({ children, className, style }: NavBarProps) => {
  const ElevationScroll = ({ children }: ElevationScrollProps) => {
    const trigger = useScrollTrigger({
      disableHysteresis: true,
      threshold: 0,
    });

    return React.cloneElement(children, {
      elevation: trigger ? 4 : 0,
    });
  };

  return (
    <ElevationScroll>
      <AppBar className={classnames('navbar', className)} style={style}>
        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
          <Menu>
            
          </Menu>
        </Box>
      </AppBar>
    </ElevationScroll>
  );
};

export default NavBar;
