import { describe, it, expect } from "vitest";
import { rewardsTiers } from "./rewards";

const HEX = /^#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/;

describe("rewards tiers", () => {
  it("has tiers", () => {
    expect(rewardsTiers.length).toBeGreaterThan(0);
  });

  it("thresholds are strictly ascending", () => {
    for (let i = 1; i < rewardsTiers.length; i++) {
      expect(rewardsTiers[i].threshold).toBeGreaterThan(
        rewardsTiers[i - 1].threshold
      );
    }
  });

  it("first tier starts at threshold 0", () => {
    expect(rewardsTiers[0].threshold).toBe(0);
  });

  it("crumbsPerDollar never decreases up the tiers", () => {
    for (let i = 1; i < rewardsTiers.length; i++) {
      expect(rewardsTiers[i].crumbsPerDollar).toBeGreaterThanOrEqual(
        rewardsTiers[i - 1].crumbsPerDollar
      );
    }
  });

  it("tier colors are valid hex", () => {
    for (const t of rewardsTiers) {
      expect(t.color, t.name).toMatch(HEX);
    }
  });

  it("every tier has at least one perk", () => {
    for (const t of rewardsTiers) {
      expect(t.perks.length, t.name).toBeGreaterThan(0);
    }
  });
});
