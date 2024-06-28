import "./App.css";

function App() {
  return (
    <>
      <div className="container">
        <iframe
          style={{ width: "90vw", height: "90vh" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          src="https://staging-booking.nailsoft.com/login?merchant_id=1000&token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJtZXJjaGFudElkIjoiMTAwMCIsImRpZ2l0YWxUeXBlIjoiYm9va2luZ19wbHVnaW4iLCJyb2xlIjoiRGlnaXRhbFdlYnNpdGUiLCJuYmYiOjE3MDY3NzI5MTIsImV4cCI6MjAyMjM5MjExMiwiaWF0IjoxNzA2NzcyOTEyLCJpc3MiOiJodHRwczovL3N0YWdpbmctYXBpLm5haWxzb2Z0LmNvbS9hcGkvIiwiYXVkIjoiTlNfQVBJX0NsaWVudCJ9.ZTYxBSwgMI3eDX-Y_TmUA3eH6kVz5hz8tjw9QmjOwAk"
        ></iframe>
      </div>
    </>
  );
}

export default App;
