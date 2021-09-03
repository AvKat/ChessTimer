import { Dimensions } from "react-native";

const wp = (percentage: number) => {
  return (Dimensions.get("window").width / 100) * percentage;
};

const hp = (percentage: number) => {
  return (Dimensions.get("window").height / 100) * percentage;
};

export { hp, wp };
