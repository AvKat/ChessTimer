import React, { useEffect, useRef, useState } from "react";
import { Alert, BackHandler, TextInput } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { useAppDispatch, useAppSelector } from "./lib/hooks";
import { ResetGameState } from "./redux/actions";

interface TimerProps {
  black: boolean;
  isMyTurn: boolean;
}

const AnimatedInput = Animated.createAnimatedComponent(TextInput);

const TimerComponent: React.FC<TimerProps> = ({ black, isMyTurn }) => {
  const [time, setTime] = useState<number | undefined>(6);
  const intervalRef = useRef<number | undefined>(undefined);

  const fontSize = useSharedValue(20);

  const { started } = useAppSelector((s) => s.gameState);
  const dispatch = useAppDispatch();

  const decrementTime = () => {
    setTime((t) => {
      if (t) {
        if (t - 1 > 0) {
          return t - 1;
        } else {
          Alert.alert(
            "Game Over.",
            `${black ? "White" : "Black"} wins.\nDo you want to play again?`,
            [
              {
                text: "Yes",
                onPress: () => {
                  setTime(0);
                  //reset();
                  dispatch(ResetGameState());
                },
              },
              {
                text: "No",
                onPress: () => {
                  BackHandler.exitApp();
                },
              },
            ]
          );
          clearInterval(intervalRef.current);
        }
      }
    });
  };

  useEffect(() => {
    if (isMyTurn) {
      fontSize.value = 150;
      intervalRef.current = window.setInterval(decrementTime, 1000);
    } else {
      fontSize.value = 20;
      clearInterval(intervalRef.current);
    }
  }, [isMyTurn]);

  const style = useAnimatedStyle(() => ({
    color: black ? "white" : "black",
    fontSize: withTiming(fontSize.value),
  }));

  return (
    <AnimatedInput
      style={style}
      editable={!started}
      keyboardType={"numeric"}
      onChangeText={(t) => setTime(Number(t))}
    >
      {time || 0}
    </AnimatedInput>
  );
};

export { TimerComponent as Timer };
