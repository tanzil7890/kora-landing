'use client';

import { motion, AnimatePresence } from "framer-motion";

interface MobileJoinWaitlistDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileJoinWaitlistDialog({ isOpen, onClose }: MobileJoinWaitlistDialogProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[999]"
          />
          
          {/* Dialog */}
          <motion.div
            initial={{ opacity: 0, y: "100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "100%" }}
            className="fixed bottom-[10px] left-0 right-0 h-[90vh] mx-auto bg-white rounded-t-2xl shadow-xl z-[1000] overflow-hidden"
          >
            {/* Header with title and close button */}
            <div className="sticky top-0 h-14 bg-white border-b border-gray-100 flex items-center justify-between px-4">
              <h2 className="text-base font-medium text-gray-900">Join Waitlist</h2>
              <button
                onClick={onClose}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                aria-label="Close dialog"
              >
                <svg className="w-5 h-5 text-gray-500" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M6 18L18 6M6 6l12 12" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>

            {/* Cal iframe */}
            <div className="w-full h-[calc(100%-3.5rem)]">
              <iframe
                src="https://dhkxxavs92m.typeform.com/to/IUK9R3KF"
                className="w-full h-full"
                frameBorder="0"
              />
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
} 