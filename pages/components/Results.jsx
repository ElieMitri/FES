export default function Results() {
  return (
    <section id="results">
      <div className="container">
        <div className="row flex__column">
          <h1 className="results__section--title">
            See real results in as little as <span className="purple">two</span>{" "}
            months.
          </h1>
          <div className="results__blocks--wrapper flex__row">
            <div className="results__block1 flex__column">
              <div className="results__block--title">100%</div>
              <div className="results__block--subtitle">
                GRADS LANDED INTERVIEWS
              </div>
            </div>
            <div className="results__line"></div>
            <div className="results__block2 flex__column">
              <div className="results__block--title">5 weeks</div>
              <div className="results__block--subtitle">
                TO BUILD A WINNER E-PORTFOLIO
              </div>
            </div>
            <div className="results__line"></div>
            <div className="results__block3 flex__column">
              <div className="results__block--title">$113,119*</div>
              <div className="results__block--subtitle">
                AVERAGE FRONTEND DEV SALARY
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
