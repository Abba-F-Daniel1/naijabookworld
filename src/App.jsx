import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Layout from "./components/layout/Layout";
import AppRoutes from "./routes/AppRoutes";
import { Toaster } from "react-hot-toast";
import { BookstoreProvider } from "./context/BookstoreContext";

function AppContent() {
  return (
    <Router>
      <AnimatePresence mode="wait">
        <Layout>
          <AppRoutes />
        </Layout>
      </AnimatePresence>
      <Toaster position="bottom-right" />
    </Router>
  );
}

function App() {
  return (
    <BookstoreProvider>
      <AppContent />
    </BookstoreProvider>
  );
}

export default App;
