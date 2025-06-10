import { AnimatePresence } from "framer-motion";

export default function Modal({ isOpen, onClose, children }) {
  return <AnimatePresence mode="wait">{isOpen && children}</AnimatePresence>;
}
