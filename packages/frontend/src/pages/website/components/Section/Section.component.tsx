import { HStack, Stack, StackProps } from '@chakra-ui/react';
import classNames from 'classnames';

interface SectionProps extends StackProps {}

const Section = ({ children, className, style, ...props }: SectionProps) => {
  return (
    <Stack className={classNames(className)} style={style} align={'center'} {...props}>
      {children}
    </Stack>
  );
};

export default Section;
