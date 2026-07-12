import { useEffect, useState } from "react";

const BG_LABELS: Record<string, string> = {
  bg_black: "",
  bg_library: "はざまの図書館",
  bg_rain_conveni: "雨のコンビニ",
  bg_kyusen: "旧線路沿いの道",
  bg_fumikiri_kai: "第四踏切",
};

export default function Background({ bg }: { bg: string }) {
  const [imgOk, setImgOk] = useState(true);
  useEffect(() => setImgOk(true), [bg]);

  return (
    <div className={`bg-layer ${bg}`}>
      {imgOk && (
        <img
          src={`${import.meta.env.BASE_URL}assets/bg/${bg}.png`}
          onError={() => setImgOk(false)}
          alt=""
        />
      )}
      {!imgOk && <span className="bg-label">{BG_LABELS[bg] ?? ""}</span>}
    </div>
  );
}
