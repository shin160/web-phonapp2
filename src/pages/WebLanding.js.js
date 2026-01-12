import React from "react";
import { View, Text, Pressable, StyleSheet, Linking, Platform } from "react-native";

const APP_URL = "https://shin160.github.io/web-phonapp2/"; // PagesのURL

export default function WebLanding() {
  return (
    <View style={styles.wrap}>
      <Text style={styles.title}>スマホで開いてください</Text>

      <Text style={styles.desc}>
        このページはPCブラウザ用の案内です。{Platform.OS !== "web" ? "（※通常は出ません）" : ""}
      </Text>

      <Pressable style={styles.btn} onPress={() => Linking.openURL(APP_URL)}>
        <Text style={styles.btnText}>スマホで開く（リンク）</Text>
      </Pressable>

      <Text style={styles.small}>URL: {APP_URL}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: { flex: 1, alignItems: "center", justifyContent: "center", padding: 24 },
  title: { fontSize: 22, fontWeight: "700", marginBottom: 12 },
  desc: { fontSize: 14, opacity: 0.8, textAlign: "center", marginBottom: 16 },
  btn: { paddingVertical: 12, paddingHorizontal: 16, borderWidth: 1, borderRadius: 10 },
  btnText: { fontSize: 16, fontWeight: "600" },
  small: { marginTop: 16, fontSize: 12, opacity: 0.7 },
});
