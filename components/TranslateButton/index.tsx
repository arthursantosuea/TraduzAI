// import { useState } from "react";
import { Text, TouchableOpacity } from "react-native";
import { Loader2Icon } from "lucide-react-native";
import { MotiView } from "moti";

interface TranslateButtonProps {
  onPress: () => void;
  isLoading: boolean;
}

export function TranslateButton({ onPress, isLoading }: TranslateButtonProps) {
  return (
    <TouchableOpacity
      className={`w-[90%] h-12 mt-8 rounded-lg items-center justify-center ${
        isLoading ? "bg-[#7939AC]" : "bg-[#9548D1]"
      }`}
      onPress={onPress}
    >
      {isLoading ? (
        <MotiView from={{rotate: "0deg"}} animate={{rotate: "360deg"}} transition={{loop: true, repeatReverse: false, duration: 1000, type: "timing"}}>
            <Loader2Icon size={20} color="white" />
        </MotiView>
      ) : (
        <Text className="font-bold text-lg text-white">Traduzir</Text>
      )}
    </TouchableOpacity>
  );
}
