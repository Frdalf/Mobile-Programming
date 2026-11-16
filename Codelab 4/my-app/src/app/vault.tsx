import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import SecureVaultDemo from '@/asset/SecureVaultDemo';

export default function VaultScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <SecureVaultDemo />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#000', padding: 16, justifyContent: 'center' },
});
