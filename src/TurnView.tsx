import React, { useEffect, useState } from "react";
import { TouchableOpacity } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { hp } from "./lib/dimensions";
import { Timer } from "./Timer";

interface TurnViewProps {
  black?: boolean;
  turn: string;
  setTurn: (t: string) => void;
}

const AnimatedTouchable = Animated.createAnimatedComponent(TouchableOpacity);
const FULL_HEIGHT = hp(100);

const TurnView: React.FC<TurnViewProps> = ({
  black = false,
  turn,
  setTurn,
}) => {
  const flex = useSharedValue<1 | 4>(1);
  const [isMyTurn, _setTurn] = useState<boolean>(false);

  useEffect(() => {
    _setTurn((black && turn === "black") || (!black && turn === "white"));
  }, [turn]);

  useEffect(() => {
    if (isMyTurn) {
      flex.value = 4;
    } else {
      flex.value = 1;
    }
  }, [isMyTurn]);

  const animatedStyle = useAnimatedStyle(() => ({
    flex: withTiming(flex.value),
    backgroundColor: black ? "black" : "white",
    borderColor: black ? "white" : "black",
    borderRightWidth: black ? 5 : 0,
    borderLeftWidth: black ? 0 : 5,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: FULL_HEIGHT,
  }));

  return (
    <>
      <AnimatedTouchable
        onPress={() => setTurn(black ? "white" : "black")}
        disabled={!isMyTurn}
        style={animatedStyle}
      >
        <Timer {...{ isMyTurn, black }} />
      </AnimatedTouchable>
    </>
  );
};

export { TurnView };
