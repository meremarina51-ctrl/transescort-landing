export const YANDEX_METRIKA_ID = 112110643;

/** Fire-and-forget — analytics must never throw or block the calling UI action. */
export function reachGoal(goal: string, params?: Record<string, unknown>) {
  if (typeof window === "undefined") return;
  try {
    const analyticsWindow = window as Window & {
      ym?: (counterId: number, action: "reachGoal", goal: string, params?: Record<string, unknown>) => void;
    };
    analyticsWindow.ym?.(YANDEX_METRIKA_ID, "reachGoal", goal, params);
  } catch {}
}
