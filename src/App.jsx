import React from "react";
import "./App.css";
import Section from "./components/section";
import Footer from "./components/footer";

function App() {
  return (
    <div className="app">
      <header className="app-header">
        Nav Menu here linking to the ids of the various sections
      </header>
      <Section id="section1">Stuff here</Section>
      <Section id="section2">Stuff here</Section>
      <Section id="section3">Stuff here</Section>
      <Footer />
    </div>
  );
}

export default App;
