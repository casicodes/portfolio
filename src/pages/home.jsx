import { Link } from "react-router-dom";
function Home() {
  return (
    <header className="flex flex-col gap-y-[200px]">
      <div className="flex flex-col gap-y-10">
        <div>
          <h1 className="text-gray-800 font-semibold text-xl">Abhishek KC</h1>
          <p className="text-gray-500 text-lg">
            Software designer at{" "}
            <a href="https://www.lyrebirdhealth.com/au">Lyrebird Health</a>
          </p>
        </div>

        <p className="text-lg text-balance">
          I focus on the intersection of design, UI development and
          micro-interactions to make products feel alive.
        </p>
        <p className="text-lg text-balance">
          In a world where AI is shaping how we build products, I believe
          attention to detail and thoughtful craftsmanship will be the key
          differentiators that set products and experiences apart.
        </p>
        <div className="flex gap-8">
          {/* <a href="" className="text-gray-500 text-lg">
            About
          </a> */}
          {/* <Link to="/motion" className="text-gray-500 text-lg">
            Explore my motion library
          </Link> */}
          <a
            href="mailto:sendtokcabhi@gmail.com"
            className="text-gray-500 text-lg"
          >
            Email
          </a>
          <a
            href="https://www.linkedin.com/in/abhishekkc/"
            className="text-gray-500 text-lg"
          >
            Linkedin
          </a>
        </div>
      </div>
      <p className="text-gray-500 font-light">
        Stay tuned...this site is still under construction.
      </p>
    </header>
  );
}

export default Home;
