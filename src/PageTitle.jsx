function PageTitle() {
  return (
    <div>
      <h1 className="font-mono text-3xl font-medium tracking-tighter">
        Motion Craft
      </h1>
      <p className="font-light text-gray-500">
        I'm{" "}
        <a
          href="https://abhishekkc.framer.website/"
          className="hover:underline"
        >
          Abhishek
        </a>{" "}
        & this is my playground where I create micro-interactions using react,
        tailwind & framer motion.
      </p>
    </div>
  );
}

export default PageTitle;
