import {ImageSourcePropType} from 'react-native';

export interface IStory {
  avatarUrl: ImageSourcePropType;
  name: string;
}

export interface INft {
  name: string;
  owner: string;
  price: number;
  totalLike: number;
  totalMessage: number;
  img: ImageSourcePropType;
}
