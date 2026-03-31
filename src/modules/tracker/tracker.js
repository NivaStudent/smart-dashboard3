import { getTotalPoints } from "../tasks/tasks.js";

export function getStats() {
  return {
    points: getTotalPoints()
  };
}