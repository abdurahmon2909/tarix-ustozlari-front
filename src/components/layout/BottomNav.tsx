import {
  House,
  BookOpen,
  Swords,
  Library,
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
      to: "/books",
      icon: Library,
      label: "Books",
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
      bg-[#08101d]/95
      backdrop-blur-2xl
      shadow-2xl
    "
      style={{
        paddingBottom:
          "env(safe-area-inset-bottom)",
      }}
    >
      <div
        className="
        max-w-md
        mx-auto
        h-20
        grid
        grid-cols-5
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
                relative
                flex
                flex-col
                items-center
                justify-center
                gap-1
                transition-all
                duration-300

                ${
                  isActive
                    ? "text-yellow-400"
                    : "text-gray-500"
                }
              `
              }
            >
              {({
                isActive,
              }) => (
                <>
                  {/* ACTIVE GLOW */}
                  {isActive && (
                    <div
                      className="
                      absolute
                      inset-0
                      rounded-2xl
                      bg-yellow-400/5
                    "
                    />
                  )}

                  {/* ICON */}
                  <div className="relative z-10">
                    <Icon size={22} />
                  </div>

                  {/* LABEL */}
                  <span
                    className="
                    relative
                    z-10
                    text-[11px]
                    font-medium
                  "
                  >
                    {item.label}
                  </span>
                </>
              )}
            </NavLink>
          );
        })}
      </div>
    </div>
  );
}