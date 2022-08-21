import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Image,
} from '@chakra-ui/react';
import { HiDocumentReport, HiOutlineTruck } from 'react-icons/hi';
import { ExcaliburComponent } from 'src/@types';
import { Menu } from '../components';
import './MobileMenu.css';
import Logo from '@excalibur/frontend/src/assets/logo.png';
import { Link } from 'react-router-dom';

interface MobileMenuProps extends ExcaliburComponent {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu = ({ children, onClose, isOpen }: MobileMenuProps) => {
  return (
    <Drawer size={'sm'} isOpen={isOpen} placement="right" onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>
          <Link to="/">
            <Image src={Logo} width={50} />
          </Link>
        </DrawerHeader>
        <DrawerBody>
          <Menu direction="vertical">
            <Menu.Item>Solutions</Menu.Item>
            <Menu.Item>Features</Menu.Item>
            <Menu.Item link={'pricing'}>Pricing</Menu.Item>
            <Menu.Item link={'company'}>Company</Menu.Item>
          </Menu>
        </DrawerBody>

        <DrawerFooter gap={2}>
          <Button variant="ghost">Login</Button>
          <Button variant="solid">Get Started</Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default MobileMenu;
