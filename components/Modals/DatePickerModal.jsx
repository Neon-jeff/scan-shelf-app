import { View, Text, Modal } from "react-native";
import React from "react";
import DatePicker, { getFormatedDate } from "react-native-modern-datepicker";
import { Colors } from "../../constants/Colors";
import { CloseSquare } from "iconsax-react-native";

const DatePickerModal = ({
  setDate,
  setShowdatePicker,
  setCurrentAddedBook,
}) => {
  return (
    <View
      style={{
        position: "absolute",
        top: 0,
        right: 0,
        left: 0,
        bottom: 0,
        backgroundColor: "rgba(0,0,0,.4)",
        zIndex: 10,
        justifyContent: "center",

        padding: 30,
      }}
    >
      <View style={{ borderRadius: 10, backgroundColor: "white", padding: 10 }}>
        <DatePicker
          mode="calender"
          options={{
            mainColor: Colors.primary,
          }}
          style={{ borderRadius: 10 }}
          onSelectedChange={(date) => {
            setDate(date);
            setCurrentAddedBook((prev) => {
              return { ...prev, published_year: date };
            });
            setShowdatePicker(false);
          }}
          minimumDate="1600-01-11"
        />
      </View>
    </View>
  );
};

export default DatePickerModal;
