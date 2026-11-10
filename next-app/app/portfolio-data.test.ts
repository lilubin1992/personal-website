import { describe, expect, it } from "vitest"

import { contactEmail, packages, portfolioImages } from "./portfolio-data"

describe("portfolio content", () => {
  it("keeps the selected work and pricing content complete", () => {
    expect(portfolioImages).toHaveLength(6)
    expect(
      portfolioImages.every((image) =>
        image.src.startsWith("https://images.unsplash.com/")
      )
    ).toBe(true)
    expect(packages).toHaveLength(3)
    expect(contactEmail).toMatch(/^[^@\s]+@[^@\s]+\.[^@\s]+$/)
  })
})
