// Library imports
import React from 'react';
import {
  Box,
  Button,
  Icon,
  PlacementWithLogical,
  Popover,
  PopoverArrow,
  PopoverBody,
  Stack,
  Text,
  PopoverContent,
  PopoverTrigger,
} from '@chakra-ui/react';
import classnames from 'classnames';
import { Link } from 'react-router-dom';
import { HiChevronDown } from 'react-icons/hi';

// Project imports
import { ExcaliburComponent } from 'src/@types';

type PopoverItemProps = {
  icon?: React.ReactNode;
  header?: string;
  content?: string;
  link?: string;
};

type PopoverProps = {
  placement: PlacementWithLogical;
  content?: PopoverItemProps[];
  style?: React.CSSProperties;
  className?: string | string[];
};

interface MenuItemProps extends ExcaliburComponent {
  popover?: PopoverProps;
  link?: string;
}

const MenuItem = ({ className, style, children, link, popover }: MenuItemProps) => {
  let menuNodeItem = null;

  if (popover) {
    menuNodeItem = (
      <Popover placement={popover.placement}>
        <PopoverTrigger>
          <Button className={'link'} variant="link" size="lg">
            {children}
            <Icon as={() => <HiChevronDown />} />
          </Button>
        </PopoverTrigger>
        <PopoverContent className={'navmenu-popover-content'} data-testid="navmenu-popover-content">
          <PopoverArrow />
          <PopoverBody
            className={classnames('navmenu-popover-body', popover.className)}
            padding={'10px 10px'}
            data-testid="navmenu-popover-body">
            {popover.content &&
              popover.content.map((item, index) => (
                <Link to={item.link || ''}>
                  <Box
                    display={'flex'}
                    alignItems="center"
                    gap={10}
                    className={'navbar-popover-item'}
                    data-testid={'navbar-popover-item'}
                    key={`navbar-popover-item-${index}`}>
                    <Box
                      display="flex"
                      alignItems={'center'}
                      justifyContent="center"
                      alignContent={'center'}>
                      {item.icon}
                    </Box>
                    <Stack spacing={1}>
                      <Text fontWeight={'bold'}>{item.header}</Text>
                      <Text fontSize={12} fontWeight={'light'}>
                        {item.content}
                      </Text>
                    </Stack>
                  </Box>
                </Link>
              ))}
          </PopoverBody>
        </PopoverContent>
      </Popover>
    );

    return menuNodeItem;
  }

  if (link) {
    menuNodeItem = (
      <Link
        to={link}
        style={style}
        className={classnames('menu-item', className)}
        data-testid="menu-item">
        <Button className={'link'} variant="link" size="lg">
          {children}
        </Button>
      </Link>
    );

    return menuNodeItem;
  }

  return (
    <Link to=".">
      <Button className={classnames('menu-item', 'link', className)} variant="link" size="lg">
        {children}
      </Button>
    </Link>
  );
};

export default MenuItem;
