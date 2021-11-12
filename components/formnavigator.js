import React, { useRef, useState, useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  Animated,
  SafeAreaView,
  Platform,
  StatusBar,
  Pressable,
  Dimensions
} from "react-native";
var flag = false;
const windowWidth = Dimensions.get('window').width;
function useInterval(callback, delay) {
  const savedCallback = useRef();

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

const FormNavigator = ({ navigation, data , width}) => {
  
  let animation = useRef(new Animated.Value(0));
  const [progress, setProgress] = useState(0);
  useInterval(() => {
    if (progress < 49) {
      setProgress(progress + 5);
    }
    if (progress == 50 && true) {
      setProgress(progress + 1);
      flag = true;
    }
    if (progress > 50 && flag && progress < 100) {
      setProgress(progress + 5);
    }
  }, 1000);

  useEffect(() => {
    Animated.timing(animation.current, {
      toValue: progress,
      duration: 100,
      useNativeDriver: false,
    }).start();
  }, [progress]);

  const progresswidth = animation.current.interpolate({
    inputRange: [0, 100],
    outputRange: ["0%", "100%"],
  });

  const iconprogress = animation.current.interpolate({
    inputRange: [0, 100],
    outputRange: [0, 100],
  });

  return (
    <SafeAreaView style={styles.orderProgressParentContainer}>
      <View style={styles.progressBarMainContainer}>
        <View style={styles.progressBarwrapper}>
          <View style={styles.progressBar}>
            <Animated.View
              style={
                ([StyleSheet.absoluteFill],
                {
                  backgroundColor: "#098D73",
                  width:(windowWidth/100*width),
                  borderRadius: 10,
                })
              }
            />
          </View>
          <View style={styles.iconcontainer}>
            {data.map((d)=>(
              <Pressable onPress={()=>{navigation.navigate(d.navigate)}}>
            <View style={{ alignItems: "center", marginRight:10 }}>
              <View
                style={{
                  height: 36,
                  width: 35,
                  borderRadius: 18,
                  backgroundColor: d.status? "#99CBC1":"#ddd",
                }}
              />
              <Text style={{fontSize:10}}>{d.label}</Text>
            </View>
            </Pressable>
            ))}
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default FormNavigator;

const styles = StyleSheet.create({
  orderProgressParentContainer: {
    backgroundColor: "#ecf0f1",
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    paddingBottom: 20,
    paddingTop:30
  },
  progressBarMainContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  progressBarwrapper: {
    width: windowWidth/100*90
  },
  progressBar: {
    flexDirection: "row",
    height: 5,
    width: windowWidth/100*90,
    backgroundColor: "gray",
    borderRadius: 10,
  },
  iconcontainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: -20,
  },
});
