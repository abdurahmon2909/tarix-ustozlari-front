import {
  Moon,
  Bell,
  Globe,
  Shield,
  Crown,
  ChevronRight,
} from "lucide-react";

import { motion } from "framer-motion";

export default function SettingsPage() {
  return (
    <div className="relative pt-6 space-y-6 overflow-hidden min-h-screen">
      {/* GLOWS */}
      <div
        className="
        absolute
        top-0
        left-0
        w-72
        h-72
        rounded-full
        bg-cyan-500/20
        blur-[120px]
      "
      />

      <div
        className="
        absolute
        bottom-0
        right-0
        w-72
        h-72
        rounded-full
        bg-purple-500/20
        blur-[120px]
      "
      />

      {/* HEADER */}
      <motion.div
        initial={{
          opacity: 0,
          y: -20,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        className="
        relative
        z-10
      "
      >
        <p className="text-gray-400">
          Ilova sozlamalari
        </p>

        <h1
          className="
          text-5xl
          font-bold
          mt-2
        "
        >
          Settings ⚙️
        </h1>
      </motion.div>

      {/* PREMIUM */}
      <motion.div
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        className="
        relative
        z-10
        rounded-[32px]
        p-6
        bg-gradient-to-br
        from-yellow-500/20
        to-yellow-700/10
        border
        border-yellow-500/20
        shadow-2xl
        shadow-yellow-500/10
      "
      >
        <div
          className="
          flex
          items-center
          justify-between
        "
        >
          <div>
            <p className="text-yellow-300">
              Premium
            </p>

            <h2
              className="
              text-3xl
              font-bold
              mt-2
            "
            >
              PRO Account
            </h2>
          </div>

          <div
            className="
            w-16
            h-16
            rounded-3xl
            bg-yellow-500/20
            flex
            items-center
            justify-center
          "
          >
            <Crown
              className="
              text-yellow-400
            "
            />
          </div>
        </div>

        <p
          className="
          mt-5
          text-gray-200
          leading-relaxed
        "
        >
          Siz premium foydalanuvchisiz.
          AI testlar va advanced
          statistika yoqilgan.
        </p>
      </motion.div>

      {/* SETTINGS LIST */}
      <div className="relative z-10 space-y-4">
        {/* ITEM */}
        <div
          className="
          rounded-3xl
          p-5
          bg-white/5
          border
          border-white/10
          backdrop-blur-xl
        "
        >
          <div
            className="
            flex
            items-center
            justify-between
          "
          >
            <div
              className="
              flex
              items-center
              gap-4
            "
            >
              <div
                className="
                w-14
                h-14
                rounded-2xl
                bg-white/10
                flex
                items-center
                justify-center
              "
              >
                <Moon />
              </div>

              <div>
                <h3
                  className="
                  text-xl
                  font-bold
                "
                >
                  Dark mode
                </h3>

                <p className="text-gray-400">
                  Premium dark interface
                </p>
              </div>
            </div>

            <div
              className="
              w-14
              h-8
              rounded-full
              bg-yellow-400
              flex
              items-center
              px-1
            "
            >
              <div
                className="
                w-6
                h-6
                rounded-full
                bg-black
                ml-auto
              "
              />
            </div>
          </div>
        </div>

        {/* ITEM */}
        <div
          className="
          rounded-3xl
          p-5
          bg-white/5
          border
          border-white/10
        "
        >
          <div
            className="
            flex
            items-center
            justify-between
          "
          >
            <div
              className="
              flex
              items-center
              gap-4
            "
            >
              <div
                className="
                w-14
                h-14
                rounded-2xl
                bg-white/10
                flex
                items-center
                justify-center
              "
              >
                <Bell />
              </div>

              <div>
                <h3
                  className="
                  text-xl
                  font-bold
                "
                >
                  Notifications
                </h3>

                <p className="text-gray-400">
                  Daily reminders
                </p>
              </div>
            </div>

            <div
              className="
              w-14
              h-8
              rounded-full
              bg-green-500
              flex
              items-center
              px-1
            "
            >
              <div
                className="
                w-6
                h-6
                rounded-full
                bg-white
                ml-auto
              "
              />
            </div>
          </div>
        </div>

        {/* ITEM */}
        <div
          className="
          rounded-3xl
          p-5
          bg-white/5
          border
          border-white/10
        "
        >
          <div
            className="
            flex
            items-center
            justify-between
          "
          >
            <div
              className="
              flex
              items-center
              gap-4
            "
            >
              <div
                className="
                w-14
                h-14
                rounded-2xl
                bg-white/10
                flex
                items-center
                justify-center
              "
              >
                <Globe />
              </div>

              <div>
                <h3
                  className="
                  text-xl
                  font-bold
                "
                >
                  Til
                </h3>

                <p className="text-gray-400">
                  O‘zbekcha
                </p>
              </div>
            </div>

            <ChevronRight
              className="
              text-gray-400
            "
            />
          </div>
        </div>

        {/* ITEM */}
        <div
          className="
          rounded-3xl
          p-5
          bg-white/5
          border
          border-white/10
        "
        >
          <div
            className="
            flex
            items-center
            justify-between
          "
          >
            <div
              className="
              flex
              items-center
              gap-4
            "
            >
              <div
                className="
                w-14
                h-14
                rounded-2xl
                bg-white/10
                flex
                items-center
                justify-center
              "
              >
                <Shield />
              </div>

              <div>
                <h3
                  className="
                  text-xl
                  font-bold
                "
                >
                  Privacy
                </h3>

                <p className="text-gray-400">
                  Account security
                </p>
              </div>
            </div>

            <ChevronRight
              className="
              text-gray-400
            "
            />
          </div>
        </div>
      </div>

      {/* LOGOUT */}
      <div className="relative z-10 pb-24">
        <button
          className="
          w-full
          py-5
          rounded-3xl
          bg-red-500/10
          border
          border-red-500/20
          text-red-400
          text-lg
          font-bold
        "
        >
          Chiqish
        </button>
      </div>
    </div>
  );
}