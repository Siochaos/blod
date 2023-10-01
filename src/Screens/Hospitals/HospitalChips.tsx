import { BText } from "@components";
import { ColorsEnum } from "@theme";
import React, { FC } from "react";
import { StyleSheet, View } from "react-native";

interface HospitalChipsProps {
  selectedChip: "Card" | "List";
  setSelectedChip: (chip: "Card" | "List") => void;
}

export const HospitalChips: FC = () => {
  return <View style={{ flexDirection: "row", paddingHorizontal: 16, alignItems: "center", marginBottom: 16 }}>
    <BText color="black">Ver hospitales como:</BText>
    <View style={styles.chip}>
      <BText>Carta</BText>
    </View>
    <View style={styles.chip}>
      <BText>Lista</BText>
    </View>
  </View>;
};

const styles = StyleSheet.create({
  chip: {
    marginLeft: 8,
    padding: 8,
    backgroundColor: ColorsEnum.white,
    borderRadius: 4
  }
});