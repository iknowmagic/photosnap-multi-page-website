export default function BetaAnnouncement() {
  return (
    <div
      className="relative md:grid md:grid-cols-2 bg-cover bg-no-repeat px-8 md:px-10 lg:px-40 py-10 md:py-9 text-white"
      style={{
        backgroundImage: `url('/assets/images/shared/desktop/bg-beta.jpg')`,
      }}
    >
      {/* Gradient overlay line */}
      <div className="top-0 left-0 absolute bg-gradient-to-r from-[#ffc593] via-[#bc7198] to-[#5a77ff] w-32 md:w-1.5 h-1.5 md:h-full"></div>

      <div className="md:col-span-2 lg:col-span-1">
        <h2 className="mb-3 md:mb-0 font-bold text-3xl md:text-4xl uppercase tracking-wider">
          We&apos;re in beta. Get your invite today!
        </h2>
      </div>

      <div className="lg:justify-self-end lg:self-center md:col-span-2 lg:col-span-1">
        <button className="flex items-center mt-3 font-bold text-xs hover:underline uppercase tracking-widest cursor-pointer">
          Get an Invite
          <span className="ml-4 w-11 h-3.5">
            <img
              src="/assets/images/shared/desktop/arrow.svg"
              alt="Arrow right"
              className="invert"
            />
          </span>
        </button>
      </div>
    </div>
  )
}
