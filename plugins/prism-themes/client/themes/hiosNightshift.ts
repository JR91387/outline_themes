import type { ThemeDefinition } from "../../shared/types";

// HIOS — dark ("Nightshift"). The brand ink green becomes the reading surface and
// sand becomes the text. Plum is unreadable at this depth, so links use a
// lightened teal (5.4:1 on the surface, 7.4:1 on the canvas) rather than the raw
// ribbon value.
export const hiosNightshift: ThemeDefinition = {
  id: "hios-dark",
  name: "HIOS_Nightshift",
  group: "HIOS",
  mode: "dark",
  preview: "./hiosNightshift.png",
  colors: {
    canvas: "#14211a",
    surface: "#1f3b2e",
    surfaceMuted: "#182c22",
    sidebar: "#101a15",
    header: "#1f3b2e",
    text: "#ede6d7",
    textMuted: "#9db0a4",
    accent: "#3fbfbb",
    border: "#2c4a3b",
    codeBackground: "#182c22",
    tableHeader: "#182c22",
    calloutBackground: "#182c22",
  },
  typography: {
    ui: "'IBM Plex Sans', Inter, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif",
    content:
      "'IBM Plex Sans', Inter, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif",
    mono: "'IBM Plex Mono', SFMono-Regular, Consolas, monospace",
  },
  layout: {
    density: 1,
    contentWidth: "800px",
    sidebarWidth: "260px",
    radius: "4px",
  },
};
