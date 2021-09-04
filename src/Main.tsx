import { StatusBar } from "expo-status-bar";
import React, { useContext, useEffect } from "react";
import { StyleSheet, } from "react-native";
import * as ScreenOrientation from "expo-screen-orientation";
import { TurnView } from "./TurnView";
import Animated from "react-native-reanimated";
import { TimerContext } from "./TimerContext";
import {StartButton} from "./StartButton";

const Main = () => {
  const { state, setState } = useContext(TimerContext);
  const { turn, } = state;
  const setTurn = (t: string) => {
    setState({ turn: t });
  };

  useEffect(() => {
    ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE);
  }, []);

  return (
    <Animated.View style={styles.container}>
      <StatusBar hidden />
      <TurnView black={true} turn={turn} setTurn={setTurn} />
      <TurnView turn={turn} setTurn={setTurn} />
      <StartButton onPress={() => setState({started: true, turn: "white" })} />
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
