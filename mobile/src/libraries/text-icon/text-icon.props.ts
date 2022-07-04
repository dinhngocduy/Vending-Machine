import { ViewStyle, TextStyle, ImageStyle, StyleProp } from "react-native";

export interface TextIconProps {
    text: string;
    imgLeft?: any;
    imgRight?: any;
    containerStyles?: ViewStyle;
    textStyles?: StyleProp<TextStyle>;
    iconStyles?: ViewStyle;
    imgStyles?: ImageStyle;
    isSvg?: boolean;
    singleLine?: boolean;
}