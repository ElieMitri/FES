import Image from "next/image";
import khalil from "../../src/assets/khalil.dee8cd9.png";
import Perfections from "./Perfections";

export default function Solution() {
  return (
    <section id="solution">
      <div className="container">
        <div className="row">
          <div className="solution__wrapper">
            <figure className="khalil__image--wrapper">
              <Image alt="" className="khalil__image" src={khalil}></Image>
              {/* <h1 className="khalil">Khalil Poole</h1>
              <p className="khalil__sallary">$140,000</p>
              <p className="about__khalil">
                Multiplied his DoorDash income by six.
              </p>
              <div className="success__story">🚀 ALUMNI SUCCESS STORY</div> */}
            </figure>
            <div className="solution__text-wrapper">
              <h1 className="solution__title">
                The <span className="purple">solution</span>: Learn, practise &
                build.
              </h1>
              <div className="line"></div>
              <p className="solution__para">
                We provide a clear roadmap to learn the most in-demand coding
                skills and everything necessary to be competitive and land a
                high-paying coding job.
              </p>
              <div className="perfections">
                <Perfections text="Perfect the most in-demand coding skills to guarantee you can seamlessly build complex web applications and projects" />
                <Perfections text="Stand out from other coders by mastering the latest tech, making you extremely valuable in the marketplace" />
                <Perfections text="Strengthen your portfolio with real-life projects to gain hands-on experience and apply newly acquired skills" />
                <Perfections text="Remain held accountable and receive comprehensive answers from our instructors any time you’re stuck, ensuring your complete understanding of the material." />
              </div>
              <button className="solution__get--started-button">Get Started</button>
              <div className="solution__alert">(No Credit Card Required)</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
