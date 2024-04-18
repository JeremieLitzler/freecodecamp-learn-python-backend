import CredentialsData from '@/types/CredentialsData';
import { computed, ref } from 'vue';

const LOGGED_IN_KEY = 'loggedIn';
const state = ref(localStorage.getItem(LOGGED_IN_KEY) || false);
export function useAuth() {
  const isLoggedIn = computed(() => state.value);

  const authenticate = (credentials: CredentialsData | null) => {
    if (credentials) {
      localStorage.setItem(LOGGED_IN_KEY, JSON.stringify(credentials));
      state.value = true;
    } else {
      localStorage.removeItem(LOGGED_IN_KEY);
      state.value = false;
    }
  };

  return {
    isLoggedIn,
    authenticate,
  };
}
