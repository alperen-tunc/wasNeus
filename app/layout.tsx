import { Metadata } from "next"

export const metadata: Metadata = {
    title: {
        absolute: "absolute title",
        default: "default title",
        template: " %s | template title",
    },
    description: "Alp hat das geschrieben"
 }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
      <header style={{
        backgroundColor: "lightblue",
        padding: "1rem",
      }}>
        <p>Header</p>
      </header>
      {children}
      <footer style={{
        backgroundColor: "ghostwhite",
        padding: "1rem"
      }}>
        <p>footer</p>
      </footer>
      </body>
    </html>
  )
}
