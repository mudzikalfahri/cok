import "tailwindcss/tailwind.css";
import "../styles/global.css";
import { ThemeProvider } from "../utils/context";
import { Toaster } from "react-hot-toast";
function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Toaster />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
