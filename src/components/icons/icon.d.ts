import { ComponentProps } from 'react';

export interface IconProps extends Omit<ComponentProps<'div'>, 'size'> {
  size: number;
}
