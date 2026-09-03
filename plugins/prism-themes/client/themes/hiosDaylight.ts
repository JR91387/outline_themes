import type { ThemeDefinition } from "../../shared/types";

// HIOS — light ("Daylight"). Brand paper canvas under an ink header and sidebar,
// with the plum ribbon colour carrying links and actions. Colours are the tokens
// from the HIOS brand kit (media/brand/tokens.css); every text pair clears WCAG
// AA at 8:1 or better.
export const hiosDaylight: ThemeDefinition = {
  id: "hios-light",
  name: "HIOS_Daylight",
  group: "HIOS",
  mode: "light",
  preview: "./hiosDaylight.png",
  colors: {
    canvas: "#faf7f0",
    surface: "#ffffff",
    surfaceMuted: "#f1ebdd",
    sidebar: "#1f3b2e",
    header: "#1f3b2e",
    text: "#1f3b2e",
    textMuted: "#3e3e3e",
    accent: "#811638",
    border: "#ede6d7",
    codeBackground: "#f1ebdd",
    tableHeader: "#ede6d7",
    calloutBackground: "#ffffff",
  },
  typography: {
    ui: "'IBM Plex Sans', Inter, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif",
    content:
      "'IBM Plex Sans', Inter, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif",
    mono: "'IBM Plex Mono', SFMono-Regular, Consolas, monospace",
  },
  layout: {
    // Wide content and square corners: the HIOS reference pages carry five-column
    // tables, and the brand calls for sharp corners over rounded ones.
    density: 1,
    contentWidth: "800px",
    sidebarWidth: "260px",
    radius: "4px",
  },
};
