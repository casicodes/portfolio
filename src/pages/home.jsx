import { Link } from "react-router-dom";
function Home() {
  return (
    <header className="flex flex-col gap-y-[200px]">
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

        <div className="flex flex-col gap-4">
          <p className="font-mono text-xs text-gray-400 uppercase tracking-widest">
            Projects
          </p>
          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-2">
              <Link to="/motion" className="md:text-lg capitalize font-medium">
                Micro-interactions for web{" "}
                <span className="text-gray-400">· 2024</span>{" "}
              </Link>

              <div className="flex flex-col gap-4">
                <p className="md:text-lg text-gray-500">
                  Micro-interactions using react, tailwind & framer motion.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="md:text-lg capitalize font-medium">
                AMR Hair & Beauty mobile app{" "}
                <span className="text-gray-400">· 2023</span>{" "}
              </h3>
              <div className="flex flex-col gap-4">
                <p className="md:text-lg text-gray-500">
                  Designed and shipped the first version of mobile app that led
                  to 161k first week sales, improved retention (+82.5%), reduced
                  abandonment rate (-11.5%) and service tickets (-50%).
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="md:text-lg capitalize font-medium">
                AMR Hair & Beauty e-commerce website{" "}
                <span className="text-gray-400">· 2022</span>{" "}
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
              href="https://drive.google.com/file/d/1gql-u0tsQSIhNFqfIU1rWQK5E-LhAiHh/view"
              className="md:text-lg font-medium"
            >
              Resume
            </a>
          </div>
          <p className="font-mono text-gray-400 mt-4">
            Stay tuned, it's a work in progress
          </p>
        </div>
      </div>
    </header>
  );
}

export default Home;
