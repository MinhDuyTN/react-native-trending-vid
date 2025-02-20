import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

interface CustomerButtonProps {
  title?: string;
  handlePress?: () => void;
  containerStyle?: string;
  textStyles?: string;
  isLoading?: boolean;
}

const CustomerButton: React.FC<CustomerButtonProps> = ({
  title,
  handlePress,
  containerStyle,
  textStyles,
  isLoading,
}) => {
  return (
    <TouchableOpacity
      onPress={handlePress}
      className={`bg-secondary-200 rounded-xl justify-center items-center ${containerStyle} 
      ${isLoading ? "opacity-50" : ""}`}
      disabled={isLoading}
    >
      <Text className={`text-primary font-psemibold text-lg ${textStyles}`}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomerButton;
