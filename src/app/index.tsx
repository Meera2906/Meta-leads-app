import * as Device from 'expo-device';
import { FlatList, Platform, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { AnimatedIcon } from '@/components/animated-icon';
import { HintRow } from '@/components/hint-row';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { WebBadge } from '@/components/web-badge';
import { BottomTabInset, MaxContentWidth, Spacing } from '@/constants/theme';

import { useEffect, useState } from 'react';

function getDevMenuHint() {
  if (Platform.OS === 'web') {
    return <ThemedText type="small">use browser devtools</ThemedText>;
  }
  if (Device.isDevice) {
    return (
      <ThemedText type="small">
        shake device or press <ThemedText type="code">m</ThemedText> in terminal
      </ThemedText>
    );
  }
  const shortcut = Platform.OS === 'android' ? 'cmd+m (or ctrl+m)' : 'cmd+d';
  return (
    <ThemedText type="small">
      press <ThemedText type="code">{shortcut}</ThemedText>
    </ThemedText>
  );
}

// creating a Typscript alias type
type Lead ={
  id: string;
  full_name: string;
  email_id: string;
  phone_no: string;
  createdAt:string;
}

// creating a sample lead object
const sampleLeads : Lead[] =[
  {
    id: '000001',
    full_name: 'Test1',
    email_id: 'test1@meta.com',
    phone_no: '1234512340',
    createdAt: '2026-11-22',
  },
  {
    id: '000002',
    full_name: 'Test2',
    email_id: 'test2@meta.com',
    phone_no: '1234512341',
    createdAt: '2026-11-22',
  }
]
export default function HomeScreen() {
  const [metaLeads, setLeads] = useState<Lead[]>(sampleLeads);

  return (
    <ThemedView style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <ThemedView style={styles.heroSection}>
          <AnimatedIcon />
          <ThemedText type="title" style={styles.title}>
            Meta Leads Dashboard
          </ThemedText>
          <ThemedText style={styles.sectionHeading}>
            Leads
          </ThemedText>
        </ThemedView>

        <FlatList
            style = {{width:"100%",flex:1}}

            data={metaLeads}
            keyExtractor={(item)=>item.id}
            renderItem={({item})=>(
              <View style={styles.leadcards}>
                <ThemedText style={styles.leadname}>{item.full_name}</ThemedText>
                <ThemedText>{item.email_id}</ThemedText>
                <ThemedText>{item.phone_no}</ThemedText>
                <ThemedText>{item.createdAt}</ThemedText>
              </View>
            )}
          />

        {Platform.OS === 'web' && <WebBadge />}
      </SafeAreaView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
  },
  safeArea: {
    flex: 1,
    paddingHorizontal: Spacing.four,
    alignItems: 'center',
    gap: Spacing.three,
    paddingBottom: BottomTabInset + Spacing.three,
    maxWidth: MaxContentWidth,
  },
  heroSection: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    paddingHorizontal: Spacing.four,
    gap: Spacing.four,
  },
  title: {
    textAlign: 'center',
  },
  code: {
    textTransform: 'uppercase',
  },
  stepContainer: {
    gap: Spacing.three,
    alignSelf: 'stretch',
    paddingHorizontal: Spacing.three,
    paddingVertical: Spacing.four,
    borderRadius: Spacing.four,
  },
  sectionHeading: {
    alignSelf: 'stretch',
    textAlign: 'left',
    fontWeight: 'bold',
    fontSize: 25,
  },
  leadcards: {
    padding:16,
    marginBottom:12,
    borderRadius:12,
    backgroundColor: "#4d4c4c",
  },
  leadname: {
    fontWeight: 'bold',
    fontSize: 22,
  }
});
