import "tailwindcss/tailwind.css";
import "../styles/global.css";
import { ThemeProvider } from "../utils/context";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
