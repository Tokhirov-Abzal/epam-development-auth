import Signup from "./component/Signup";
import { Container } from "react-bootstrap";
import { AuthProvider } from "./context/AuthContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Dashboard from "./component/Dashboard";
import Login from "./component/Login";
function App() {
  return (
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{
        minHeight: "100vh",
      }}
    >
      <div className="w-100" style={{ maxWidth: "500px" }}>
        <Router>
          <AuthProvider>
            <Switch>
              <Route exact path="/" component={Signup} />
              <Route path="/login" component={Login} />
            </Switch>
          </AuthProvider>
        </Router>
      </div>
    </Container>
  );
}

export default App;
