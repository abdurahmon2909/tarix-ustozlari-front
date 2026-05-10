import {
  House,
  BookOpen,
  Swords,
  User,
} from "lucide-react";

import {
  NavLink,
} from "react-router-dom";

export default function BottomNav() {
  const items = [
    {
      to: "/",
      icon: House,
      label: "Home",
    },
    {
      to: "/tests",
      icon: BookOpen,
      label: "Tests",
    },
    {
      to: "/arena",
      icon: Swords,
      label: "Arena",
    },
    {
      to: "/profile",
      icon: User,
      label: "Profile",
    },
  ];

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
      bg-[#09111f]/90
      backdrop-blur-2xl
    "
    >
      <div
        className="
        max-w-md
        mx-auto
        grid
        grid-cols-4
      "
      >
        {items.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.to}
              to={item.to}
              className={({
                isActive,
              }) =>
                `
                flex
                flex-col
                items-center
                justify-center
                py-4
                gap-1
                transition-all

                ${
                  isActive
                    ? "text-yellow-400"
                    : "text-gray-500"
                }
              `
              }
            >
              <Icon size={22} />

              <span
                className="
                text-xs
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