import { BText } from "@components";
import { ColorsEnum } from "@theme";
import React, { FC } from "react";
import { Image, Pressable, StyleSheet, View } from "react-native";

declare interface DonationRequestCardProps {
  requestDonation: DonationRequest;
}

export const DonationRequestCard: FC<DonationRequestCardProps> = ({ requestDonation }) => {
  return <View style={styles.container}>
    <View style={styles.row}>
      <Image source={{
        uri: requestDonation.avatar,
      }} style={styles.headerImage} />
      <View style={styles.headerInfo}>
        <View style={styles.nameContainer}>
          <BText size="title" bold style={{ paddingRight: 8 }} color="black">{requestDonation.name}</BText>
          <BText  color="black">{requestDonation.age}</BText>
        </View>
        {requestDonation.hospital && <View style={{ flexDirection: "row", alignItems: "center" }}>
          <BText color="secondary" superBold size="large">H  </BText>
          <BText color="black">{requestDonation.hospital}, {requestDonation.location}</BText>  
        </View>}
      </View>
      <View style={styles.bloodType}>
        <BText superBold size="title">{requestDonation.bloodType}</BText>
      </View>
    </View>
    <BText size="large" color="black" style={styles.description}>
      {requestDonation.description}
    </BText>
    <View style={styles.buttonGroup}>
      <Pressable style={styles.contactButton} onPress={() => console.log("Hello")}>
        <BText color="white" bold>Contact</BText>
      </Pressable>
      <Pressable style={styles.moreInfoButton} onPress={() => console.log("Hello")}>
        <BText color="primary" bold>Check more info</BText>
      </Pressable>
    </View>
  </View>
}

const styles = StyleSheet.create({
  container: {
    margin: 16,
    padding: 8,
    marginBottom: 0,
    borderRadius: 8,
    backgroundColor: ColorsEnum.backgroundPrimary,
  },
  headerImage: {
    width: 60,
    height: 60,
    borderRadius: 8,
    marginRight: 12,
  },
  nameContainer: {
    flexDirection: "row",
    alignItems: "flex-end",
  },
  row: { flexDirection: "row"},
  description: {
    marginTop: 12,
    color: ColorsEnum.darkGray
  },
  buttonGroup: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 12,
  },
  contactButton: {
    marginRight: 16,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
    flex: 1,
    backgroundColor: ColorsEnum.primary
  },
  moreInfoButton: {
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
    flex: 1,
    borderColor: ColorsEnum.primary,
    borderWidth: 2
  },
  bloodType: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  headerInfo: {
    flex: 4,
  }
})