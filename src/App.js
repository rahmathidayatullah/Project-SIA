import * as React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import SwitchRoute from "components/SwitchRoute";
import routes from "routes";
// import { listen } from "app/listener";

function App() {
  // React.useEffect(() => {
  //   listen();
  // }, []);
  return (
    <React.Suspense
      fallback={
        <div
          style={{
            textAlign: "center",
            marginTop: "150px",
          }}
        >
          <p>loading....</p>
        </div>
      }
    >
      <Router>
        <SwitchRoute routes={routes} />
      </Router>
    </React.Suspense>
  );
}

export default App;
