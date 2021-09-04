import React, { useContext, useEffect } from "react";
import { TouchableOpacity, Text } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import { wp } from "./lib/dimensions";
import { TimerContext } from "./TimerContext";

interface StartButtonTypes {
  onPress: () => void;
}

const DEFAULT_TOP = wp(50) - 45;
const AnimatedTouchable = Animated.createAnimatedComponent(TouchableOpacity);

const StartButton: React.FC<StartButtonTypes> = ({ onPress }) => {
  const { state } = useContext(TimerContext);
  const top = useSharedValue(DEFAULT_TOP);

  useEffect(() => {
    if (state.started) {
      top.value = 600;
    } else {
      top.value = DEFAULT_TOP;
    }
  }, [state.started]);

  const style = useAnimatedStyle(() => ({
    top: withSpring(top.value, { stiffness: 50 }),
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "cyan",
    borderWidth: 4,
    borderColor: "blue",
    width: 90,
    height: 90,
    borderRadius: 45,
    position: "absolute",
  }));

  return (
    <AnimatedTouchable {...{ onPress, style }}>
      <Text style={{ color: "blue", fontSize: 20, fontWeight: "700" }}>
        Start
      </Text>
    </AnimatedTouchable>
  );
};

export { StartButton };
