import { LoaderCircle } from "lucide-react";
function Grok() {
  return (
    <div className="playground flex flex-col gap-6">
      <div className="playground-desc">
        <h1 className="text-lg">Section title</h1>
        <p className="font-light text-gray-500">Section description</p>
      </div>
      <div className="playground-area rounded-2xl min-h-80 bg-white border-dashed border border-gray-300 gap-4 flex flex-col items-center justify-center">
        <div class="max-w-[400px] overflow-hidden bg-slate-100 flex flex-row gap-2 items-center p-4 rounded-xl relative">
          <div class="absolute top-0 right-0 left-0 bottom-0 backdrop-blur-[6px] bg-gradient-to-r from-white/60 via-white/30 to-white/0"></div>

          <span class="relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-loader-circle animate-spin"
            >
              <path d="M21 12a9 9 0 1 1-6.219-8.56"></path>
            </svg>
          </span>

          <div>
            <p class="text-lg relative">DeepSearch for 24 seconds</p>
            <p class="text-sm font-light">
              llms (large language models) are basically probability machines
              that predict the next token in a sequence based on absurd amounts.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Grok;
