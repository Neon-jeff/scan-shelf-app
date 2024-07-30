import React from "react";
import {
  View,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Modal,
} from "react-native";
import ThemedText from "../ThemedText/ThemedText";
import { Colors } from "../../constants/Colors";
import StarRating from "../Rating/StarRating";
import Times from "../../assets/icons/Times.svg";

const RatingModal = ({
  modalVisible,
  closeModal,
  selectedBook,
  rating,
  onStarPress,
}) => (
  <Modal
    transparent={true}
    animationType="fade"
    visible={modalVisible}
    onRequestClose={closeModal}
  >
    <TouchableWithoutFeedback onPress={closeModal}>
      <View style={styles.overlay}>
        <TouchableWithoutFeedback>
          <View style={styles.modalContent}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <ThemedText
                text={`${selectedBook.title} (${1985})`}
                size={16}
                extras={{
                  flex: 1,
                }}
                style="semibold"
                align="left"
                numberOfLines={1}
                ellipsizeMode="tail"
              />
              <TouchableOpacity onPress={closeModal}>
                <Times width={15} height={15} />
              </TouchableOpacity>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                marginVertical: 12,
              }}
            >
              <ThemedText
                text={"Rate the book"}
                size={14}
                style="medium"
                align="left"
              />
              <StarRating rating={rating} onPress={onStarPress} />
            </View>
            <View>
              <TouchableOpacity style={styles.sendButton}>
                <ThemedText
                  text={"Send"}
                  size={15}
                  style="medium"
                  color="#fff"
                />
              </TouchableOpacity>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </View>
    </TouchableWithoutFeedback>
  </Modal>
);

const styles = {
  overlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    width: 300,
    padding: 20,
    gap: 18,
    backgroundColor: "#fff",
    borderRadius: 10,
  },
  sendButton: {
    backgroundColor: Colors.primary,
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
  },
};

export default RatingModal;
