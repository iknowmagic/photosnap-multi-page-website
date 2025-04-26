interface StoryCardProps {
  title: string
  author: string
  image: string
  date?: string
}

export default function StoryCard({
  title,
  author,
  image,
  date,
}: StoryCardProps) {
  // Get the appropriate image path
  const imagePath = `/assets/images/stories/desktop/${image}`

  return (
    <div
      className="group relative bg-cover bg-no-repeat w-full h-[375px] md:h-[500px] text-white transition-transform hover:-translate-y-6 duration-300"
      style={{
        backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0.0001) 0.27%, rgba(0, 0, 0, 0.661222) 100%), url(${imagePath})`,
      }}
    >
      {/* Hover state bottom gradient line */}
      <div className="bottom-0 left-0 absolute bg-gradient-to-r from-[#ffc593] via-[#bc7198] to-[#5a77ff] w-full h-0 group-hover:h-1.5 transition-all duration-300"></div>

      <div className="bottom-0 left-0 absolute p-8 pb-10 w-full">
        {date && <div className="mb-1.5 text-sm">{date}</div>}

        <h3 className="mb-1 font-bold text-lg">{title}</h3>

        <p className="text-sm">by {author}</p>

        <div className="bg-white bg-opacity-25 my-4 w-full h-px"></div>

        <button className="flex justify-between items-center w-full font-bold text-xs uppercase tracking-widest cursor-pointer">
          Read Story
          <span className="w-11 h-3.5">
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
