import React from "react";
import { View, TouchableOpacity } from "react-native";
import { Star1 } from "iconsax-react-native";
import { Colors } from "../../constants/Colors";

const StarRating = ({ rating, onPress }) => (
  <View style={styles.stars}>
    {[...Array(5)].map((_, index) => (
      <TouchableOpacity key={index} onPress={() => onPress(index)}>
        <Star1
          size="24"
          color={index < rating ? Colors.primary : "#776d6a"}
          variant={index < rating ? "Bold" : "Outline"}
        />
      </TouchableOpacity>
    ))}
  </View>
);

const styles = {
  stars: {
    flexDirection: "row",
    gap: 8,
  },
};

export default StarRating;
