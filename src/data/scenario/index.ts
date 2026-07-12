import type { Scene } from "../../engine/types";
import prologue from "./free/prologue.json";
import chapter1 from "./free/chapter1.json";
import chapter2 from "./free/chapter2.json";
import epilogue from "./free/epilogue.json";

// 全編無料作品。有料章・解錠は使わない。
const freeScenes: Record<string, Scene> = {
  prologue: prologue as unknown as Scene,
  chapter1: chapter1 as unknown as Scene,
  chapter2: chapter2 as unknown as Scene,
  epilogue: epilogue as unknown as Scene,
};

export const PAID_SCENE_IDS: string[] = [];

export function isPaidScene(_sceneId: string): boolean {
  return false;
}

export function isPaidLoaded(): boolean {
  return true;
}

export function getScene(sceneId: string): Scene | null {
  return freeScenes[sceneId] ?? null;
}

/** 全編無料のため解錠は不要。互換のために残すスタブ。 */
export async function loadPaidScenes(_passphrase: string): Promise<boolean> {
  return true;
}
