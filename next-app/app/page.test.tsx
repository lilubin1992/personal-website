import { renderToStaticMarkup } from "react-dom/server"
import { describe, expect, it } from "vitest"

import Page from "./page"

describe("portfolio page", () => {
  it("renders the primary portfolio sections and contact action", () => {
    const html = renderToStaticMarkup(Page())
    const text = html.replace(/<[^>]*>/g, "")

    expect(text).toContain("Selected work")
    expect(text).toContain("Ways to work together")
    expect(text).toContain("hello@anaisrocha.studio")
    expect(html).toContain("mailto:hello@anaisrocha.studio")
  })
})
