import { it, describe, expect } from "vitest"
import { mount } from "@vue/test-utils"
import SButton from "./SButton.vue"

describe("button", async () => {
  it('has root element "button"', async () => {
    const wrapper = mount(SButton)

    expect(wrapper.element.tagName).toBe("BUTTON")
  })

  it('has default classes if property "type" is not defined', async () => {
    const wrapper = mount(SButton)

    expect(wrapper.find("button").classes().join(" ")).toBe(
      "rounded-md text-gray-500 hover:border-2 border-blue-300 active:bg-blue-300"
    )
  })

  it('has default classes if property "type" is not right', async () => {
    const wrapper = mount(SButton, {
      props: {
        type: "priamairy",
      },
    })

    expect(wrapper.find("button").classes().join(" ")).toBe(
      "rounded-md text-gray-500 hover:border-2 border-blue-300 active:bg-blue-300"
    )
  })
  
  it('has disabled classes if property "disabled" is true when type is defined', async () => {
    const wrapper = mount(SButton, {
      props: {
        type: "primary",
        disabled: true
      },
    })

    expect(wrapper.find("button").classes().join(" ")).toBe(
      "rounded-md bg-gray-200 text-gray-400 cursor-not-allowed"
    )
  })
  
  it('has disabled classes if property "disabled" is true when type is not defined', async () => {
    const wrapper = mount(SButton, {
      props: {
        disabled: true
      },
    })

    expect(wrapper.find("button").classes().join(" ")).toBe(
      "rounded-md bg-gray-200 text-gray-400 cursor-not-allowed"
    )
  })
})
