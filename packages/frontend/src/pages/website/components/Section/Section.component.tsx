import { Stack, StackProps } from '@chakra-ui/react';
import classNames from 'classnames';

interface SectionProps extends StackProps {}

const Section = ({ children, className, style, ...props }: SectionProps) => {
  return (
    <Stack
      className={classNames(className)}
      style={style}
      align={'center'}
      padding={'0px 250px'}
      {...props}>
      {children}
    </Stack>
  );
};

export default Section;
