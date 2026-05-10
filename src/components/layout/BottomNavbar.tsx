import {
  Home,
  BookOpen,
  Swords,
  Trophy,
  User
} from "lucide-react";

import {
  NavLink
} from "react-router-dom";

const navItems = [
  {
    to: "/",
    icon: Home,
    label: "Bosh sahifa",
  },
  {
    to: "/tests",
    icon: BookOpen,
    label: "Testlar",
  },
  {
    to: "/arena",
    icon: Swords,
    label: "Arena",
  },
  {
    to: "/leaderboard",
    icon: Trophy,
    label: "Top",
  },
  {
    to: "/profile",
    icon: User,
    label: "Profil",
  },
];

export default function BottomNav() {
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
      bg-[#08111f]
      backdrop-blur-xl
    "
    >
      <div
        className="
        flex
        items-center
        justify-around
        py-3
      "
      >
        {navItems.map((item) => {
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
                text-xs
                transition

                ${
                  isActive
                    ? "text-yellow-400"
                    : "text-gray-400"
                }
              `
              }
            >
              <Icon size={22} />
              <span>{item.label}</span>
            </NavLink>
          );
        })}
      </div>
    </div>
  );
}