import {
  Animated,
  PanResponder,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useRef } from "react";
import { Edit2, Trash } from "iconsax-react-native";

const ListItem = ({ item, onDelete, onEdit }) => {
  const translateX = useRef(new Animated.Value(0)).current;
  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: (_, gestureState) => {
        if (gestureState.dx < 0) {
          translateX.setValue(gestureState.dx);
        }
      },
      onPanResponderRelease: (_, gestureState) => {
        if (gestureState.dx < -50) {
          Animated.spring(translateX, {
            toValue: -100,
            useNativeDriver: true,
          }).start();
        } else {
          Animated.spring(translateX, {
            toValue: 0,
            useNativeDriver: true,
          }).start();
        }
      },
    })
  ).current;
  return (
    <View style={styles.itemContainer}>
      <Animated.View
        style={{
          flex: 1,
          transform: [{ translateX: translateX }],
        }}
      >
        <View style={styles.category} {...panResponder.panHandlers}>
          <Text style={styles.categoryText}>{item.name}</Text>
        </View>

        <View style={styles.updatedDeleteContainer}>
          <View style={styles.rowGap}>
            <TouchableOpacity onPress={onEdit}>
              <Edit2 size="24" color="#120903" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => onDelete(item.id)}>
              <Trash size="24" color="#120903" />
            </TouchableOpacity>
          </View>
        </View>
      </Animated.View>
    </View>
  );
};

export default ListItem;

const styles = StyleSheet.create({
  itemContainer: {},
  category: {
    height: 48,
    justifyContent: "center",
    marginBottom: 16,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#D9D5D4",
    paddingLeft: 16,
    marginHorizontal: 20,
  },
  categoryText: {
    fontSize: 16,
    fontFamily: "medium",
  },
  updatedDeleteContainer: {
    width: 100,
    height: 48,

    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    right: -100,
  },
  deleteButtonText: {
    color: "white",
    fontWeight: "bold",
  },
  rowGap: {
    flexDirection: "row",
    gap: 24,
  },
});
