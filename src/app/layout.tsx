import ReduxProvider from "@/store/ReduxProvider";
import "./globals.css";
import "@mantine/core/styles.css";
import { ColorSchemeScript, MantineProvider } from "@mantine/core";
// Import styles of packages that you've installed.
// All packages except `@mantine/hooks` require styles imports

export const metadata = {
  title: "Jobshop app",
  description: "Job portal Application",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
      </head>
      <body>
        <ReduxProvider>
          <MantineProvider>{children}</MantineProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
