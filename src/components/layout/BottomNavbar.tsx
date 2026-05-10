import {
  House,
  Trophy,
  Swords,
  BookOpen,
  User,
} from "lucide-react";

import {
  NavLink,
} from "react-router-dom";

const items = [
  {
    to: "/",
    label: "Bosh sahifa",
    icon: House,
  },
  {
    to: "/leaderboard",
    label: "Top",
    icon: Trophy,
  },
  {
    to: "/arena",
    label: "Arena",
    icon: Swords,
  },
  {
    to: "/books",
    label: "Kitoblar",
    icon: BookOpen,
  },
  {
    to: "/profile",
    label: "Profil",
    icon: User,
  },
];

export default function BottomNavbar() {
  return (
    <div
      className="
      fixed
      bottom-0
      left-0
      right-0
      z-50
      border-t
      border-white/10
      bg-[#071120]/90
      backdrop-blur-2xl
      px-2
      py-3
    "
    >
      <div
        className="
        max-w-md
        mx-auto
        flex
        items-center
        justify-between
      "
      >
        {items.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `
                flex
                flex-col
                items-center
                gap-1
                px-3
                py-2
                rounded-2xl
                transition-all
                duration-300

                ${
                  isActive
                    ? "text-yellow-400 bg-yellow-400/10"
                    : "text-gray-400"
                }
              `
              }
            >
              <Icon size={22} />

              <span
                className="
                text-[11px]
                font-medium
              "
              >
                {item.label}
              </span>
            </NavLink>
          );
        })}
      </div>
    </div>
  );
}