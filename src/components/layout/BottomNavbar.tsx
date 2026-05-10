import {
  BookOpen,
  House,
  Swords,
  Trophy,
  User,
} from "lucide-react";

import { Link } from (
  "react-router-dom"
);

export default function BottomNavbar() {
  return (
    <div
      className="
        fixed
        bottom-0
        left-0
        right-0
        flex
        justify-around
        border-t
        bg-white
        p-4
      "
    >
      <Link to="/">
        <House />
      </Link>

      <Link to="/tests">
        <Trophy />
      </Link>

      <Link to="/arena">
        <Swords />
      </Link>

      <Link to="/books">
        <BookOpen />
      </Link>

      <Link to="/profile">
        <User />
      </Link>
    </div>
  );
}