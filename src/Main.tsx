import { StatusBar } from "expo-status-bar";
import React, { useContext, useEffect } from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import * as ScreenOrientation from "expo-screen-orientation";
import { TurnView } from "./TurnView";
import { wp } from "./lib/dimensions";
import Animated from "react-native-reanimated";
import { TimerContext } from "./TimerContext";

const Main = () => {
  const { state, setState } = useContext(TimerContext);
  const { turn, started } = state;
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
      {!started && (
        <TouchableOpacity
          style={styles.btn}
          onPress={() => {
            setState({ turn: "white", started: true });
          }}
        >
          <Text style={{ color: "blue" }}>Start</Text>
        </TouchableOpacity>
      )}
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
  btn: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "red",
    width: 90,
    height: 90,
    borderRadius: 45,
    position: "absolute",
    top: wp(50) - 45,
  },
});

export { Main };
