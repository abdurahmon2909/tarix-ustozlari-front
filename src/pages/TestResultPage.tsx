import {
  Trophy,
  Flame,
  CheckCircle2,
} from "lucide-react";

import {
  motion,
  animate,
} from "framer-motion";

import {
  useEffect,
  useState,
} from "react";

import {
  useLocation,
  useNavigate,
} from "react-router-dom";

export default function TestResultPage() {
  const location =
    useLocation();

  const navigate =
    useNavigate();

  const score =
    location.state?.score || 0;

  const total =
    location.state?.total || 0;

  const percent = Math.round(
    (score / total) * 100
  );

  const xp = score * 15;

  const [
    animatedScore,
    setAnimatedScore,
  ] = useState(0);

  useEffect(() => {
    const controls =
      animate(0, score, {
        duration: 1.5,

        onUpdate(value) {
          setAnimatedScore(
            Math.floor(value)
          );
        },
      });

    return () =>
      controls.stop();
  }, [score]);

  return (
    <div className="relative pt-4 pb-12">
      {/* BACKGROUND */}
      <div
        className="
        absolute
        top-10
        left-1/2
        -translate-x-1/2
        w-80
        h-80
        rounded-full
        bg-yellow-500/10
        blur-[120px]
      "
      />

      {/* CONTENT */}
      <div
        className="
        relative
        z-10
      "
      >
        {/* TITLE */}
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
          text-center
        "
        >
          <p
            className="
            text-yellow-400
            font-semibold
            tracking-wide
          "
          >
            TEST YAKUNLANDI
          </p>

          <h1
            className="
            mt-3
            text-4xl
            font-black
          "
          >
            A’lo natija 🎉
          </h1>

          <p
            className="
            mt-3
            text-gray-400
            text-lg
          "
          >
            Siz testni
            muvaffaqiyatli
            yakunladingiz
          </p>
        </motion.div>

        {/* SCORE */}
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.8,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            delay: 0.1,
          }}
          className="
          mt-10
          flex
          items-center
          justify-center
        "
        >
          <div
            className="
            relative
            w-64
            h-64
            rounded-full
            border-[14px]
            border-yellow-500/20
            flex
            items-center
            justify-center
            bg-gradient-to-br
            from-[#132238]
            to-[#0a1422]
            shadow-2xl
            shadow-yellow-500/20
            animate-pulse
          "
          >
            {/* INNER GLOW */}
            <div
              className="
              absolute
              inset-4
              rounded-full
              border
              border-yellow-400/20
            "
            />

            {/* CONTENT */}
            <div className="text-center">
              <h2
                className="
                text-6xl
                font-black
                text-yellow-400
              "
              >
                {animatedScore}
              </h2>

              <p
                className="
                mt-2
                text-gray-400
                text-lg
              "
              >
                / {total}
              </p>

              <div
                className="
                mt-4
                inline-flex
                items-center
                gap-2
                rounded-full
                bg-yellow-500/10
                px-4
                py-2
                text-yellow-300
                text-sm
                font-semibold
              "
              >
                <Trophy size={16} />

                {percent}%
              </div>

              <p
                className="
                mt-3
                text-sm
                text-gray-400
              "
              >
                Siz TOP 12%
                foydalanuvchilar
                qatoridasiz
              </p>
            </div>
          </div>
        </motion.div>

        {/* STATS */}
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
          className="
          mt-10
          grid
          grid-cols-2
          gap-4
        "
        >
          {/* XP */}
          <div
            className="
            rounded-[28px]
            border
            border-white/10
            bg-gradient-to-br
            from-[#132238]
            to-[#0a1422]
            p-5
          "
          >
            <div
              className="
              flex
              items-center
              gap-3
            "
            >
              <div
                className="
                w-12
                h-12
                rounded-2xl
                bg-yellow-500/10
                flex
                items-center
                justify-center
              "
              >
                <Flame
                  className="
                  text-yellow-400
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
                  XP oldingiz
                </p>

                <h3
                  className="
                  text-2xl
                  font-bold
                  mt-1
                "
                >
                  +{xp} XP
                </h3>

                <p
                  className="
                  mt-2
                  text-xs
                  text-yellow-300
                "
                >
                  Yangi levelga
                  yaqinlashdingiz
                </p>
              </div>
            </div>
          </div>

          {/* CORRECT */}
          <div
            className="
            rounded-[28px]
            border
            border-white/10
            bg-gradient-to-br
            from-[#132238]
            to-[#0a1422]
            p-5
          "
          >
            <div
              className="
              flex
              items-center
              gap-3
            "
            >
              <div
                className="
                w-12
                h-12
                rounded-2xl
                bg-green-500/10
                flex
                items-center
                justify-center
              "
              >
                <CheckCircle2
                  className="
                  text-green-400
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
                  To‘g‘ri javob
                </p>

                <h3
                  className="
                  text-2xl
                  font-bold
                  mt-1
                "
                >
                  {score} ta
                </h3>
              </div>
            </div>
          </div>
        </motion.div>

        {/* STREAK */}
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.8,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            delay: 0.4,
          }}
          className="
          mt-8
          rounded-[28px]
          border
          border-yellow-500/20
          bg-yellow-500/10
          p-5
          text-center
        "
        >
          <p
            className="
            text-yellow-300
            font-semibold
            text-lg
          "
          >
            🔥 3 kunlik streak
            davom etmoqda
          </p>

          <p
            className="
            mt-2
            text-sm
            text-yellow-100/70
          "
          >
            Har kuni test
            ishlashni davom
            ettiring
          </p>
        </motion.div>

        {/* BUTTONS */}
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
            delay: 0.3,
          }}
          className="
          mt-10
          space-y-4
        "
        >
          {/* REVIEW */}
          <button
            className="
            w-full
            h-16
            rounded-2xl
            border
            border-white/10
            bg-white/[0.03]
            text-lg
            font-semibold
          "
          >
            Xatolar ustida
            ishlash
          </button>

          {/* HOME */}
          <button
            onClick={() =>
              navigate("/")
            }
            className="
            w-full
            h-16
            rounded-2xl
            bg-gradient-to-r
            from-yellow-400
            to-yellow-600
            text-black
            text-lg
            font-black
            shadow-xl
            shadow-yellow-500/20
          "
          >
            Bosh sahifaga
            qaytish
          </button>
        </motion.div>
      </div>
    </div>
  );
}