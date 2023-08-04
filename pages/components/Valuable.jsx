import ValuableSteps from "./ValuableSteps";

export default function Valuable() {
  return (
    <section id="valuable">
      <div className="container">
        <div className="row">
          <div className="valuable__wrapper">
            <div className="valuable__intro">
              <h1 className="valuable__title">
                Learn today’s most <span className="purple">valuable</span>{" "}
                skill.
              </h1>
              <div className="line"></div>
              <p className="valuable__para">
                We ensure you’ll land a job and won’t give up along the way.
              </p>
            </div>
            <div className="valuable__steps">
              <ValuableSteps
                number={1}
                title="Fresh Start"
                subtitle="You’re not alone in feeling stuck in a career that’s unfulfilling. It’s time to make a change and start a new chapter. "
              />
              <ValuableSteps
                number={2}
                title="Step-by-step structure"
                subtitle="Frontend Simplified gives you a step-by-step approach to starting from scratch ensuring you stay engaged and motivated throughout the process."
              />
              <ValuableSteps
                number={3}
                title="Perfect Mix of Theory & Practise"
                subtitle="We blend structured learning modules with hands-on practical exercises, to ensure our students gain valuable, applicable skills that can be immediately put into action."
              />
              <ValuableSteps
                number={4}
                title="We keep you accountable"
                subtitle="As a student, you’re joining the Frontend Simplified community who will keep you accountable and ensure you stay focused on your goals."
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
