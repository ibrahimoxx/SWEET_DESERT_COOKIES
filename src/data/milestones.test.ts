import { describe, it, expect } from "vitest";
import { milestones, companyStats } from "./milestones";

describe("milestones data", () => {
  it("has milestones with non-empty fields", () => {
    expect(milestones.length).toBeGreaterThan(0);
    for (const m of milestones) {
      expect(m.year.trim()).not.toBe("");
      expect(m.title.trim()).not.toBe("");
      expect(m.description.trim()).not.toBe("");
    }
  });

  it("has company stats with non-empty fields", () => {
    expect(companyStats.length).toBeGreaterThan(0);
    for (const s of companyStats) {
      expect(s.stat.trim()).not.toBe("");
      expect(s.label.trim()).not.toBe("");
    }
  });
});
