import {IconProps} from 'react-native-vector-icons/Icon';
import {iconType} from '../utils';

export type CustomIconProps = {
  from: keyof typeof iconType;
  iconProps: IconProps;
};
