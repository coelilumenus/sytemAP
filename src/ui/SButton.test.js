import { it, describe, expect } from "vitest"
import { mount } from "@vue/test-utils"
import SButton from "./SButton.vue"

describe("button", async () => {
  it('has root element "button"', async () => {
    const wrapper = mount(SButton)
    expect(wrapper.element.tagName).toBe('BUTTON')
  })
})
