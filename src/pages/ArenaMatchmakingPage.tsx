import { useState } from "react";

import {
  useNavigate,
} from "react-router-dom";

import Card from "../components/ui/Card"

import Button from "../components/ui/Button"

import {
  findBattle,
} from "../features/arena/battle.api";

export default function ArenaMatchmakingPage() {
  const [searching, setSearching] =
    useState(false);

  const navigate = useNavigate();

  async function handleSearch() {
    setSearching(true);

    await findBattle();

    setTimeout(() => {
      navigate("/arena/battle");
    }, 2000);
  }

  return (
    <div className="space-y-4">
      <h1
        className="
          text-3xl
          font-bold
        "
      >
        Matchmaking
      </h1>

      <Card>
        <p className="text-gray-500">
          Random raqib qidirish
        </p>

        <Button
          className="
            mt-4
            w-full
          "
          onClick={handleSearch}
        >
          {
            searching
              ? "Qidirilmoqda..."
              : "Raqib topish"
          }
        </Button>
      </Card>
    </div>
  );
}