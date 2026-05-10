import {
  Home,
  BookOpen,
  Swords,
  User,
  ClipboardList,
} from "lucide-react";

import { NavLink } from "react-router-dom";

const navItems = [
  {
    label: "Home",
    icon: Home,
    path: "/",
  },
  {
    label: "Tests",
    icon: ClipboardList,
    path: "/tests",
  },
  {
    label: "Arena",
    icon: Swords,
    path: "/arena",
  },
  {
    label: "Books",
    icon: BookOpen,
    path: "/books",
  },
  {
    label: "Profile",
    icon: User,
    path: "/profile",
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
      bg-[#09111d]/95
      backdrop-blur-2xl
    "
    >
      <div
        className="
        max-w-md
        mx-auto
        grid
        grid-cols-5
        px-2
        py-2
      "
      >
        {navItems.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `
                flex
                flex-col
                items-center
                justify-center
                gap-1
                py-3
                rounded-2xl
                transition-all
                duration-300

                ${
                  isActive
                    ? `
                    bg-yellow-500/10
                    text-yellow-400
                  `
                    : `
                    text-gray-500
                  `
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