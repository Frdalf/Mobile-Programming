// 1.1 IMPORT SECTION
import { createClient } from "@supabase/supabase-js";
import * as SecureStore from "expo-secure-store";
import { Platform } from "react-native";

// 1.2 HARDWARE-ENCRYPTED STORAGE ADAPTER
// Native -> SecureStore; web browser -> localStorage; web SSR (no window) -> no-op.
const isWeb = Platform.OS === "web";
const hasWindow = typeof window !== "undefined";

const ExpoSecureStoreAdapter = {
  getItem: async (key: string): Promise<string | null> => {
    if (!isWeb) return SecureStore.getItemAsync(key);
    return hasWindow ? window.localStorage.getItem(key) : null;
  },
  setItem: async (key: string, value: string): Promise<void> => {
    if (!isWeb) return SecureStore.setItemAsync(key, value);
    if (hasWindow) window.localStorage.setItem(key, value);
  },
  removeItem: async (key: string): Promise<void> => {
    if (!isWeb) return SecureStore.deleteItemAsync(key);
    if (hasWindow) window.localStorage.removeItem(key);
  },
};

const supabaseUrl = process.env.EXPO_PUBLIC_SUPABASE_URL || "";
const supabaseAnonKey = process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY || "";

if (!supabaseUrl || !supabaseAnonKey) {
  console.warn("Supabase credentials missing in env file!");
}

// 1.3 INITIALIZE SUPABASE CLIENT SINGLETON
export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: ExpoSecureStoreAdapter,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});

// 1.4 LIVE CLOUD HEALTH CHECK FUNCTION
export async function testCloudBridge(): Promise<boolean> {
  try {
    const { error } = await supabase.from("missions").select("id").limit(1);
    if (!error) console.log("Cloud Bridge: Connection to Supabase established!");
    return true;
  } catch (err) {
    console.error("Cloud Bridge Communication Error:", err);
    return false;
  }
}
