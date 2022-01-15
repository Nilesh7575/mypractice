import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import Hoc1 from "./HOC/Hoc1";
// import Hoc from "./HOC/Hoc";
// import Counter from "./useReducer/Counter";
import TodoParent from "./ToDo/TodoParent";
import Navigationbar from "./RouteAssignment/Navigationbar";
import { BrowserRouter as Router, Route } from "react-router-dom";
// import RandomColor from "./RndmBgrndColor/RandomColor";
import FetchData from "./fetchFrom API/FetchData";
import { Col, Container, Row } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      {/* <Hoc1 name={"Nilesh"}/>
      <Hoc/> */}

      {/* <Counter/> */}

      <TodoParent/>

      {/* <Router>
        <Route path="/" component={Navigationbar} />
      </Router> */}

      {/* <RandomColor/> */}

      {/* <Container fluid>
        <Row>
        <Col><FetchData/></Col>
        </Row>
      </Container> */}
      
    </div>
  );
}

export default App;
