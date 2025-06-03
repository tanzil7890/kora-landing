'use client';

import { motion, AnimatePresence } from "framer-motion";

interface JoinWaitlistDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

export function JoinWaitlistDialog({ isOpen, onClose }: JoinWaitlistDialogProps) {
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
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="fixed left-[380px] top-[5%] -translate-x-[50%] -translate-y-[50%] w-[95%] max-w-[1000px] h-[90vh] bg-white rounded-2xl shadow-xl z-[1000] overflow-hidden"
          >
            {/* Header with title and close button */}
            <div className="absolute top-0 left-0 right-0 h-16 bg-white border-b border-gray-100 flex items-center justify-between px-6 z-10">
              <h2 className="text-lg font-medium text-gray-900">Let us know!</h2>
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

            {/* Calendar iframe */}
            <div className="w-full h-full pt-16">
              <iframe
                src="https://dhkxxavs92m.typeform.com/to/IUK9R3KF"
                className="w-full h-full"
                frameBorder="0"
              />
            </div>

            {/* Additional close button at bottom */}
            <div className="absolute bottom-6 right-6">
              <button
                onClick={onClose}
                className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-colors flex items-center gap-2"
              >
                <span>Close</span>
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M6 18L18 6M6 6l12 12" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}