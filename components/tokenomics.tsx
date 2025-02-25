import Image from "next/image";
import BlurredShapeGray from "@/public/images/blurred-shape-gray.svg";
import BlurredShape from "@/public/images/blurred-shape.svg";

export default function Tokenomics() {
  return (
    <section className="relative">
      <div
        className="pointer-events-none absolute left-1/2 top-0 -z-10 -mt-20 -translate-x-1/2"
        aria-hidden="true"
      >
        <Image
          className="max-w-none"
          src={BlurredShapeGray}
          width={760}
          height={668}
          alt="Blurred shape"
        />
      </div>
      <div
        className="pointer-events-none absolute bottom-0 left-1/2 -z-10 -mb-80 -translate-x-[120%] opacity-50"
        aria-hidden="true"
      >
        <Image
          className="max-w-none"
          src={BlurredShape}
          width={760}
          height={668}
          alt="Blurred shape"
        />
      </div>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="border-t py-12 [border-image:linear-gradient(to_right,transparent,--theme(--color-slate-400/.25),transparent)1] md:py-20">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-4 text-center md:pb-12">
            <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-linear-to-r before:from-transparent before:to-indigo-200/50 after:h-px after:w-8 after:bg-linear-to-l after:from-transparent after:to-indigo-200/50">
              <span className="inline-flex bg-linear-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent">
              FAQ  
              </span>
            </div>
            <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
              A bit more details
            </h2>
          </div>
          {/* Items */}
          <div className="mx-auto grid max-w-sm gap-12 sm:max-w-none sm:grid-cols-2 md:gap-x-14 md:gap-y-16 lg:grid-cols-3">
            <article>
              <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-linear-to-r before:from-transparent before:to-indigo-200/50 after:h-px after:w-8 after:bg-linear-to-l after:from-transparent after:to-indigo-200/50">
              <span className="mb-3 font-nacelle font-bold bg-linear-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent">1</span>
              </div>
              <h3 className="mb-1 font-nacelle text-[1rem] font-semibold text-gray-200">
                What are the Player Tokens?
              </h3>
              <p className="text-indigo-200/65">
              Paired with USDC in custom AMM pools on Avalanche. Performance-linked fees: lower on buys, higher on sells, encouraging long-term holding.
              </p>
            </article>
            <article>
              <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-linear-to-r before:from-transparent before:to-indigo-200/50 after:h-px after:w-8 after:bg-linear-to-l after:from-transparent after:to-indigo-200/50">
              <span className="mb-3 font-nacelle font-bold bg-linear-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent">2</span>
              </div>
              <h3 className="mb-1 font-nacelle text-[1rem] font-semibold text-gray-200">
              What is SCOUTI (Governance Token)?
              </h3>
              <p className="text-indigo-200/65">
                Early adopters receive SCOUTI tokens over a multi-year period, all recorded on Avalanche’s efficient blockchain. A portion of the platform’s trading fees is used to regularly buy back and burn SCOUTI, enhancing its scarcity and value over time—again, with rapid, low-cost settlements thanks to Avalanche.
              </p>
            </article>
            <article>
            <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-linear-to-r before:from-transparent before:to-indigo-200/50 after:h-px after:w-8 after:bg-linear-to-l after:from-transparent after:to-indigo-200/50">
              <span className="mb-3 font-nacelle font-bold bg-linear-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent">3</span>
              </div>
              <h3 className="mb-1 font-nacelle text-[1rem] font-semibold text-gray-200">
                Which sports you will support?
              </h3>
              <p className="text-indigo-200/65">
              We are aiming at Multi-Sport Coverage but we will add sports on iterations starting with Football, basketball, tennis and so on.
              </p>
            </article>
            <article>
              <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-linear-to-r before:from-transparent before:to-indigo-200/50 after:h-px after:w-8 after:bg-linear-to-l after:from-transparent after:to-indigo-200/50">
              <span className="mb-3 font-nacelle font-bold bg-linear-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent">4</span>
              </div>
              <h3 className="mb-1 font-nacelle text-[1rem] font-semibold text-gray-200">
                Why Avalanche?
              </h3>
              <p className="text-indigo-200/65">
                Primaraliy because high-speed, low-fee transactions for buying, selling, and staking.
              </p>
            </article>
            <article>
              <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-linear-to-r before:from-transparent before:to-indigo-200/50 after:h-px after:w-8 after:bg-linear-to-l after:from-transparent after:to-indigo-200/50">
              <span className="mb-3 font-nacelle font-bold bg-linear-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent">5</span>
              </div>
              <h3 className="mb-1 font-nacelle text-[1rem] font-semibold text-gray-200">
                How real life performance is integrated?
              </h3>
              <p className="text-indigo-200/65">
              Live data ensures your investments reflect actual events on the field or court. We are aiming to use only trusted and high tier game statistics providers to feed in data into our contracts.
              </p>
            </article>
            <article>
              <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-linear-to-r before:from-transparent before:to-indigo-200/50 after:h-px after:w-8 after:bg-linear-to-l after:from-transparent after:to-indigo-200/50">
              <span className="mb-3 font-nacelle font-bold bg-linear-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent">6</span>
              </div>
              <h3 className="mb-1 font-nacelle text-[1rem] font-semibold text-gray-200">
                Are you planning a DAO?
              </h3>
              <p className="text-indigo-200/65">
              Yes, that's why we need SCOUTI. Hold SCOUTI to vote on new features and shape the ecosystem’s future. For example, community can decide how tokens from the treasury will be used.
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
