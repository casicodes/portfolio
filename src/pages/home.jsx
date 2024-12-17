function Home() {
  return (
    <div className="playground flex flex-col gap-6">
      <div className="playground-desc">
        <h1 className="text-lg">Section title</h1>
        <p className="font-light text-gray-500">Section description</p>
      </div>
      <div className="playground-area rounded-2xl min-h-80 bg-white border-dashed border border-gray-300 gap-4 flex flex-col items-center justify-center">
        <p>Content goes here</p>
      </div>
    </div>
  );
}

export default Home;
