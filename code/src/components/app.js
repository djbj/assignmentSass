import React from "react"

class App extends React.Component {

  render() {
    return (
      <div className="form-container">
        <div className="tab">Flyg</div>
        <form className="form">
          <div className="upper-part">
            <section>
              <div className="autosuggest">
                <label className="from">Flyg från</label>
                <input type="text" className="inputCities" placeholder="Var flyger du ifrån?" />
                {/* <button className="X">X</button> */}
                <div className="shortcut-cities">
                  <span>Stockolm</span>, <span>Göteborg</span>, eller <span>Malmö</span>
                </div>
              </div>
            </section>
            <section>
              <div className="autosuggest">
                <label className="from">Flyg till</label>
                <input type="text" className="inputCities" placeholder="Vart vill du resa?" />
                {/* <button className="X">X</button> */}
              </div>
            </section>
          </div>
          <div className="flight-details">
            <hr className="line" />
          </div>
          <div className="lower-part">
            <button className="enter">Sök och beställ</button>
            eller <span>avbryt</span>
          </div>
        </form>

      </div>
    )
  }

}

export default App
