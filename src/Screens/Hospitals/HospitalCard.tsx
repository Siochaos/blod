import { BButton, BText } from "@components";
import { HospitalFromAPI } from "@hooks";
import { ColorsEnum } from "@theme";
import React, { FC, useCallback, useMemo } from "react";
import { Dimensions, Linking, Platform, StyleSheet, View } from "react-native";
import MapView, { Marker } from "react-native-maps";
const { height, width } = Dimensions.get( "window" );

type HospitalCardProps = Pick<HospitalFromAPI, "name" | "address" | "coordinates" | "city" | "coordinates">;

export const HospitalCard: FC<HospitalCardProps> = ({
  ...hospital
}) => {

  const [ latitude, longitude ] = hospital.coordinates.split(",");

  const coordinates = useMemo(() => ({
    latitude: parseFloat(latitude),
    longitude: parseFloat(longitude),
  }), [hospital]);

  const [ LATITUDE_DELTA, LONGITUDE_DELTA ] = useMemo(() => {
    const LATITUDE_DELTA = 0.1;
    const LONGITUDE_DELTA = LATITUDE_DELTA * (width / height);
    return [ LATITUDE_DELTA, LONGITUDE_DELTA ];
  }, [hospital]);

  const openMaps = useCallback(() => {
    const coordinatesString = `${coordinates.latitude},${coordinates.longitude}`;
    const scheme = Platform.select({ ios: "maps://0,0?q=", android: "geo:0,0?q=" });
    const label = "BLOD: " + hospital.name;
    const url = Platform.select({
      ios: `${scheme}${label}@${coordinatesString}`,
      android: `${scheme}${coordinatesString}(${label})`
    });

    Linking.openURL(url ?? "");
  }, [hospital]);

  const showHospitalDonationRequests = () => {
    return;
  };


  return <View style={styles.cardContainer}>
    <BText color="black" bold style={{ marginBottom: 8 }}>{hospital.name}</BText>
    <BText color="black">{hospital.address}</BText>
    <MapView
      style={styles.map}
      showsUserLocation
      loadingEnabled
      initialRegion={{
        latitude: coordinates.latitude,
        longitude: coordinates.longitude,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA
      }}
      zoomControlEnabled={false}
      zoomEnabled={false}
      rotateEnabled={false}
      scrollEnabled={false}
      pitchEnabled={false}
      zoomTapEnabled={false}
      toolbarEnabled={false}
      moveOnMarkerPress={false}
      cacheEnabled={true}
    >
      <Marker
        coordinate={coordinates}
        title={hospital.name}
        description="Presentarse de 6 am a 10 am"
      />
    </MapView>
    <BButton
      style={{ marginTop: 16 }}
      title="Mostrar solicitudes de este hospital"
      onPress={showHospitalDonationRequests}
    />
    <BButton
      style={{ marginTop: 16 }}
      title="Abrir mapas"
      onPress={openMaps}
      variant="transparent-primary"
    />
  </View>;
};

const styles = StyleSheet.create({
  cardContainer: {
    padding: 16,
    marginBottom: 16,
    marginHorizontal: 16,
    borderRadius: 8,
    backgroundColor: ColorsEnum.white,
    shadowColor: ColorsEnum.darkGray,
    shadowOffset: {
      width: 4,
      height: 4,
    },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 8,
  },
  map: {
    height: 200,
    width: "100%",
    borderRadius: 8,
    marginTop: 16,
    borderColor: ColorsEnum.primary,
    borderWidth: 2,
  }
});