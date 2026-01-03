import React from "react";
import { View, StyleSheet, Pressable, Text } from "react-native";

type Props = {
  children: React.ReactNode;
};

export default function ResponsiveFrame({ children }: Props) {
  const [mobile, setMobile] = React.useState(false);

  return (
    <View style={styles.page}>
      {/* Toggle */}
      <View style={styles.topBar}>
        <Pressable
          onPress={() => setMobile((v) => !v)}
          style={({ pressed }) => [
            styles.btn,
            pressed && { opacity: 0.8 },
            mobile ? styles.btnOn : styles.btnOff,
          ]}
        >
          <Text style={styles.btnText}>{mobile ? "スマホ表示：ON" : "スマホ表示：OFF"}</Text>
        </Pressable>
      </View>

      {/* Frame */}
      <View style={styles.center}>
        <View style={[styles.frame, mobile ? styles.frameMobile : styles.framePC]}>
          {children}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  page: { flex: 1 },
  topBar: {
    paddingHorizontal: 12,
    paddingTop: 10,
    paddingBottom: 10,
    alignItems: "flex-end",
  },
  btn: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 10,
    borderWidth: 1,
  },
  btnOn: { backgroundColor: "#111827", borderColor: "#111827" },
  btnOff: { backgroundColor: "#ffffff", borderColor: "#d1d5db" },
  btnText: { color: "#ffffff", fontWeight: "700" },

  center: {
    flex: 1,
    alignItems: "center",
  },
  frame: {
    flex: 1,
    width: "100%",
  },
  framePC: {
    maxWidth: 1200,
  },
  frameMobile: {
    maxWidth: 420, // ← 好きな幅に調整（390/414/428など）
    borderWidth: 1,
    borderColor: "#e5e7eb",
    borderRadius: 16,
    overflow: "hidden",
  },
});
