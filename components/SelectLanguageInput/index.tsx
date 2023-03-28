import { View } from "react-native";
import { useState } from "react";

import SelectDropdown from "react-native-select-dropdown";

import { ChevronDown, ChevronUp } from "lucide-react-native";
import { Poppins_400Regular, useFonts } from "@expo-google-fonts/poppins";

import { popularLanguages } from "../../data/languages";
// import { SelectedLanguages } from "../../screens/TranslateScreen";

interface SelectLanguageInputProps {
  placeholder?: string;
  className?: string;
  onSelectLanguage: (selectedLanguage: string) => void;
}

export function SelectLanguageInput({ placeholder, className, onSelectLanguage }: SelectLanguageInputProps) {
  // const [selectedLanguage, setSelectedLanguage] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
  });
  if (!fontsLoaded) return null;
  return (
    <View className={`${className}`}>
      <SelectDropdown
        data={popularLanguages}
        defaultButtonText={placeholder}
        onSelect={(language, index) => {
          onSelectLanguage(language);
        }}
        onFocus={() => setIsOpen(true)}
        dropdownStyle={{
          borderRadius: 8,
          backgroundColor: "#9548D1",
        }}
        rowStyle={{borderBottomColor: "rgba(217, 217, 217, 0.1)"}}
        onBlur={() => setIsOpen(false)}
        rowTextStyle={{
          color: "#fff",
          fontFamily: "Poppins_400Regular",
          fontSize: 12
        }}
        buttonStyle={{
          borderRadius: 8,
          borderWidth: 1,
          backgroundColor: "rgba(217, 217, 217, 0.1)",
          borderColor: "rgba(255, 255, 255, 0.5)",
          width: "90%",
          height: 48
        }}
        buttonTextStyle={{ color: "white", fontFamily: "Poppins_400Regular", fontSize: 12, textAlign: "left" }}
        renderDropdownIcon={() =>
          !isOpen ? (
            <ChevronDown size={24} strokeWidth={2}  color="#9548D1" />
          ) : (
            <ChevronUp size={24} strokeWidth={2} color="#9548D1" />
          )
        }
        dropdownIconPosition="right"
      />
    </View>
  );
}
