import { useEvent } from "expo";
import { SkeletonPlaceholder } from "expo-skeleton-placeholder";
import { SafeAreaView, ScrollView, Text, View } from "react-native";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.container}>
        <Text style={styles.header}>Module API Example</Text>
        <Group name="Views">
          <SkeletonPlaceholder
            width="100%"
            height={20}
            borderRadius={4}
            style={{ marginTop: 10 }}
          />
          <SkeletonPlaceholder
            width="90%"
            height={20}
            borderRadius={4}
            style={{ marginTop: 10 }}
          />
          <SkeletonPlaceholder
            width="85%"
            height={20}
            borderRadius={4}
            style={{ marginTop: 10 }}
          />
        </Group>
      </ScrollView>
    </SafeAreaView>
  );
}

function Group(props: { name: string; children: React.ReactNode }) {
  return (
    <View style={styles.group}>
      <Text style={styles.groupHeader}>{props.name}</Text>
      {props.children}
    </View>
  );
}

const styles = {
  header: {
    fontSize: 30,
    margin: 20,
  },
  groupHeader: {
    fontSize: 20,
    marginBottom: 20,
  },
  group: {
    margin: 20,
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 20,
  },
  container: {
    flex: 1,
    backgroundColor: "#eee",
  },
  view: {
    flex: 1,
    height: 200,
  },
};
