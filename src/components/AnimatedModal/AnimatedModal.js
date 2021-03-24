import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./AnimatedModal.css";

function AnimatedModal(props) {
  const overlayVariants = {
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        duration: 0.3,
        delayChildren: 0.4,
      },
    },
    hidden: {
      opacity: 0,
      transition: {
        when: "afterChildren",
        duration: 0.3,
        delay: 0.4,
      },
    },
  };
  return (
    <AnimatePresence>
      {props.isModalOpen && (
        <motion.div
          initial='hidden'
          animate='visible'
          exit='hidden'
          variants={overlayVariants}
          className='modal-overlay'
        >
          <motion.div
            className='modal'
            initial={{ y: "100vh" }}
            animate={{ y: 0 }}
            exit={{ y: "100vh" }}
            transition={{ duration: 0.5 }}
          >
            {props.children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default AnimatedModal;
