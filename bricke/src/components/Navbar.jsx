import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 left-0 right-0 z-50 bg-black/30 backdrop-blur-xl border-b border-white/10"
    >
      <div className="w-full flex items-center justify-between px-12 lg:px-20 py-5">

        <h1 className="text-3xl font-black tracking-[8px] text-red-500 cursor-pointer">
          BRICKÉ
        </h1>

        <button
          className="
            px-7 py-3
            rounded-full
            bg-red-600
            hover:bg-red-500
            hover:scale-105
            transition-all
            duration-300
            shadow-lg
            shadow-red-500/40
            font-semibold
          "
        >
          Buy Now
        </button>

      </div>
    </motion.nav>
  );
}