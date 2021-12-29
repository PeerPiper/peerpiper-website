import { cubicOut, expoIn, cubicIn } from 'svelte/easing'

export function expand (node, params) {
  const {
    delay = 0,
    duration = 2500,
    easing = cubicOut
  } = params

  const w = parseFloat(window.getComputedStyle(node).strokeWidth)
  // t goes from 0 and 1
  // u from 1 - t.
  return {
    delay,
    duration,
    easing,
    css: (t, u) => {
      const eased = expoIn(t)

      return `opacity: ${eased}; stroke-width: ${w + u * 100};`
    }
  }
}

export function spin (node, { duration }) {
  return {
    duration,
    css: (t, u) => {
      const uneased = cubicIn(u)
      return `transform: rotate(${uneased * 360 * 3}deg);`
    }
  }
}

export function spinOut (node, { duration }) {
  return {
    duration,
    css: (t, u) => {
      const eased = cubicIn(t)
      return `transform: rotate(${0 + eased * 180}deg);opacity: ${eased}; `
    }
  }
}
