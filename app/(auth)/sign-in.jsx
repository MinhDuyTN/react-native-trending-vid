import { View, Text, SafeAreaView, ScrollView, Image } from "react-native";
import { images } from "../../constants";

const SignIn = () => {
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View className="flex-1 items-center justify-center h-full w-full">
          <Image
            source={images.logo}
            resizeMode="contain"
            className="h-[35px] w-[115px]"
          />
          <Text className="text-2xl text-white mt-10 font-psemibold">
            Log in to Aora
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;
