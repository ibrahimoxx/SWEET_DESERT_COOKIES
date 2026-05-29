import { describe, it, expect } from "vitest";
import {
  mainNavLinks,
  footerCompanyLinks,
  footerGetInvolvedLinks,
  socialLinks,
} from "./navigation";

describe("navigation links", () => {
  it("internal main nav links start with / and external are flagged + absolute", () => {
    for (const link of mainNavLinks) {
      if (link.external) {
        expect(link.href, link.label).toMatch(/^https?:\/\//);
      } else {
        expect(link.href, link.label).toMatch(/^\//);
      }
    }
  });

  it("footer links use internal paths", () => {
    for (const link of [...footerCompanyLinks, ...footerGetInvolvedLinks]) {
      expect(link.href, link.label).toMatch(/^\//);
    }
  });

  it("social links are https", () => {
    for (const s of socialLinks) {
      expect(s.href, s.label).toMatch(/^https:\/\//);
    }
  });

  it("social icon keys are unique", () => {
    const icons = socialLinks.map((s) => s.icon);
    expect(new Set(icons).size).toBe(icons.length);
  });
});
