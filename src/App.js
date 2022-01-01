import { About } from "./components/About/About";
import { Clients } from "./components/Clients/Clients";
import { Content } from "./components/Content/Content";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Services } from "./components/Services/Services";

function App() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12">
          <Header />
          <Content/>
          <About/>
          <Services/>
          <Clients/>
          <Footer/>
        </div>
      </div>
    </div>
  );
}

export default App;
