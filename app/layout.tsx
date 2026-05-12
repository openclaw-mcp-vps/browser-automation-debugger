import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "AutoDebug – Debug Failing Browser Automation Scripts Visually",
  description: "Record browser automation failures with visual playback. Pinpoint exactly where scripts break with DOM snapshots, timing analysis, and selector debugging."
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="444f1e37-a966-46d9-aa6c-617c443aaf0b"></script>
      </head>
      <body>{children}</body>
    </html>
  )
}
