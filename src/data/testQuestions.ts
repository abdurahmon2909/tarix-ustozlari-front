export type QuestionType =
  | "mcq"
  | "matching"
  | "chronology"
  | "map";

export interface MatchingItem {
  left: string;
  right: string;
}

export interface TestQuestion {
  id: number;

  type: QuestionType;

  question: string;

  answers?: string[];

  correctAnswer?: number;

  matching?: MatchingItem[];

  chronology?: string[];

  mapRegions?: string[];
}

export const testQuestions: TestQuestion[] =
  [
    {
      id: 1,

      type: "mcq",

      question:
        "1917-yil fevral inqilobi natijasida Rossiyada qaysi davlat tuzildi?",

      answers: [
        "Sovet Ittifoqi",
        "Rossiya imperiyasi",
        "Rossiya Respublikasi",
        "Sotsialistik davlat",
      ],

      correctAnswer: 2,
    },

    {
      id: 2,

      type: "matching",

      question:
        "Quyidagi tarixiy atamalarni moslashtiring.",

      matching: [
        {
          left: "Islom Karimov",

          right:
            "O‘zbekiston birinchi Prezidenti",
        },

        {
          left: "Amir Temur",

          right:
            "Buyuk sarkarda va davlat arbobi",
        },

        {
          left: "Buxoro amirligi",

          right:
            "XIX asrda Markaziy Osiyoda mavjud davlat",
        },
      ],
    },

    {
      id: 3,

      type: "chronology",

      question:
        "Voqealarni ketma-ketlikda joylashtiring.",

      chronology: [
        "Amir Temur tavalludi",
        "Temuriylar davlati tashkil topdi",
        "Anqara jangi",
        "Amir Temur vafoti",
      ],
    },

    {
      id: 4,

      type: "map",

      question:
        "Xaritadan Farg‘ona vodiysini belgilang.",

      mapRegions: [
        "Farg‘ona vodiysi",
        "Samarqand",
        "Buxoro",
        "Xorazm",
      ],
    },
  ];