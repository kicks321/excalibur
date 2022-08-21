// Library imports
import { Stack } from '@chakra-ui/react';
import classnames from 'classnames';

// Project imports
import { ExcaliburComponent } from 'src/@types';
import MenuItem from './Item.component';

// Styles
import './Menu.css';

interface MenuProps extends ExcaliburComponent {
  direction?: 'horizontal' | 'vertical';
}

const Menu = ({ className, style, children, direction = 'horizontal' }: MenuProps) => (
  <Stack
    className={classnames('navmenu', className)}
    data-testid="navmenu"
    style={style}
    spacing={4}
    direction={direction === 'vertical' ? 'column' : 'row'}>
    {children}
  </Stack>
);

// Compound React.Nodes
Menu.Item = MenuItem;

export default Menu;
