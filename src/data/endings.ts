import type { EndingDef } from "../engine/types";

export const ENDINGS: EndingDef[] = [
  {
    id: "end_reader",
    code: "END",
    title: "読者",
    desc: "あなたは2冊の本の入り口に立った。続きの頁は、それぞれの物語の中で待っている。",
  },
  {
    id: "end_curious",
    code: "END+",
    title: "頁をめくる者",
    desc: "2つの謎をどちらも過たず解いた者。——あなたには、物語の綴じ方が視えるのかもしれない。",
  },
];

export function getEnding(id: string): EndingDef {
  return ENDINGS.find((e) => e.id === id) ?? ENDINGS[0];
}
