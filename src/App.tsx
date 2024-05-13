import "./App.css";

function App() {
  return (
    <>
      <div className="container">
        <iframe
          style={{ width: "90vw", height: "90vh" }}
          src="https://staging-giftcard.nailsoft.com/?merchant_id=681&token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJtZXJjaGFudElkIjoiNjgxIiwiZGlnaXRhbFR5cGUiOiJnaWZ0Y2FyZF9wbHVnaW4iLCJyb2xlIjoiR2lmdENhcmRXZWJzaXRlIiwibmJmIjoxNzE0MTA1MTE2LCJleHAiOjIwMjk2Mzc5MTYsImlhdCI6MTcxNDEwNTExNiwiaXNzIjoiaHR0cHM6Ly9zdGFnaW5nLWFwaS5uYWlsc29mdC5jb20vYXBpLyIsImF1ZCI6Ik5TX0FQSV9DbGllbnQifQ.dVGphB9tlkodQhO8TSA-Z65LzfZY6DTCmBcc1Ddvhgo"
        ></iframe>
      </div>
    </>
  );
}

export default App;
