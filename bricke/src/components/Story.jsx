import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
export default function Story({ openGame }) {
  return (
    <>
      {/* Section 1 */}
      <section className="min-h-screen flex items-center justify-center px-10">
        <motion.div
          initial={{ opacity: 0, y: 120 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="max-w-5xl text-center"
        >
          <p className="uppercase tracking-[8px] text-red-400 mb-5">
            Timeless
          </p>

          <h2 className="text-7xl lg:text-8xl font-black mb-12">
            More Than
            <br />
            Just Clay.
          </h2>

          <p className="text-2xl text-gray-400 leading-10">
            Every BRICKÉ brick carries millions of years of history.
            <br />
            <br />
            No batteries.
            <br />
            No software updates.
            <br />
            No subscriptions.
            <br />
            <br />
            Just perfection.
          </p>
        </motion.div>
      </section>

      {/* Section 2 */}
      <section className="min-h-screen flex items-center justify-center">
        <motion.div
          initial={{ scale: 0.7, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-8xl font-black text-red-500">0%</h2>

          <p className="text-4xl mt-6">
            Charging Required
          </p>
        </motion.div>
      </section>

      {/* Section 3 */}
      <section className="min-h-screen flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-7xl font-black mb-10">
            Built To
            <br />
            Outlive You.
          </h2>

          <p className="text-gray-400 text-2xl">
            A luxury item with infinite battery life,
            zero maintenance,
            and legendary durability.
          </p>
        </motion.div>
      </section>

      {/* Section 4 - Game */}
      <section className="min-h-screen flex flex-col items-center justify-center text-center px-6">
        <motion.h2
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-6xl font-black mb-6"
        >
          Ready To
          <br />
          Prove Yourself?
        </motion.h2>

        <p className="text-xl text-gray-400 mb-10 max-w-xl">
          Catch luxury bricks, avoid bomb bricks, and become the ultimate
          BRICKÉ Collector.
        </p>

        <div className="flex flex-col items-center">

  <button
    onClick={openGame}
    className="
      px-12
      py-5
      rounded-full
      bg-gradient-to-r
      from-red-600
      to-red-500
      text-2xl
      font-bold
      hover:scale-110
      hover:shadow-[0_0_40px_rgba(255,0,0,.7)]
      transition-all
      duration-300
    "
  >
    🎮 Enter The Brick Vault
  </button>

  {/* Space between button and creator */}
  <div className="mt-8 flex items-center justify-center gap-3 text-gray-400">
    <span className="text-lg">
      Created by{" "}
      <span className="font-semibold text-white">
        Adham Zarif
      </span>
    </span>

    <a
      href="https://github.com/adhamzarif"
      target="_blank"
      rel="noopener noreferrer"
      className="
        text-2xl
        hover:text-white
        hover:scale-125
        transition-all
        duration-300
      "
      aria-label="GitHub Profile"
    >
      <FaGithub />
    </a>
  </div>

</div>
      </section>
    </>
  );
}