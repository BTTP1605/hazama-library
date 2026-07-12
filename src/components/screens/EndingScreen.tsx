import { useGameStore } from "../../store/gameStore";
import { getEnding } from "../../data/endings";
import keywordDefs from "../../data/keywords.json";
import deductionDefs from "../../data/deductions.json";

export default function EndingScreen() {
  const endingId = useGameStore((s) => s.endingId);
  const flags = useGameStore((s) => s.flags);
  const keywords = useGameStore((s) => s.keywords);
  const finishEnding = useGameStore((s) => s.finishEnding);

  if (!endingId) return null;
  const ending = getEnding(endingId);
  const perfect = typeof flags.deduction_perfect === "number" ? flags.deduction_perfect : 0;
  const totalDeductions = deductionDefs.length;

  return (
    <div className="ending-screen">
      <div className="end-code">{ending.code}</div>
      <h2>{ending.title}</h2>
      <div className="end-desc">{ending.desc}</div>
      <div className="end-stats">
        完全推理 {perfect} / {totalDeductions}　　手がかり {keywords.length} / {keywordDefs.length}
      </div>
      {perfect < totalDeductions && (
        <div className="end-stats">
          ——すべての推理をノーミスで解いた者だけが辿り着く頁が、あるという。
        </div>
      )}
      <button onClick={finishEnding}>タイトルへ</button>
    </div>
  );
}
