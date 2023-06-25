import { FilterButton, Filters } from "@components";
import { ColorsEnum } from "@theme";
import React, { FC, useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { RequestCard } from "../RequestCard";
import { LinearGradient } from "expo-linear-gradient";
import { useDonationRequests } from "@hooks";

interface RequestsProps {
  setIsContactModalVisible: (value: boolean) => void;
}

export const Requests: FC<RequestsProps> = ({ setIsContactModalVisible }) => {
  
  const [filtersVisibility, setFiltersVisibility] = useState(false);

  const onToggleFilters = () => {
    setFiltersVisibility(prev => !prev);
  };

  const onContact = () => {
    setIsContactModalVisible(true);
  };

  const { data: donationRequests, fetchNextPage } = useDonationRequests()

  return (
    <View style={styles.container}>
      <LinearGradient colors={[
        ColorsEnum.backgroundSecondary,
        ColorsEnum.backgroundSecondary,
        ColorsEnum.backgroundSecondary,
        ColorsEnum.backgroundSecondary,
        ColorsEnum.backgroundSecondaryTransparent,
      ]} style={styles.filterContainer}>
        <FilterButton variant="secondary" onPress={onToggleFilters} />
      </LinearGradient>
      {
        filtersVisibility ? (
          <View style={styles.filterContainer}>
            <Filters variant="secondary" />
          </View>
        ) : <FlatList
          data={donationRequests?.pages.flatMap(page => page.pageDonationRequests)}
          showsVerticalScrollIndicator={false}
          ListHeaderComponent={() => <View style={{ height: 40 }} />}
          contentContainerStyle={{ padding: 16, paddingTop: 0 }}
          renderItem={({ item }) => (
            <RequestCard
              requestDonation={item}
              setIsContactModalVisible={onContact}
            />
          )}
          ListFooterComponent={() => <View style={{ height: 80 }} />}
          keyExtractor={item => "Donor_card_" + item.id}
          onEndReached={() => fetchNextPage()}
        />
      }
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: ColorsEnum.backgroundSecondary,
    paddingTop: 16,
    height: "100%",
  },
  filterContainer: {
    paddingLeft: 16,
    position: 'absolute',
    zIndex: 1,
    width: '100%',
    height: 48,
    top: 8
  }
});
