import LayoutWithHeader from "@/components/layoutWithHeader/layoutWithHeader";
import { AuthProvider } from "@/hoc/AuthContext.js";
import ProtectedRoutes from "@/hoc/ProtectedRoutes";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  const renderWithoutHeader =
    Component.getLayout ||
    ((page) => (
      <ProtectedRoutes>
        <LayoutWithHeader>{page}</LayoutWithHeader>
      </ProtectedRoutes>
    ));

  return (
    <AuthProvider>
      {renderWithoutHeader(<Component {...pageProps} />)}
    </AuthProvider>
  );
}
