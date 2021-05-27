import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome5Pro from 'react-native-vector-icons/FontAwesome5Pro';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Foundation from 'react-native-vector-icons/Foundation';
import {IconProps} from 'react-native-vector-icons/Icon';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Zocial from 'react-native-vector-icons/Zocial';

export const iconType = {
  AntDesign: (props: IconProps) => <AntDesign {...props} />,
  Entypo: (props: IconProps) => <Entypo {...props} />,
  EvilIcons: (props: IconProps) => <EvilIcons {...props} />,
  Feather: (props: IconProps) => <Feather {...props} />,
  FontAwesome: (props: IconProps) => <FontAwesome {...props} />,
  FontAwesome5: (props: IconProps) => <FontAwesome5 {...props} />,
  FontAwesome5Pro: (props: IconProps) => <FontAwesome5Pro {...props} />,
  Fontisto: (props: IconProps) => <Fontisto {...props} />,
  Foundation: (props: IconProps) => <Foundation {...props} />,
  Ionicons: (props: IconProps) => <Ionicons {...props} />,
  MaterialCommunityIcons: (props: IconProps) => (
    <MaterialCommunityIcons {...props} />
  ),
  MaterialIcons: (props: IconProps) => <MaterialIcons {...props} />,
  Octicons: (props: IconProps) => <Octicons {...props} />,
  SimpleLineIcons: (props: IconProps) => <SimpleLineIcons {...props} />,
  Zocial: (props: IconProps) => <Zocial {...props} />,
};
