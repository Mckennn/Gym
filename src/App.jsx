import { Navbar, Home, Features, Offer, About, Contact } from "./components";

const App = () => (
  <div className="w-full overflow-hidden">
    <Navbar />
    <Home />
    <Features />
    <Offer />
    <About />
    <Contact />
  </div>
);

export default App;
