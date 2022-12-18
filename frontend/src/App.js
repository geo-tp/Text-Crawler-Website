import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { HomePage } from "./pages/HomePage";
import { Searchpage } from "./pages/SearchPage";
import { SourcePage } from "./pages/SourcePage";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/sources" element={<SourcePage />} />
            <Route path="/search/:query" element={<Searchpage />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </QueryClientProvider>
    </div>
  );
}

export default App;
