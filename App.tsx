import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import { TranslateScreen } from "./screens/TranslateScreen";

export default function App() {
  return (
    <>
      <SafeAreaView>
        <TranslateScreen />
      </SafeAreaView>
      <StatusBar backgroundColor="#0D091F" style="auto" translucent animated/>
    </>
  );
}
