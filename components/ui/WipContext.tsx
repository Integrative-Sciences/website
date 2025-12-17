import React, { createContext, useCallback, useContext, useState } from 'react';

type WipState = {
  open: boolean;
  message?: string;
};

type WipContextValue = {
  openWip: (message?: string) => void;
  closeWip: () => void;
  state: WipState;
};

const WipContext = createContext<WipContextValue | undefined>(undefined);

export const WipProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, setState] = useState<WipState>({ open: false, message: undefined });

  const openWip = useCallback((message?: string) => {
    setState({ open: true, message });
  }, []);

  const closeWip = useCallback(() => {
    setState({ open: false, message: undefined });
  }, []);

  return (
    <WipContext.Provider value={{ openWip, closeWip, state }}>
      {children}
    </WipContext.Provider>
  );
};

export const useWip = () => {
  const ctx = useContext(WipContext);
  if (!ctx) throw new Error('useWip must be used within a WipProvider');
  return ctx;
};