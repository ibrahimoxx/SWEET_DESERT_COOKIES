import { describe, it, expect } from "vitest";
import { stores } from "./stores";

describe("stores data", () => {
  it("has stores", () => {
    expect(stores.length).toBeGreaterThan(0);
  });

  it("every store id is unique", () => {
    const ids = stores.map((s) => s.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it("coordinates are within valid earth ranges", () => {
    for (const s of stores) {
      expect(s.lat, `${s.name} lat`).toBeGreaterThanOrEqual(-90);
      expect(s.lat, `${s.name} lat`).toBeLessThanOrEqual(90);
      expect(s.lng, `${s.name} lng`).toBeGreaterThanOrEqual(-180);
      expect(s.lng, `${s.name} lng`).toBeLessThanOrEqual(180);
    }
  });

  it("address fields are non-empty", () => {
    for (const s of stores) {
      expect(s.name.trim()).not.toBe("");
      expect(s.address.trim()).not.toBe("");
      expect(s.city.trim()).not.toBe("");
      expect(s.state.trim()).not.toBe("");
      expect(s.zip.trim()).not.toBe("");
    }
  });
});
