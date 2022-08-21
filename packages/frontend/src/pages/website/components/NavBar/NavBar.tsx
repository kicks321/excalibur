// Library imports
import React, { useEffect } from 'react';
import { Box, Button, Icon, IconButton, Image, Stack, useDisclosure } from '@chakra-ui/react';
import classnames from 'classnames';
import { Link } from 'react-router-dom';
import { HiMenu } from 'react-icons/hi';

// Project imports
import { ExcaliburComponent } from 'src/@types';
import Logo from '@excalibur/frontend/src/assets/logo.png';
import { applicationStateVar } from '../../../../apollo/Cache/ReactiveVarsCache';
import DesktopMenu from './Desktop/DesktopMenu.component';
import MobileMenu from './Mobile/MobileMenu.component';

// Style
import './NavBar.css';
import { useReactiveVar } from '@apollo/client';

interface NavBarProps extends ExcaliburComponent {}

const NavBar = ({ children, className, style }: NavBarProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const applicationState = useReactiveVar(applicationStateVar);

  useEffect(() => {
    console.log(applicationState);
  }, [applicationState]);

  return (
    <Box
      className={classnames('navbar', className)}
      display={'flex'}
      justifyContent="space-between"
      style={style}
      padding={applicationState.mobile ? '0px 20px' : '0px 72px'}>
      {/* Nav bar left */}
      <Stack
        className={'navbar-left'}
        data-testid={'navbar-left'}
        spacing={4}
        direction="row"
        align="center">
        <Link to="/">
          <Image src={Logo} width={75} />
        </Link>
        {!applicationState.mobile ? (
          <DesktopMenu />
        ) : (
          <MobileMenu isOpen={isOpen} onClose={onClose} />
        )}
      </Stack>
      {/* Nav bar right */}
      <Stack
        className={'navbar-right'}
        data-testid={'navbar-right'}
        spacing={2}
        direction="row"
        align="center">
        <Button variant="ghost">Login</Button>
        <Button variant="solid">Get Started</Button>
        {applicationState.mobile && (
          <IconButton
            onClick={onOpen}
            variant={'unstyled'}
            icon={<Icon as={() => <HiMenu size={28} />} />}
            aria-label="Open Menu"
          />
        )}
      </Stack>
    </Box>
  );
};

export default NavBar;
