import { useEffect, useState } from "react";
import { useGameStore } from "../../store/gameStore";
import { listSaves } from "../../engine/saveSystem";
import { ENDINGS } from "../../data/endings";
import { audio } from "../../engine/audio";
import SaveLoadPanel from "../game/SaveLoadPanel";

export default function TitleScreen() {
  useEffect(() => {
    audio.playBgm("bgm_title");
  }, []);
  const startNew = useGameStore((s) => s.startNew);
  const endingsSeen = useGameStore((s) => s.endingsSeen);
  const soundOn = useGameStore((s) => s.soundOn);
  const toggleSound = useGameStore((s) => s.toggleSound);
  const [showLoad, setShowLoad] = useState(false);
  const [keyVisualOk, setKeyVisualOk] = useState(true);
  const hasSave = listSaves().some((s) => s.data !== null);

  return (
    <div className="title-screen">
      {keyVisualOk && (
        <div className="title-bg">
          <img
            src={`${import.meta.env.BASE_URL}assets/bg/title_key.png`}
            onError={() => setKeyVisualOk(false)}
            alt=""
          />
        </div>
      )}
      <button
        className={`title-sound ${soundOn ? "mode-on" : ""}`}
        onClick={toggleSound}
        aria-label="BGMのオン・オフ"
      >
        {soundOn ? "♪ ON" : "♪ OFF"}
      </button>
      <div className="title-sub">―ようこそ、まだ綴じられていない物語へ―</div>
      <h1>はざまの図書館</h1>
      <div className="title-tag">THE IN-BETWEEN LIBRARY</div>
      <div className="title-menu">
        <button onClick={startNew}>はじめから</button>
        <button onClick={() => setShowLoad(true)} disabled={!hasSave}>
          つづきから
        </button>
      </div>
      <div className="title-endings">
        {ENDINGS.map((e) => (
          <span key={e.id} className={`end-badge ${endingsSeen.includes(e.id) ? "seen" : ""}`}>
            {endingsSeen.includes(e.id) ? `${e.code} ${e.title}` : `${e.code} ???`}
          </span>
        ))}
      </div>
      {showLoad && <SaveLoadPanel mode="load" onClose={() => setShowLoad(false)} />}
    </div>
  );
}
