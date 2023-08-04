export default function ValuableSteps({ number, title, subtitle}) {
    return(
              <div className="step">
                <h1 className="step__number">{number}</h1>
                <h1 className="step__title">{title}</h1>
                <div className="step__subtitle">{subtitle}</div>
              </div>
    )
}