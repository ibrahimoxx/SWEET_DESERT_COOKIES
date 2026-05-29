import { describe, it, expect } from "vitest";
import {
  cateringFeatures,
  cateringEventTypes,
  cateringContact,
  cateringPackages,
} from "./catering";
import { brand } from "./brand";

describe("catering data", () => {
  it("has features and event types", () => {
    expect(cateringFeatures.length).toBeGreaterThan(0);
    expect(cateringEventTypes.length).toBeGreaterThan(0);
  });

  it("contact stays in sync with brand (single source of truth)", () => {
    expect(cateringContact.phone).toBe(brand.contact.phone);
    expect(cateringContact.phoneTel).toBe(brand.contact.phoneTel);
    expect(cateringContact.hours).toBe(brand.contact.hours);
  });

  it("package increment divides every package size evenly", () => {
    for (const size of cateringPackages.sizes) {
      expect(size % cateringPackages.increment).toBe(0);
    }
  });

  it("min size is not larger than the smallest package", () => {
    expect(cateringPackages.minSize).toBeLessThanOrEqual(
      Math.min(...cateringPackages.sizes)
    );
  });
});
