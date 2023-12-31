import { BButton, SignOutButton } from "@components";
import { useAppNavigation } from "@hooks";
import { ColorsEnum } from "@theme";
import React, { FC } from "react";
import { View, StyleSheet } from "react-native";

export const ButtonHub: FC = () => {
  const { navigateToEditProfile, navigateToCreateDonationRequest } = useAppNavigation();

  const onPressEditProfile = () => {
    navigateToEditProfile();
  };

  return (
    <View style={styles.buttonHubContainer}>
      <BButton
        variant="secondary"
        title="Quiero donar sangre"
        onPress={() => console.log("Donate blood")}
      />
      <BButton
        style={{ marginTop: 8 }}
        title="Crear una petición de donación"
        variant="secondary-void"
        onPress={navigateToCreateDonationRequest}
      />
      <BButton
        style={{ marginTop: 8 }}
        title="Editar perfil"
        variant="transparent"
        onPress={onPressEditProfile}
      />
      <SignOutButton style={{ marginTop: 8 }} variant="transparent-primary" />
    </View>
  );
};

const styles = StyleSheet.create({
  buttonHubContainer: {
    position: "absolute",
    width: "100%",
    bottom: 32,
  },
  contactButton: {
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
    width: "100%",
    backgroundColor: ColorsEnum.secondary,
    marginTop: 8,
  },
  editButton: {
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
    width: "100%",
    borderColor: ColorsEnum.secondary,
    marginTop: 8,
    borderWidth: 2,
  },
});
