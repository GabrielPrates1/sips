import { Component } from "react";
import { Routes, Route } from "react-router-dom";
import SipNavigation from "./features/sip/routes";

export default class App extends Component {
      render() {
            return (
                  <Routes>
                        <Route path="/" element={<SipNavigation />} />
                  </Routes>
            );
      }
}
