import { useEffect, useState } from "react";

import BattlePlayerCard from "../components/arena/BattlePlayerCard"

import BattleTimer from "../components/arena/BattleTimer"

import QuestionCard from "../components/tests/QuestionCard"

import {
  connectArena,
  onArenaMessage,
  sendArenaMessage,
} from (
  "../features/arena/arena.socket"
);

export default function BattlePage() {
  const [seconds, setSeconds] =
    useState(15);

  useEffect(() => {
    connectArena();

    onArenaMessage((event) => {
      console.log(event.data);
    });

    const interval =
      setInterval(() => {
        setSeconds((prev) => {
          if (prev <= 1) {
            return 15;
          }

          return prev - 1;
        });
      }, 1000);

    return () =>
      clearInterval(interval);
  }, []);

  function handleAnswer(
    answer: string
  ) {
    sendArenaMessage(answer);
  }

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <BattlePlayerCard
          username="You"
          xp={1500}
          score={5}
          isCurrent
        />

        <BattlePlayerCard
          username="Opponent"
          xp={1700}
          score={4}
        />
      </div>

      <BattleTimer
        seconds={seconds}
      />

      <QuestionCard
        question={{
          id: 1,

          question_text:
            "Amir Temur qachon tug‘ilgan?",

          options: [
            "1336",
            "1405",
            "1220",
            "1500",
          ],
        }}
        onAnswer={handleAnswer}
      />
    </div>
  );
}