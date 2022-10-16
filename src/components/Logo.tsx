

export function Logo() {
  return (
    <div className="App-logo-container">
      <img src={process.env.PUBLIC_URL + '/img/logo.png'} className="App-logo" alt="logo" />
    </div>
  )
};
