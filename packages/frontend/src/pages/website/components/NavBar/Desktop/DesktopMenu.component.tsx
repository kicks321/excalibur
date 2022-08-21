import React from 'react';
import { HiDocumentReport, HiOutlineTruck } from 'react-icons/hi';
import { ExcaliburComponent } from 'src/@types';
import { Menu } from '../components';
import './DesktopMenu.css';

interface DesktopMenuProps extends ExcaliburComponent {}

const DesktopMenu = ({}: DesktopMenuProps) => {
  return (
    <Menu>
      <Menu.Item
        popover={{
          placement: 'bottom-start',
          content: [
            {
              header: 'Solution 1',
              content: 'Lorem ipsum needs to happen here.',
              icon: <HiOutlineTruck size={32} />,
              link: 'solution1',
            },
            {
              header: 'Solution 2',
              content: 'Lorem ipsum needs to happen here.',
              icon: <HiDocumentReport size={32} />,
              link: 'solution2',
            },
          ],
        }}>
        Solutions
      </Menu.Item>
      <Menu.Item
        popover={{
          placement: 'bottom-start',
          content: [
            {
              header: 'Feature 1',
              content: 'Lorem ipsum needs to happen here.',
              icon: <HiOutlineTruck size={32} />,
            },
            {
              header: 'Feature 2',
              content: 'Lorem ipsum needs to happen here.',
              icon: <HiDocumentReport size={32} />,
            },
          ],
        }}>
        Features
      </Menu.Item>
      <Menu.Item link={'pricing'}>Pricing</Menu.Item>
      <Menu.Item link={'company'}>Company</Menu.Item>
    </Menu>
  );
};

export default DesktopMenu;
