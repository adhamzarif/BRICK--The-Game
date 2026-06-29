import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden px-6 lg:px-12">

      {/* Background Glow */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-red-600/20 blur-[180px]" />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 lg:grid-cols-2 items-center gap-16">

        {/* LEFT */}
        <motion.div
          initial={{ x: -80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-red-500/30 bg-red-500/10 px-4 py-2 mb-8">
            <span className="h-2 w-2 rounded-full bg-red-500 animate-pulse" />
            <span className="text-xs tracking-[4px] text-red-300 uppercase">
              Only 7 Bricks Left
            </span>
          </div>

          {/* Heading */}
          <h1 className="font-black leading-none text-5xl md:text-6xl xl:text-8xl">
            THE BRICK
            <br />
            THEY TOLD
            <br />
            YOU NOT
            <br />
            TO WANT.
          </h1>

          {/* Description */}
          <p className="mt-8 max-w-lg text-gray-400 text-lg leading-8">
            Crafted by nature.
            <br />
            Perfected through centuries.
            <br />
            More than a brick —
            <span className="font-semibold text-white">
              {" "}it's a statement.
            </span>
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-wrap gap-4">
            <button className="rounded-full bg-gradient-to-r from-red-600 to-red-500 px-8 py-4 font-bold hover:scale-105 transition">
              Own the Legend
            </button>

            <button className="rounded-full border border-white/20 px-8 py-4 hover:bg-white/10 transition">
              View Craftsmanship →
            </button>
          </div>

          {/* Stats */}
          <div className="mt-12 flex flex-wrap gap-8">

            <div>
              <h3 className="text-3xl font-bold text-red-400">
                999+
              </h3>
              <p className="text-sm text-gray-500">
                Luxury Owners
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-red-400">
                100%
              </h3>
              <p className="text-sm text-gray-500">
                Earth Certified
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-red-400">
                ∞
              </h3>
              <p className="text-sm text-gray-500">
                Lifetime Durability
              </p>
            </div>

          </div>
        </motion.div>

        {/* RIGHT */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{
            scale: 1,
            opacity: 1,
            rotate: [-5, 5, -5],
            y: [-15, 15, -15],
          }}
          transition={{
            repeat: Infinity,
            duration: 6,
            ease: "easeInOut",
          }}
          className="flex justify-center"
        >
          <div
            className="
            relative
            w-[320px]
            h-[180px]
            md:w-[420px]
            md:h-[230px]
            rounded-xl
            overflow-hidden
            bg-gradient-to-br
            from-red-500
            via-red-700
            to-red-900
            shadow-[0_0_120px_rgba(255,0,0,.45)]
            "
          >
            {/* Shine */}
            <div className="absolute inset-0">
              <div className="absolute -left-16 h-full w-12 rotate-12 bg-white/10 blur-lg animate-pulse" />
            </div>

            {/* Brick Pattern */}
            <div className="absolute left-1/3 top-0 h-full w-[2px] bg-red-300/20" />
            <div className="absolute left-2/3 top-0 h-full w-[2px] bg-red-300/20" />
            <div className="absolute top-1/2 left-0 h-[2px] w-full bg-red-300/20" />
          </div>
        </motion.div>

      </div>

    </section>
  );
}