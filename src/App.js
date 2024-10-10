import React from "react";
import { AppProvider } from "./context/Appcontext"; // This should be correct
import AppRoutes from "./Routes/Approutes"; // Correct path to AppRoutes

function App() {
  return (
    <div>
      <AppProvider>
        <AppRoutes />
      </AppProvider>
    </div>
  );
}

export default App;
