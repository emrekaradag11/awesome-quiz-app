import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import '../assets/css/style.css'
import { Providers } from "./provider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head />
      <body>
        <main className="main">
          <div className="main-wrapper">
            <div className="main-inner">
              <Providers>{children}</Providers>
            </div>
          </div>
        </main>
      </body>
    </html>
  )
}
