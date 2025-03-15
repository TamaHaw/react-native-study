import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

type IconProps = {
  name: string;
};

const Icons = ({ name }: IconProps) => {
  switch (name) {
    case 'circle':
      return <Icon name="circle-o" size={50} color="#C4AEAD" />;
    case 'cross':
      return <Icon name="times" size={50} color="#ABCDEF" />;
    default:
      return <Icon name="pencil" size={50} color="#FFFFFF" />;
  }
};

export default Icons;
