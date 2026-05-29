import { describe, it, expect } from "vitest";
import { weeklyCookies, classicCookies, weeklyDateRange } from "./cookies";
import type { Cookie } from "@/types/Cookie";

const allCookies: Cookie[] = [...weeklyCookies, ...classicCookies];
const HEX = /^#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/;

describe("cookies data", () => {
  it("has weekly and classic cookies", () => {
    expect(weeklyCookies.length).toBeGreaterThan(0);
    expect(classicCookies.length).toBeGreaterThan(0);
  });

  it("every cookie id is unique", () => {
    const ids = allCookies.map((c) => c.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it("category field matches the array a cookie belongs to", () => {
    expect(weeklyCookies.every((c) => c.category === "weekly")).toBe(true);
    expect(classicCookies.every((c) => c.category === "classic")).toBe(true);
  });

  it("colors are valid hex values", () => {
    for (const c of allCookies) {
      expect(c.backgroundColor, c.name).toMatch(HEX);
      expect(c.textColor, c.name).toMatch(HEX);
    }
  });

  it("image urls are https", () => {
    for (const c of allCookies) {
      expect(c.image, c.name).toMatch(/^https:\/\//);
    }
  });

  it("required text fields are non-empty", () => {
    for (const c of allCookies) {
      expect(c.name.trim()).not.toBe("");
      expect(c.description.trim()).not.toBe("");
    }
  });

  it("weeklyDateRange is set", () => {
    expect(weeklyDateRange.trim()).not.toBe("");
  });
});
