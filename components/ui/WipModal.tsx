import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from './dialog';
import { useWip } from './WipContext';
import { trackModalOpen, trackModalClose } from '../../lib/analytics';

const WipModal: React.FC = () => {
  const { state, closeWip } = useWip();

  React.useEffect(() => {
    if (state.open) {
      trackModalOpen('wip');
    }
  }, [state.open]);

  const handleClose = () => {
    trackModalClose('wip');
    closeWip();
  };

  return (
    <Dialog open={state.open} onOpenChange={handleClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Work in Progress</DialogTitle>
          <DialogDescription>
            {state.message || 'This feature is currently under development. Check back soon!'}
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default WipModal;