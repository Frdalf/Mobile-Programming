import { router } from 'expo-router';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { useAuth } from '@/context/AuthContext';

// Dev Hub sementara untuk navigasi antar codelab.
const ROUTES = ['/vault', '/cloud-health', '/login'] as const;

export default function DevHub() {
  const { signOut } = useAuth();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>DEV HUB</Text>
      {ROUTES.map((route) => (
        <Pressable key={route} style={styles.button} onPress={() => router.push(route as any)}>
          <Text style={styles.buttonText}>{route}</Text>
        </Pressable>
      ))}
      <Pressable style={[styles.button, styles.signOut]} onPress={signOut}>
        <Text style={[styles.buttonText, styles.signOutText]}>Sign Out</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#000', justifyContent: 'center', padding: 24, gap: 12 },
  title: { color: '#fff', fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginBottom: 12 },
  button: { backgroundColor: '#222', borderColor: '#444', borderWidth: 1, padding: 14, borderRadius: 8 },
  buttonText: { color: '#0f0', textAlign: 'center', fontSize: 16 },
  signOut: { borderColor: '#a33', marginTop: 12 },
  signOutText: { color: '#f55' },
});
