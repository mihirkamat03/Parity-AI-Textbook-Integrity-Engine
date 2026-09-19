import { useVerification } from '../context/useVerification';

/**
 * Custom hook providing access to verification state, active discrepancies,
 * pipeline triggers, and reviewer actions.
 */
export function useVerificationData() {
  return useVerification();
}
