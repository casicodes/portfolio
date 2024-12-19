import { Link } from "react-router-dom";
function Home() {
  return (
    <div className="flex flex-col gap-y-[80px]">
      <header>
        <div className="flex flex-col gap-y-16">
          <div className="flex flex-col gap-4">
            <h1 className="text-gray-800 text-2xl text-balance font-semibold">
              Abhishek KC
            </h1>
            <p className="text-gray-500 md:text-lg">
              Software designer focused on the intersection of design, UI
              development and micro-interactions to make products feel alive.
            </p>
            <p className="text-gray-500 md:text-lg">
              Currently at{" "}
              <a
                href="https://www.lyrebirdhealth.com/au"
                className="text-gray-800 font-medium"
              >
                Lyrebird Health
              </a>
              , shaping the future of healthcare by crafting experiences that
              improve clinical workflows.
            </p>
          </div>
        </div>
      </header>
      <div className="flex flex-col gap-4">
        <p className="font-mono text-xs text-gray-400 uppercase tracking-widest">
          Projects
        </p>
        <div className="flex flex-col gap-8">
          <Link
            to="/motion"
            className="md:text-lg capitalize font-medium flex flex-col gap-2 p-4 bg-white shadow-sm border border-gray-100 rounded-2xl hover:shadow-md transition-shadow duration-300"
          >
            <div className="flex flex-col gap-1">
              <h3 className="md:text-lg capitalize font-medium">
                Micro-interactions for web{" "}
                <span className="text-gray-400 font-normal">· 2023</span>{" "}
              </h3>
              <div className="flex flex-col gap-4">
                <p className="md:text-lg text-gray-500 font-normal">
                  Micro-interactions using react, tailwind & framer motion.
                </p>
              </div>
            </div>
          </Link>
          <div className="flex flex-col gap-1 p-4 bg-white shadow-sm border border-gray-100 rounded-2xl">
            <h3 className="md:text-lg capitalize font-medium">
              AMR e-commerce mobile app{" "}
              <span className="text-gray-400 font-normal">
                · 2023 ·{" "}
                <span className="text-sm leading-none bg-emerald-50 text-emerald-600 font-mono py-1 px-2 rounded-full">
                  Coming soon
                </span>
              </span>{" "}
            </h3>
            <div className="flex flex-col gap-4">
              <p className="md:text-lg text-gray-500">
                Designed and shipped the first version of mobile app that led to
                161k first week sales, improved retention (+82.5%), reduced
                abandonment rate (-11.5%) and service tickets (-50%).
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-1 p-4 bg-white shadow-sm border border-gray-100 rounded-2xl">
            <h3 className="md:text-lg capitalize font-medium">
              AMR e-commerce website{" "}
              <span className="text-gray-400 font-normal">
                · 2022 ·{" "}
                <span className="text-sm leading-none bg-emerald-50 text-emerald-600 font-mono py-1 px-2 rounded-full">
                  Coming soon
                </span>
              </span>{" "}
            </h3>
            <div className="flex flex-col gap-4">
              <p className="md:text-lg text-gray-500">
                Helped migrate, redesign and develop e-commerce platform,
                resulting in increase in sales (+200%), average order value
                (+77%) and improved workflow for the team.
              </p>
            </div>
          </div>
        </div>
      </div>

      <footer>
        <div className="flex flex-col gap-3">
          <p className="font-mono text-xs text-gray-400 uppercase tracking-widest">
            Connect
          </p>
          <div className="flex gap-6">
            {/* <a href="" className="text-gray-500 text-lg">
       About
     </a> */}
            {/* <Link to="/motion" className="text-gray-500 text-lg">
       Explore my motion library
     </Link> */}
            <a
              href="mailto:sendtokcabhi@gmail.com"
              className="md:text-lg font-medium"
            >
              Email
            </a>
            <a
              href="https://www.linkedin.com/in/abhishekkc/"
              className="md:text-lg font-medium"
            >
              Linkedin
            </a>
            <a
              href="https://drive.google.com/file/d/1wfwL_ZnZ_bUw_1md56VBe8LyUcnBCWIR/view?usp=sharing"
              className="md:text-lg font-medium"
            >
              Resume
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;
