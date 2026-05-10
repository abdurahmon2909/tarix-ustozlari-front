import {
  Crown,
  Search,
  Settings,
} from "lucide-react";

import {
  Link,
} from "react-router-dom";

export default function TopBar() {
  return (
    <div
      className="
        mb-4
        flex
        items-center
        justify-between
      "
    >
      <div>
        <h1
          className="
            text-xl
            font-bold
          "
        >
          Tarix Ustozlari
        </h1>
      </div>

      <div
        className="
          flex
          items-center
          gap-4
        "
      >
        <Link to="/premium">
          <Crown />
        </Link>

        <Link to="/search">
          <Search />
        </Link>

        <Link to="/settings">
          <Settings />
        </Link>
      </div>
    </div>
  );
}