import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Button,
} from "react-native";

function App1() {
  return <Text>App1 Component</Text>;
}

function App2() {
  return <Text>App2 Component</Text>;
}

function App() {
  const [visibleApp, setVisibleApp] = useState<string>("");

  const renderRelevantApp = () => {
    switch (visibleApp) {
      case "app1":
        return (
          <View style={styles.miniAppWrapper}>
            <React.Suspense fallback={<Text>Loading app1...</Text>}>
              <App1 />
            </React.Suspense>
          </View>
        );
      case "app2":
        return (
          <View style={styles.miniAppWrapper}>
            <React.Suspense fallback={<Text>Loading app2...</Text>}>
              <App2 />
            </React.Suspense>
          </View>
        );
      default:
        return (
          <SafeAreaView>
            <StatusBar />
            <View style={styles.mainContainer}>
              <Button title="App One" onPress={() => setVisibleApp("app1")} />
              <Button title="App Two" onPress={() => setVisibleApp("app2")} />
            </View>
          </SafeAreaView>
        );
    }
  };

  const renderBackToHome = () => {
    if (visibleApp) {
      return (
        <View style={styles.backWrapper}>
          <Button title="<- Back To Home" onPress={() => setVisibleApp("")} />
        </View>
      );
    }
  };

  return (
    <View>
      {renderBackToHome()}
      {renderRelevantApp()}
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    height: "100%",
    justifyContent: "center",
  },
  miniAppWrapper: {
    // flex:1,
  },
  backWrapper: {
    backgroundColor: "#E1F8DC",
    marginTop: 50,
  },
});

export default App;
