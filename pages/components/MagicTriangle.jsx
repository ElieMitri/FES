import Image from "next/image";
import magicTriangle from "../../src/assets/magicTriangle.PNG";

export default function MagicTriangle() {
  return (
    <section id="magic_triangle">
      <div className="container">
        <div className="row">
          <div className="magicTriangle__wrapper">
            <figure className="magicTriangle__image--wrapper">
              <Image alt="" className="magicTriangle__image" src={magicTriangle} />
            </figure>
            <div className="magicTriangle__intro--wrapper">
              <h1 className="magicTriangle__intro--title">
                Introducing the <span className="purple">magic triangle</span>{" "}
                ...
              </h1>
              <div className="line"></div>
              <p className="magicTriangle__para">
                With the rise of technology and digitalisation, coding skills
                are crucial in 2023. Companies are in desperate need for talents
                that can create new solutions for them and are willing to pay
                them well.
              </p>
              <p className="magicTriangle__para">
                Not only is this field lucrative but it also offers an abundance
                of opportunities to work remotely with dynamic teams around the
                world.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
