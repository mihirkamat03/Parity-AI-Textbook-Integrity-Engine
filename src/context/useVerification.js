import { useContext } from 'react';
import { VerificationContext } from './VerificationContextInstance';

export function useVerification() {
  const context = useContext(VerificationContext);
  if (!context) {
    throw new Error('useVerification must be used within a VerificationProvider');
  }
  return context;
}
