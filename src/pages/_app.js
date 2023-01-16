import LayoutWithHeader from "@/components/layoutWithHeader/layoutWithHeader";
import { AuthProvider } from "@/hoc/AuthContext.js";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  const renderWithoutHeader =
    Component.getLayout ||
    ((page) => <LayoutWithHeader>{page}</LayoutWithHeader>);
  return (
    <AuthProvider>
      {renderWithoutHeader(<Component {...pageProps} />)}
    </AuthProvider>
  );
}
