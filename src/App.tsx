import { BrowserRouter, Route, Routes } from "react-router";
import LayoutMain from "./pages/layoutMain";
import PageComponents from "./pages/pageComponent";
import PageHome from "./pages/pageHome";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<LayoutMain />}>
          <Route index element={<PageHome />} />
          <Route path="/components" element={<PageComponents />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
