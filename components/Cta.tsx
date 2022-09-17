import { url } from "inspector";
import React from "react";
import bg from "../img/cta-bg.png";

function Cta() {
  return (
    <section className="bg-white">
      <div className="cta container relative top-16 mx-auto flex flex-col items-center justify-between rounded-2xl bg-blueMain py-12 px-20 md:flex-row">
        {/* Text */}
        <div className="max-w-sm space-y-4">
          <h2 className="font-poppins text-4xl font-extrabold tracking-wide text-white">
            Get our pro offers
          </h2>
          <p className="font-light text-white">
            Create a visual identity for your company, and an overall brand
          </p>
        </div>

        <form className="mt-3 flex w-2/3 flex-col md:mt-0 md:w-1/3 md:flex-row">
          <input
            className="w-full rounded-sm py-4 text-center text-xs focus:outline-none md:w-full md:pl-6 md:pr-32 md:text-left md:text-darkGray-1"
            type="email"
            placeholder="Type your email here"
          />
          <button
            className="mt-3 rounded-sm bg-darkGray-2 py-3 text-xs text-white hover:bg-darkGray-1 focus:outline-none active:bg-darkGray-2 md:my-1 md:-ml-28 md:px-6"
            onClick={(e) => e.preventDefault()}
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}

export default Cta;
