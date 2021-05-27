import React from 'react';
import {
  Pressable,
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  ViewStyle,
} from 'react-native';
import {Colors} from '../consts';
import {BTN_HEIGHT, BTN_WIDTH, PADDING} from '../consts/Measures';
import {CustomIconProps} from '../types';
import {Icon} from './Icon';

type Props = {
  label?: string;
  onPress: () => void;
  btnStyle?: StyleProp<ViewStyle>;
  labelStyle?: StyleProp<TextStyle>;
  showIcon?: boolean;
  iconProps?: CustomIconProps;
  iconPosition?: 'left' | 'right';
};

export const Button = (props: Props) => {
  return (
    <Pressable style={[styles.btn, props.btnStyle]} onPress={props.onPress}>
      {props.showIcon && props.iconPosition === 'left' && (
        <Icon {...props.iconProps!} />
      )}
      <Text style={[styles.label, props.labelStyle]}>{props.label}</Text>
      {props.showIcon && props.iconPosition === 'right' && (
        <Icon {...props.iconProps!} />
      )}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  btn: {
    width: BTN_WIDTH,
    height: BTN_HEIGHT,
    borderRadius: PADDING,
    backgroundColor: Colors.PRIMARY.hex,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: PADDING,
  },
  label: {
    color: Colors.WHITE.hex,
    fontFamily: 'Poppins-Medium',
    marginHorizontal: PADDING / 2,
    marginTop: PADDING / 4,
  },
});
