import { Link } from "react-router-dom";
function Home() {
  return (
    <header className="flex flex-col gap-y-[200px]">
      <div className="flex flex-col gap-y-8">
        <div>
          <h1 className="text-gray-800 font-medium text-lg">Abhishek KC</h1>
          <p className="text-gray-500 text-lg font-light">
            Software designer at Lyrebird Health
          </p>
        </div>
        <p className="text-lg font-light text-balance">
          I focus on the intersection of design, UI development and
          micro-interactions to make products feel alive.
        </p>
        <div className="flex gap-8">
          <Link to="/motion" className="text-gray-500 text-lg font-light">
            Explore my motion library
          </Link>
        </div>
      </div>
      <p>This site is still under construction</p>
    </header>
  );
}

export default Home;
