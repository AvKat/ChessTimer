import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import { StyleSheet } from "react-native";
import * as ScreenOrientation from "expo-screen-orientation";
import { TurnView } from "./TurnView";
import Animated from "react-native-reanimated";
import { StartButton } from "./StartButton";
import { useAppDispatch, useAppSelector } from "./lib/hooks";
import { SetStarted, SetTurn } from "./redux/actions";
import { TurnTypes } from "./types";

const Main = () => {
  const { turn } = useAppSelector((s) => s.gameState);
  const dispatch = useAppDispatch();
  const setTurn = (t: TurnTypes) => {
    dispatch(SetTurn(t));
  };

  useEffect(() => {
    ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE);
  }, []);

  return (
    <Animated.View style={styles.container}>
      <StatusBar hidden />
      <TurnView black={true} turn={turn} setTurn={setTurn} />
      <TurnView turn={turn} setTurn={setTurn} />
      <StartButton
        onPress={() => {
          dispatch(SetTurn("white"));
          dispatch(SetStarted(true));
        }}
      />
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    flexDirection: "row",
    backgroundColor: "gray",
    alignItems: "center",
    justifyContent: "center",
  },
});

export { Main };
