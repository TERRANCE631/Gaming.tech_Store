import { RouteList } from "./Routes/RouteList";
import { Footer, Header } from "./layout"

function App() {
  return (
    <div className="overflow-hidden bg-slate-100">
      <Header />
      <main>
        <RouteList />
      </main>
      <Footer />
    </div>
  );
}

export default App;
