import React from "react";
import Header from "./utils/header";
import Body from "./Components/body";
import Footer from "./utils/footer";

function createData(state1, name, state2, state3, state4) {
  return { state1, name, state2, state3, state4 };
}

const records = [
  createData(false, "FIORENTINA - AC MILAN", false, false, false),
  createData(false, "FIORENTINA - AC MILAN", false, false, false),
  createData(false, "FIORENTINA - UDINESE", false, false, false),
  createData(false, "FIORENTINA - UDINESE", false, false, false),
  createData(false, "FIORENTINA - UDINESE", false, false, false),
  createData(false, "FIORENTINA - UDINESE", false, false, false),
  createData(false, "FIORENTINA - UDINESE", false, false, false),
  createData(false, "FIORENTINA - UDINESE", false, false, false),
  createData(false, "FIORENTINA - UDINESE", false, false, false),
  createData(false, "FIORENTINA - UDINESE", false, false, false),
  createData(false, "FIORENTINA - UDINESE", false, false, false),
  createData(false, "FIORENTINA - UDINESE", false, false, false),
  createData(false, "FIORENTINA - UDINESE", false, false, false),
  createData(false, "FIORENTINA - UDINESE", false, false, false),
  createData(false, "FIORENTINA - UDINESE", false, false, false),
  createData(false, "FIORENTINA - UDINESE", false, false, false),
  createData(false, "FIORENTINA - UDINESE", false, false, false),
  createData(false, "FIORENTINA - UDINESE", false, false, false),
  createData(false, "FIORENTINA - UDINESE", false, false, false),
  createData(false, "FIORENTINA - UDINESE", false, false, false),
];

function App() {
  const [rows, setRows] = React.useState(records);

  return (
    <div>
      <Header />
      <Body rows={rows} setRows={setRows} />
      <Footer rows={rows} />
    </div>
  );
}

export default App;
