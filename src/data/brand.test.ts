import { describe, it, expect } from "vitest";
import { brand } from "./brand";

describe("brand config", () => {
  it("has non-empty core identity fields", () => {
    expect(brand.name).toBeTruthy();
    expect(brand.legalName).toBeTruthy();
    expect(brand.wordmark).toBeTruthy();
    expect(brand.tagline).toBeTruthy();
  });

  it("has at least one founder", () => {
    expect(brand.founders.length).toBeGreaterThan(0);
  });

  it("uses a valid 4-digit founding year", () => {
    expect(brand.foundingYear).toMatch(/^\d{4}$/);
  });

  it("seo url is a valid absolute URL", () => {
    expect(() => new URL(brand.seo.url)).not.toThrow();
  });

  it("support email looks valid", () => {
    expect(brand.contact.supportEmail).toMatch(/^[^@\s]+@[^@\s]+\.[^@\s]+$/);
  });

  it("phoneTel contains digits only", () => {
    expect(brand.contact.phoneTel).toMatch(/^\d+$/);
  });

  it("app store links are https", () => {
    expect(brand.app.appStore).toMatch(/^https:\/\//);
    expect(brand.app.googlePlay).toMatch(/^https:\/\//);
  });
});
