import "../styles/globals.css";
import type { AppProps } from "next/app";
import SocketsProvider from "contexts/Socket.Context";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SocketsProvider>
      <Component {...pageProps} />
    </SocketsProvider>
  );
}

export default MyApp;
