import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="Title">{"Use <table> tag"}</div>
      <table className="TableStyle">
        <thead>
          <tr>
            <td className="DataStyle">
              <span className="TextStyle">a</span>
            </td>
            <td className="DataStyle">
              <span className="TextStyle">b</span>
            </td>
            <td className="DataStyle">
              <span className="TextStyle">c</span>
            </td>
          </tr>
          <tr>
            <td className="DataStyle">
              <span className="TextStyle">d</span>
            </td>
            <td className="DataStyle">
              <span className="TextStyle">e</span>
            </td>
            <td className="DataStyle">
              <span className="TextStyle">f</span>
            </td>
          </tr>
        </thead>
      </table>

      <div className="EndBreak" />

      <div className="Title">{"Use <div> tag with display incline-block"}</div>
      <div className="TableStyleDiv">
        <div>
          <span className="DataStyleDiv">a</span>
          <span className="DataStyleDiv">b</span>
          <span className="DataStyleDiv">c</span>
        </div>
        <div className="Margin">
          <span className="DataStyleDiv">d</span>
          <span className="DataStyleDiv">e</span>
          <span className="DataStyleDiv">f</span>
        </div>
      </div>

      <div className="EndBreak" />

      <div className="Title">{"Use <div> tag with css property float"}</div>
      <div className="TableStyleDiv2">
        <div className="DataStyleDiv2">a</div>
        <div className="DataStyleDiv2">b</div>
        <div className="DataStyleDiv2">c</div>

        <div className="EndBreakTable" />

        <div className="DataStyleDiv2">d</div>
        <div className="DataStyleDiv2">e</div>
        <div className="DataStyleDiv2">f</div>
      </div>
    </div>
  );
}

export default App;
