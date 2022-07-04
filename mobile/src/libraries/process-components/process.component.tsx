import * as React from 'react';
import { Easing, TextInput, Animated, Text, View, StyleSheet } from 'react-native';
import Svg, { G, Circle, Rect } from 'react-native-svg';

interface Props {
  percentage: number;
  radius: number;
  strokeWidth: number;
  duration: number;
  color: string;
  delay: number;
  textColor?: string;
}

export const ProcessComponent = (props: Props) => {
  const { percentage, radius, strokeWidth, duration, color, delay } = props;
  const max = 100;

  const animated = React.useRef(new Animated.Value(0)).current;
  const circleRef = React.useRef<AnimatedCircle>();
  const circumference = 2 * Math.PI * radius;
  const halfCircle = radius + strokeWidth;

  const animation = (toValue: number) => {
    return Animated.timing(animated, {
      delay: delay,
      toValue,
      duration,
      useNativeDriver: true,
      easing: Easing.out(Easing.ease),
    }).start();
  };

  React.useEffect(() => {
    animation(percentage);
    animated.addListener(
      (v) => {
        const maxPerc = (100 * v.value) / max;
        const strokeDashoffset = circumference - (circumference * maxPerc) / 100;
        if (circleRef?.current) {
          circleRef.current.setNativeProps({
            strokeDashoffset,
          });
        }
      }
      // [percentage]
    );

    return () => {
      animated.removeAllListeners();
    };
  });

  return (
    <View style={{ width: radius * 2, height: radius * 2 }}>
      <Svg
        height={radius * 2}
        width={radius * 2}
        viewBox={`0 0 ${halfCircle * 2} ${halfCircle * 2}`}
      >
        <G rotation="-90" origin={`${halfCircle}, ${halfCircle}`}>
          <Circle
            ref={circleRef}
            cx="50%"
            cy="50%"
            r={radius}
            fill="transparent"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeDashoffset={circumference}
            strokeDasharray={circumference}
          />
          <Circle
            cx="50%"
            cy="50%"
            r={radius}
            fill="transparent"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinejoin="round"
            strokeOpacity=".1"
          />
        </G>
      </Svg>
      <TextInput
        // ref={inputRef}
        underlineColorAndroid="transparent"
        editable={false}
        defaultValue={percentage + '%'}
        style={[StyleSheet.absoluteFillObject, { fontSize: radius / 2, color: color }, styles.text]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: { fontWeight: '900', textAlign: 'center' },
});
