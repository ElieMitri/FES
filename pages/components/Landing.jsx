import landingImage from "../../src/assets/landing__image.PNG";
import blob from "../../src/assets/landing-blob.18315fc.png"
import Image from "next/image";
import LandingFeatures from "./LandingFeatures";
import companies from "../../src/assets/companies.png"

export default function Landing() {
  return (
    <section id="landing">
      <Image
        src={blob}
        className="landing__blob"
        alt=""
      />
      <div className="container">
        <div className="row">
          <div className="landing__wrapper--top">
            <div className="landing__content">
              <h1 className="landing__title">
                Learn how to code & land a tech job in under 
                <span className="purple"> 12 weeks</span>
              </h1>
              <LandingFeatures text="Learn coding with no prior experience"/>
              <LandingFeatures text="Follow a structured roadmap to success"/>
              <LandingFeatures text="Build real-life web applications"/>
              <LandingFeatures text="Land your dream high-paying tech job"/>
              <div className="landing__button--wrapper">
                <button className="landing-get__started--btn">Get Started</button>
                <h1 className="landing__alert">(No Credit Card Required)</h1>
              </div>
            </div>
            <div className="landing__figure--wrapper">
              <figure className="landing__figure">
                <Image alt="" src={landingImage} className="landing__image"/>
              </figure>
            </div>
          </div>
          <figure className="companies__picture--wrapper">
            <Image priority alt="" src={companies}></Image>
          </figure>
        </div>
      </div>
    </section>
  );
}
