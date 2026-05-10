import {
  Bell,
  Flame,
  Trophy,
  Sparkles,
  BookOpen,
  Swords,
  Brain,
} from "lucide-react";

import { motion } from "framer-motion";

export default function HomePage() {
  return (
    <div className="relative overflow-hidden pt-2 space-y-6 pb-6">
      {/* GLOWS */}
      <div
        className="
        absolute
        top-0
        left-0
        w-72
        h-72
        bg-yellow-500/20
        blur-[120px]
        rounded-full
      "
      />

      <div
        className="
        absolute
        top-40
        right-0
        w-72
        h-72
        bg-blue-500/20
        blur-[120px]
        rounded-full
      "
      />
{/* LIVE TICKER */}
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
  overflow-hidden
  rounded-2xl
  border
  border-yellow-500/10
  bg-white/[0.03]
  backdrop-blur-xl
"
>
  <div
    className="
    ticker-track
    flex
    items-center
    gap-3
    px-4
    py-3
    whitespace-nowrap
  "
  >
    {/* LIVE */}
    <div
      className="
      flex
      items-center
      gap-2
      text-red-400
      font-semibold
      text-sm
    "
    >
      <div
        className="
        w-2
        h-2
        rounded-full
        bg-red-500
      "
      />

      LIVE
    </div>

    <div
      className="
      text-gray-300
      text-sm
    "
    >
      🔥 Bugungi challenge yangilandi •
      🏆 Arena season boshlandi •
      🤖 AI tavsiyalar aktiv •
      📚 Yangi testlar qo‘shildi
    </div>
  </div>
</motion.div>
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
            relative
            w-14
            h-14
            rounded-2xl
            bg-gradient-to-br
            from-yellow-400
            to-yellow-600
            flex
            items-center
            justify-center
            text-black
            text-xl
            font-bold
            shadow-lg
            shadow-yellow-500/30
          "
          >
            A

            <div
              className="
              absolute
              -bottom-1
              -right-1
              w-5
              h-5
              rounded-full
              bg-green-400
              border-2
              border-[#050B16]
            "
            />
          </div>

          <div>
            <p
              className="
              text-gray-400
              text-sm
            "
            >
              Xush kelibsiz 👋
            </p>

            <h1
              className="
              text-3xl
              font-bold
            "
            >
              Abdurahmon
            </h1>
          </div>
        </div>

        <button
          className="
          relative
          w-14
          h-14
          rounded-2xl
          bg-white/5
          border
          border-white/10
          flex
          items-center
          justify-center
          backdrop-blur-xl
        "
        >
          <Bell size={22} />

          <div
            className="
            absolute
            top-3
            right-3
            w-2
            h-2
            rounded-full
            bg-yellow-400
          "
          />
        </button>
      </motion.div>

      {/* HERO */}
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
        overflow-hidden
        rounded-[32px]
        p-6
        bg-gradient-to-br
        from-[#132238]
        to-[#09111d]
        border
        border-yellow-500/20
        shadow-2xl
        shadow-yellow-500/10
      "
      >
        <div
          className="
          absolute
          -top-10
          -right-10
          w-40
          h-40
          rounded-full
          bg-yellow-500/10
          blur-[80px]
        "
        />

        <div className="relative z-10">
          <div
            className="
            flex
            items-center
            justify-between
          "
          >
            <div>
              <p className="text-gray-400">
                Level 12
              </p>

              <h2
                className="
                text-5xl
                font-bold
                mt-2
              "
              >
                1840 XP
              </h2>
            </div>

            <div
              className="
              w-20
              h-20
              rounded-3xl
              bg-yellow-500/20
              flex
              items-center
              justify-center
            "
            >
              <Trophy
                size={40}
                className="
                text-yellow-400
              "
              />
            </div>
          </div>

          {/* PROGRESS */}
          <div className="mt-6">
            <div
              className="
              flex
              items-center
              justify-between
              mb-2
            "
            >
              <span className="text-gray-400">
                Next level
              </span>

              <span className="text-yellow-400">
                74%
              </span>
            </div>

            <div
              className="
              w-full
              h-3
              bg-white/10
              rounded-full
              overflow-hidden
            "
            >
              <div
                className="
                h-full
                w-[74%]
                rounded-full
                bg-gradient-to-r
                from-yellow-400
                to-yellow-600
              "
              />
            </div>
          </div>
        </div>
      </motion.div>

      {/* QUICK ACTIONS */}
      <div
        className="
        relative
        z-10
        grid
        grid-cols-4
        gap-3
      "
      >
        <button
          className="
          rounded-3xl
          p-4
          bg-white/5
          border
          border-white/10
          backdrop-blur-xl
          flex
          flex-col
          items-center
          gap-2
        "
        >
          <BookOpen
            className="
            text-yellow-400
          "
          />

          <span
            className="
            text-xs
            font-medium
          "
          >
            Tests
          </span>
        </button>

        <button
          className="
          rounded-3xl
          p-4
          bg-white/5
          border
          border-white/10
          backdrop-blur-xl
          flex
          flex-col
          items-center
          gap-2
        "
        >
          <Sparkles
            className="
            text-cyan-400
          "
          />

          <span
            className="
            text-xs
            font-medium
          "
          >
            AI
          </span>
        </button>

        <button
          className="
          rounded-3xl
          p-4
          bg-white/5
          border
          border-white/10
          backdrop-blur-xl
          flex
          flex-col
          items-center
          gap-2
        "
        >
          <Swords
            className="
            text-red-400
          "
          />

          <span
            className="
            text-xs
            font-medium
          "
          >
            Arena
          </span>
        </button>

        <button
          className="
          rounded-3xl
          p-4
          bg-white/5
          border
          border-white/10
          backdrop-blur-xl
          flex
          flex-col
          items-center
          gap-2
        "
        >
          <Brain
            className="
            text-purple-400
          "
          />

          <span
            className="
            text-xs
            font-medium
          "
          >
            IQ
          </span>
        </button>
      </div>

{/* DAILY CHALLENGE */}
<motion.div
  initial={{
    opacity: 0,
    y: 20,
  }}
  animate={{
    opacity: 1,
    y: 0,
  }}
  transition={{
    delay: 0.1,
  }}
  className="
  relative
  z-10
  overflow-hidden
  rounded-[32px]
  border
  border-yellow-500/20
  bg-gradient-to-br
  from-[#13294a]
  via-[#0b1830]
  to-[#08111d]
  p-5
  shadow-2xl
  shadow-blue-500/10
"
>
  {/* GLOW */}
  <div
    className="
    absolute
    -right-10
    top-0
    w-56
    h-56
    rounded-full
    bg-yellow-500/10
    blur-[100px]
  "
  />

  <div
    className="
    relative
    z-10
    flex
    items-start
    justify-between
    gap-4
  "
  >
    {/* LEFT */}
    <div className="flex-1">
      {/* TOP */}
      <div
        className="
        flex
        items-center
        gap-3
      "
      >
        <div
          className="
          w-14
          h-14
          rounded-2xl
          bg-orange-500/20
          border
          border-orange-400/20
          flex
          items-center
          justify-center
        "
        >
          <Flame
            size={26}
            className="
            text-orange-400
          "
          />
        </div>

        <div>
          <p
            className="
            text-xs
            uppercase
            tracking-widest
            text-yellow-300
          "
          >
            Bugungi Challenge
          </p>

          <h2
            className="
            text-3xl
            font-bold
            mt-1
          "
          >
            Jadidlar davri
          </h2>
        </div>
      </div>

      {/* INFO */}
      <div
        className="
        mt-5
        flex
        items-center
        gap-3
        text-sm
        text-gray-300
      "
      >
        <span>10 ta savol</span>

        <span>•</span>

        <span>15 XP</span>

        <span>•</span>

        <span>10 Sharaf</span>
      </div>

      {/* BUTTON */}
      <button
        className="
        mt-6
        px-8
        py-4
        rounded-2xl
        bg-gradient-to-r
        from-yellow-400
        to-yellow-600
        text-black
        font-bold
        text-lg
        shadow-xl
        shadow-yellow-500/20
      "
      >
        Boshlash
      </button>
    </div>

    {/* RIGHT */}
    <div
      className="
      relative
      hidden
      sm:flex
      items-center
      justify-center
    "
    >
      <div
        className="
        absolute
        w-36
        h-36
        rounded-full
        bg-yellow-500/20
        blur-[60px]
      "
      />

      <div className="relative text-[120px]">
        🪙
      </div>
    </div>
  </div>

  {/* TIMER */}
  <div
    className="
    absolute
    top-4
    right-4
    px-4
    py-2
    rounded-full
    bg-black/40
    backdrop-blur-xl
    border
    border-white/10
    text-sm
    font-medium
  "
  >
    ⏱ 12:45:30
  </div>

  {/* DOTS */}
  <div
    className="
    mt-6
    flex
    items-center
    justify-center
    gap-2
  "
  >
    <div
      className="
      w-2.5
      h-2.5
      rounded-full
      bg-yellow-400
    "
    />

    <div
      className="
      w-2.5
      h-2.5
      rounded-full
      bg-white/20
    "
    />

    <div
      className="
      w-2.5
      h-2.5
      rounded-full
      bg-white/20
    "
    />

    <div
      className="
      w-2.5
      h-2.5
      rounded-full
      bg-white/20
    "
    />
  </div>
</motion.div>
{/* CONTINUE TEST */}
<motion.div
  initial={{
    opacity: 0,
    y: 20,
  }}
  animate={{
    opacity: 1,
    y: 0,
  }}
  transition={{
    delay: 0.15,
  }}
  className="relative z-10"
>
  {/* HEADER */}
  <div
    className="
    flex
    items-center
    justify-between
    mb-4
  "
  >
    <h2
      className="
      text-2xl
      font-bold
    "
    >
      Davom etayotgan test
    </h2>

    <button
      className="
      text-gray-400
      text-sm
    "
    >
      Barchasi
    </button>
  </div>

  {/* CARD */}
  <div
    className="
    relative
    overflow-hidden
    rounded-[30px]
    border
    border-white/10
    bg-gradient-to-br
    from-[#132238]
    via-[#0c1728]
    to-[#09111d]
    p-4
    shadow-2xl
    shadow-blue-500/10
  "
  >
    {/* GLOW */}
    <div
      className="
      absolute
      -right-10
      top-0
      w-44
      h-44
      rounded-full
      bg-yellow-500/10
      blur-[90px]
    "
    />

    <div
      className="
      relative
      z-10
      flex
      gap-4
    "
    >
      {/* IMAGE */}
      <div
        className="
        min-w-[110px]
        h-[110px]
        rounded-2xl
        bg-gradient-to-br
        from-yellow-700
        to-yellow-900
        flex
        items-center
        justify-center
        text-5xl
        shadow-lg
      "
      >
        🐎
      </div>

      {/* CONTENT */}
      <div className="flex-1">
        <h3
          className="
          text-xl
          leading-snug
          font-bold
        "
        >
          Amir Temur va
          Temuriylar davlati
        </h3>

        <p
          className="
          mt-2
          text-gray-400
        "
        >
          7 / 30 savol
        </p>

        {/* PROGRESS */}
        <div
          className="
          mt-4
          w-full
          h-2.5
          rounded-full
          bg-white/10
          overflow-hidden
        "
        >
          <div
            className="
            h-full
            w-[25%]
            rounded-full
            bg-gradient-to-r
            from-yellow-400
            to-yellow-600
          "
          />
        </div>

        {/* BUTTON */}
        <button
          className="
          mt-5
          px-5
          py-3
          rounded-2xl
          border
          border-white/10
          bg-white/5
          backdrop-blur-xl
          font-semibold
        "
        >
          Davom etish →
        </button>
      </div>
    </div>
  </div>
</motion.div>
      {/* STATS */}
      <div
        className="
        relative
        z-10
        grid
        grid-cols-2
        gap-4
      "
      >
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
          <p className="text-gray-400">
            Reyting
          </p>

          <h2
            className="
            text-4xl
            font-bold
            mt-3
          "
          >
            #12
          </h2>
        </div>

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
          <p className="text-gray-400">
            Streak
          </p>

          <h2
            className="
            text-4xl
            font-bold
            mt-3
          "
          >
            12 🔥
          </h2>
        </div>
      </div>

      {/* RECOMMENDED */}
      <div className="relative z-10">
        <div
          className="
          flex
          items-center
          justify-between
          mb-4
        "
        >
          <h2
            className="
            text-2xl
            font-bold
          "
          >
            Tavsiya etiladi
          </h2>

          <button className="text-yellow-400">
            Barchasi
          </button>
        </div>

        <div
          className="
          flex
          gap-4
          overflow-x-auto
          pb-2
        "
        >
          {/* CARD */}
          <div
            className="
            min-w-[260px]
            rounded-3xl
            p-5
            bg-gradient-to-br
            from-[#1a2d4a]
            to-[#0b1523]
            border
            border-white/10
          "
          >
            <p className="text-gray-400">
              O‘zbekiston tarixi
            </p>

            <h3
              className="
              text-2xl
              font-bold
              mt-2
            "
            >
              Temuriylar
            </h3>

            <div
              className="
              flex
              items-center
              justify-between
              mt-6
            "
            >
              <span className="text-yellow-400">
                120 XP
              </span>

              <button
                className="
                px-4
                py-2
                rounded-xl
                bg-yellow-400
                text-black
                font-bold
              "
              >
                Boshlash
              </button>
            </div>
          </div>

          {/* CARD */}
          <div
            className="
            min-w-[260px]
            rounded-3xl
            p-5
            bg-gradient-to-br
            from-[#2b173f]
            to-[#12091d]
            border
            border-white/10
          "
          >
            <p className="text-gray-400">
              Jahon tarixi
            </p>

            <h3
              className="
              text-2xl
              font-bold
              mt-2
            "
            >
              Sovuq urush
            </h3>

            <div
              className="
              flex
              items-center
              justify-between
              mt-6
            "
            >
              <span className="text-pink-400">
                180 XP
              </span>

              <button
                className="
                px-4
                py-2
                rounded-xl
                bg-pink-500
                text-white
                font-bold
              "
              >
                Boshlash
              </button>
            </div>
          </div>
        </div>
      </div>
{/* AI RECOMMENDATIONS */}
<motion.div
  initial={{
    opacity: 0,
    y: 20,
  }}
  animate={{
    opacity: 1,
    y: 0,
  }}
  transition={{
    delay: 0.2,
  }}
  className="relative z-10"
>
  {/* HEADER */}
  <div
    className="
    flex
    items-center
    justify-between
    mb-4
  "
  >
    <h2
      className="
      text-2xl
      font-bold
    "
    >
      AI tavsiyalari
    </h2>

    <button
      className="
      text-yellow-400
      text-sm
    "
    >
      Barchasi
    </button>
  </div>

  {/* CARDS */}
  <div
    className="
    flex
    gap-4
    overflow-x-auto
    pb-2
    scrollbar-hide
  "
  >
    {/* CARD 1 */}
    <div
      className="
      min-w-[240px]
      rounded-[28px]
      overflow-hidden
      border
      border-white/10
      bg-gradient-to-br
      from-[#132238]
      to-[#0b1523]
      shadow-xl
      shadow-blue-500/10
    "
    >
      {/* IMAGE */}
      <div
        className="
        h-32
        bg-gradient-to-br
        from-yellow-700
        to-yellow-900
        flex
        items-center
        justify-center
        text-6xl
      "
      >
        📚
      </div>

      {/* CONTENT */}
      <div className="p-5">
        <p
          className="
          text-gray-400
          text-sm
        "
        >
          O‘zbekiston tarixi
        </p>

        <h3
          className="
          mt-2
          text-xl
          font-bold
        "
        >
          Temuriylar davri
        </h3>

        <div
          className="
          mt-4
          flex
          items-center
          justify-between
        "
        >
          <div>
            <p
              className="
              text-yellow-400
              font-semibold
            "
            >
              +20 XP
            </p>

            <p
              className="
              text-xs
              text-gray-500
              mt-1
            "
            >
              8-sinf
            </p>
          </div>

          <button
            className="
            w-12
            h-12
            rounded-2xl
            bg-white/10
            border
            border-white/10
            flex
            items-center
            justify-center
            text-xl
          "
          >
            →
          </button>
        </div>
      </div>
    </div>

    {/* CARD 2 */}
    <div
      className="
      min-w-[240px]
      rounded-[28px]
      overflow-hidden
      border
      border-white/10
      bg-gradient-to-br
      from-[#1a2b47]
      to-[#101726]
      shadow-xl
      shadow-cyan-500/10
    "
    >
      {/* IMAGE */}
      <div
        className="
        h-32
        bg-gradient-to-br
        from-cyan-700
        to-blue-900
        flex
        items-center
        justify-center
        text-6xl
      "
      >
        🌍
      </div>

      {/* CONTENT */}
      <div className="p-5">
        <p
          className="
          text-gray-400
          text-sm
        "
        >
          Jahon tarixi
        </p>

        <h3
          className="
          mt-2
          text-xl
          font-bold
        "
        >
          Sovuq urush
        </h3>

        <div
          className="
          mt-4
          flex
          items-center
          justify-between
        "
        >
          <div>
            <p
              className="
              text-cyan-400
              font-semibold
            "
            >
              +35 XP
            </p>

            <p
              className="
              text-xs
              text-gray-500
              mt-1
            "
            >
              9-sinf
            </p>
          </div>

          <button
            className="
            w-12
            h-12
            rounded-2xl
            bg-white/10
            border
            border-white/10
            flex
            items-center
            justify-center
            text-xl
          "
          >
            →
          </button>
        </div>
      </div>
    </div>

    {/* CARD 3 */}
    <div
      className="
      min-w-[240px]
      rounded-[28px]
      overflow-hidden
      border
      border-white/10
      bg-gradient-to-br
      from-[#2d1a42]
      to-[#161020]
      shadow-xl
      shadow-pink-500/10
    "
    >
      {/* IMAGE */}
      <div
        className="
        h-32
        bg-gradient-to-br
        from-pink-700
        to-purple-900
        flex
        items-center
        justify-center
        text-6xl
      "
      >
        🏛
      </div>

      {/* CONTENT */}
      <div className="p-5">
        <p
          className="
          text-gray-400
          text-sm
        "
        >
          Qadimgi dunyo
        </p>

        <h3
          className="
          mt-2
          text-xl
          font-bold
        "
        >
          Rim imperiyasi
        </h3>

        <div
          className="
          mt-4
          flex
          items-center
          justify-between
        "
        >
          <div>
            <p
              className="
              text-pink-400
              font-semibold
            "
            >
              +50 XP
            </p>

            <p
              className="
              text-xs
              text-gray-500
              mt-1
            "
            >
              Advanced
            </p>
          </div>

          <button
            className="
            w-12
            h-12
            rounded-2xl
            bg-white/10
            border
            border-white/10
            flex
            items-center
            justify-center
            text-xl
          "
          >
            →
          </button>
        </div>
      </div>
    </div>
  </div>
</motion.div>
      {/* QUOTE */}
      <div
        className="
        relative
        z-10
        rounded-3xl
        p-6
        bg-gradient-to-r
        from-[#0f1d31]
        to-[#08111d]
        border
        border-yellow-500/10
      "
      >
        <p
          className="
          text-xl
          leading-relaxed
          font-medium
        "
        >
          “Tarixni bilmagan xalqning
          kelajagi yo‘q.”
        </p>

        <p
          className="
          text-yellow-400
          mt-4
        "
        >
          — Mirzo Ulug‘bek
        </p>
      </div>
{/* TOP USTOZLAR */}
<motion.div
  initial={{
    opacity: 0,
    y: 20,
  }}
  animate={{
    opacity: 1,
    y: 0,
  }}
  transition={{
    delay: 0.25,
  }}
  className="relative z-10"
>
  {/* HEADER */}
  <div
    className="
    flex
    items-center
    justify-between
    mb-4
  "
  >
    <h2
      className="
      text-2xl
      font-bold
    "
    >
      Top ustozlar
    </h2>

    <button
      className="
      text-yellow-400
      text-sm
    "
    >
      Reyting
    </button>
  </div>

  {/* LIST */}
  <div className="space-y-4">
    {/* USER */}
    {[
      {
        name: "Sardor",
        xp: "12 450 XP",
        place: "#1",
        color:
          "from-yellow-500/20 to-yellow-700/10",
        icon: "🥇",
      },
      {
        name: "Madina",
        xp: "10 980 XP",
        place: "#2",
        color:
          "from-gray-400/20 to-gray-600/10",
        icon: "🥈",
      },
      {
        name: "Javohir",
        xp: "9 740 XP",
        place: "#3",
        color:
          "from-orange-500/20 to-orange-700/10",
        icon: "🥉",
      },
    ].map((user, index) => (
      <div
        key={index}
        className={`
          rounded-[28px]
          p-4
          border
          border-white/10
          bg-gradient-to-br
          ${user.color}
          backdrop-blur-xl
        `}
      >
        <div
          className="
          flex
          items-center
          justify-between
        "
        >
          {/* LEFT */}
          <div
            className="
            flex
            items-center
            gap-4
          "
          >
            {/* AVATAR */}
            <div
              className="
              w-14
              h-14
              rounded-2xl
              bg-white/10
              border
              border-white/10
              flex
              items-center
              justify-center
              text-2xl
            "
            >
              {user.icon}
            </div>

            {/* INFO */}
            <div>
              <h3
                className="
                text-lg
                font-bold
              "
              >
                {user.name}
              </h3>

              <p
                className="
                text-sm
                text-gray-400
                mt-1
              "
              >
                {user.xp}
              </p>
            </div>
          </div>

          {/* RIGHT */}
          <div
            className="
            text-right
          "
          >
            <p
              className="
              text-2xl
              font-black
              text-yellow-400
            "
            >
              {user.place}
            </p>

            <p
              className="
              text-xs
              text-gray-500
            "
            >
              Global
            </p>
          </div>
        </div>
      </div>
    ))}
  </div>
</motion.div>
      {/* AI CARD */}
      <div
        className="
        relative
        z-10
        rounded-3xl
        p-6
        bg-gradient-to-br
        from-[#132238]
        to-[#0a1422]
        border
        border-cyan-500/20
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
            <p className="text-cyan-400">
              AI Tavsiya
            </p>

            <h2
              className="
              text-2xl
              font-bold
              mt-2
            "
            >
              Sizga mos test
            </h2>
          </div>

          <div
            className="
            w-14
            h-14
            rounded-2xl
            bg-cyan-500/20
            flex
            items-center
            justify-center
          "
          >
            🤖
          </div>
        </div>

        <p
          className="
          mt-4
          text-gray-300
          leading-relaxed
        "
        >
          Siz Temuriylar mavzusida
          yuqori natija
          ko‘rsatgansiz.
          Keyingi tavsiya:
          Jadidlar harakati.
        </p>

        <button
          className="
          mt-5
          w-full
          py-4
          rounded-2xl
          bg-cyan-400
          text-black
          font-bold
        "
        >
          AI testni boshlash
        </button>
      </div>
    </div>
  );
}