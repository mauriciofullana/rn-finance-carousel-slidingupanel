import React, { useRef, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { MaterialIcons } from "@expo/vector-icons";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Animated,
  FlatList,
} from "react-native";

import SlidingUpPanel from "rn-sliding-up-panel";
import Carousel from "react-native-snap-carousel";

export default function App() {
  // User data
  const Users = [
    {
      key: "1",
      userImage:
        "https://images.pexels.com/photos/712513/pexels-photo-712513.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      userName: "Jessica",
      transactionDate: "25 April 20",
      amount: "$350",
      credit: true,
    },
    {
      key: "2",
      userImage:
        "https://images.pexels.com/photos/2049905/pexels-photo-2049905.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      userName: "Ana",
      transactionDate: "25 April 20",
      amount: "$350",
      credit: true,
    },
    {
      key: "3",
      userImage:
        "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      userName: "Carlos",
      transactionDate: "25 April 20",
      amount: "$350",
      credit: false,
    },
    {
      key: "4",
      userImage:
        "https://images.pexels.com/photos/1408196/pexels-photo-1408196.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      userName: "Andres",
      transactionDate: "25 April 20",
      amount: "$350",
      credit: true,
    },
    {
      key: "5",
      userImage:
        "https://images.pexels.com/photos/1024311/pexels-photo-1024311.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      userName: "Fabiana",
      transactionDate: "25 April 20",
      amount: "$350",
      credit: false,
    },
    {
      key: "6",
      userImage:
        "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      userName: "Carlos",
      transactionDate: "25 April 20",
      amount: "$350",
      credit: false,
    },
    {
      key: "7",
      userImage:
        "https://images.pexels.com/photos/1408196/pexels-photo-1408196.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      userName: "Andres",
      transactionDate: "25 April 20",
      amount: "$350",
      credit: true,
    },
    {
      key: "8",
      userImage:
        "https://images.pexels.com/photos/1024311/pexels-photo-1024311.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      userName: "Fabiana",
      transactionDate: "25 April 20",
      amount: "$350",
      credit: false,
    },
  ];

  // Carousel data
  const Images = [
    {
      image: require("./assets/card1.png"),
    },
    {
      image: require("./assets/card2.png"),
    },
    {
      image: require("./assets/card3.png"),
    },
    {
      image: require("./assets/card4.png"),
    },
  ];

  const { width, height } = Dimensions.get("window");
  const carouselRef = useRef(null);

  const RenderItem = ({ item }: any) => {
    return (
      <TouchableWithoutFeedback>
        <Image
          source={item.image}
          style={{
            width: width - 40,
            height: undefined,
            aspectRatio: 548 / 346,
            borderRadius: 10,
          }}
        />
      </TouchableWithoutFeedback>
    );
  };

  // SLIDING PANEL
  const [dragRange, setDragRange] = useState({
    top: height - 80,
    bottom: 180,
  });

  const ModalRef = useRef(null);

  const _draggedValue = new Animated.Value(180);

  return (
    <View style={styles.container}>
      <View style={{ paddingTop: 50, paddingHorizontal: 14 }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <View>
            <Text style={{ fontSize: 20, color: "#fff" }}>Welcome Back,</Text>
            <Text style={{ fontSize: 20, color: "#fff", opacity: 0.6 }}>
              Mauricio Fullana
            </Text>
          </View>
          <View>
            <Image
              style={styles.ProfileImage}
              source={{
                uri:
                  "https://media-exp1.licdn.com/dms/image/C4D03AQHrjXNsi9-ZaA/profile-displayphoto-shrink_400_400/0?e=1603929600&v=beta&t=YV-jdEO3AV7NnH-fWTx_T9XjgEmOqNxORuYpbuS7_yM",
              }}
            />
            <View style={styles.ProfileImageNotification}></View>
          </View>
        </View>

        <View>
          <Carousel
            layout={"tinder"}
            ref={carouselRef}
            data={Images}
            sliderWidth={360}
            itemWidth={width - 10}
            renderItem={RenderItem}
            layoutCardOffset={-12}
            inactiveSlideOpacity={0.4}
            containerCustomStyle={{
              overflow: "visible",
              marginVertical: 20,
            }}
            contentContainerCustomStyle={{
              paddingTop: 14,
            }}
          />
        </View>

        <View>
          <Text style={{ color: "#fff", opacity: 0.5, marginBottom: 10 }}>
            Send Money
          </Text>
          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity style={styles.AddUser}>
              <View style={styles.AddUserIcon}>
                <MaterialIcons name="add" color="white" size={28} style={{}} />
              </View>
              <Text style={{ color: "#fff" }}>Add Users</Text>
            </TouchableOpacity>
            <FlatList
              inverted
              horizontal={true}
              data={Users}
              renderItem={({ item }) => {
                return (
                  <View style={styles.AddUser}>
                    <Image
                      style={styles.AddUserIcon}
                      source={{ uri: item.userImage }}
                    />
                    <Text style={{ color: "#fff" }}>{item.userName}</Text>
                  </View>
                );
              }}
            />
          </View>
        </View>
      </View>

      <View style={{ flex: 1 }}>
        <SlidingUpPanel
          ref={ModalRef}
          draggableRange={dragRange}
          animatedValue={_draggedValue}
          backdropOpacity={0}
          snappingPoints={[360]}
          height={height + 20}
          friction={0.9}
        >
          <View
            style={{
              flex: 1,
              backgroundColor: "#0c0c0c",
              borderRadius: 24,
              padding: 14,
            }}
          >
            <View style={styles.PanelHandle}></View>
            <View>
              <Text style={{ marginVertical: 16, color: "#fff" }}>
                Recent Transactions
              </Text>
              <View style={{ height: 700, paddingBottom: 10 }}>
                <FlatList
                  data={Users}
                  keyExtractor={(item) => item.key}
                  renderItem={({ item }) => {
                    return (
                      <View style={styles.PanelItemContainer}>
                        <View
                          style={{ flexDirection: "row", alignItems: "center" }}
                        >
                          <View style={{ marginRight: 10 }}>
                            <Image
                              source={{ uri: item.userImage }}
                              style={styles.PanelImage}
                            />
                          </View>
                          <View>
                            <Text style={{ fontSize: 14, color: "#fff" }}>
                              {item.userName}
                            </Text>
                            <Text
                              style={{
                                fontSize: 10,
                                color: "#fff",
                                opacity: 0.6,
                              }}
                            >
                              {item.transactionDate}
                            </Text>
                          </View>
                        </View>
                        <View
                          style={{ flexDirection: "row", alignItems: "center" }}
                        >
                          <Text
                            style={{
                              fontSize: 16,
                              color: "#fff",
                              marginHorizontal: 2,
                            }}
                          >
                            {item.amount}
                          </Text>
                          {item.credit ? (
                            <MaterialIcons
                              name="arrow-drop-up"
                              size={22}
                              color="green"
                            />
                          ) : (
                            <MaterialIcons
                              name="arrow-drop-down"
                              size={22}
                              color="#ff3838"
                            />
                          )}
                        </View>
                      </View>
                    );
                  }}
                />
              </View>
            </View>
          </View>
        </SlidingUpPanel>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#030303",
    paddingTop: 0,
  },
  ProfileImage: {
    width: 55,
    height: 55,
    borderRadius: 40,
  },
  ProfileImageNotification: {
    height: 12,
    width: 12,
    backgroundColor: "#4853ef",
    borderRadius: 6,
    position: "absolute",
    right: 6,
    borderWidth: 2,
    borderColor: "#000",
  },
  AddUser: {
    height: 140,
    width: 100,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1a1a1a",
    borderRadius: 10,
    marginRight: 14,
  },
  AddUserIcon: {
    width: 70,
    height: 70,
    backgroundColor: "#000",
    borderRadius: 10,
    marginBottom: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  PanelHandle: {
    height: 5,
    width: 50,
    backgroundColor: "#666",
    borderRadius: 6,
    alignSelf: "center",
    marginTop: 6,
  },
  PanelItemContainer: {
    borderWidth: 0.6,
    borderColor: "#666",
    padding: 14,
    borderRadius: 6,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  PanelImage: {
    width: 30,
    height: 30,
    backgroundColor: "#000",
    borderRadius: 40,
  },
});
