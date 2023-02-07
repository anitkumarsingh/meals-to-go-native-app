import React from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import RestuarantScreen from "./src/components/features/restuarants/screens/Restuarant.screen";

const App = () => {
  return (
    <>
      <RestuarantScreen />
      <ExpoStatusBar style="auto" />
    </>
  );
};

export default App;
