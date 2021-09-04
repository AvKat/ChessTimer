import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import { Alert, BackHandler, StyleSheet } from "react-native";
import * as ScreenOrientation from "expo-screen-orientation";
import { TurnView } from "./TurnView";
import Animated from "react-native-reanimated";
import { StartButton } from "./StartButton";
import { useAppDispatch, useAppSelector } from "./lib/hooks";
import { ResetGameState, SetStarted, SetTurn } from "./redux/actions";
import { TurnTypes } from "./types";

const Main = () => {
  const { turn, started } = useAppSelector((s) => s.gameState);
  const dispatch = useAppDispatch();
  const setTurn = (t: TurnTypes) => {
    dispatch(SetTurn(t));
  };

  useEffect(() => {
    ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE);
  }, []);

  useEffect(() => {
    // @ts-ignore
    if (turn.length === 1 && started) {
      Alert.alert("Paused", "What do you want to do?", [
        {
          text: "Exit",
          onPress: () => {
            dispatch(ResetGameState());
            BackHandler.exitApp();
          },
        },
        {
          text: "Restart",
          onPress: () => {
            dispatch(ResetGameState());
          },
        },
        {
          text: "Resume",
          onPress: () => {
            setTurn(turn === "w" ? "white" : "black");
          },
        },
      ]);
    }
  }, [started, turn]);

  return (
    <Animated.View style={styles.container}>
      <StatusBar hidden />
      <TurnView black={true} turn={turn} setTurn={setTurn} />
      <TurnView turn={turn} setTurn={setTurn} />
      <StartButton
        onPress={() => {
          setTurn("white");
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
