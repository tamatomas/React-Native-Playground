import React from 'react';
import {CustomIconProps} from '../types';
import {iconType} from '../utils';

export const Icon = (props: CustomIconProps) => {
  const IconFrom = iconType[props.from];
  return <IconFrom {...props.iconProps} />;
};
