import { ReactNode } from 'react'

interface StoryPromoBoxProps {
  image: string
  title: ReactNode
  info: ReactNode
  invert?: boolean
}

export default function StoryPromoBox({
  image,
  title,
  info,
  invert = false,
}: StoryPromoBoxProps) {
  // Get the appropriate image path
  const imagePath = `/assets/images/home/desktop/${image}`

  return (
    <div
      className={`${invert ? 'md:flex md:flex-row-reverse' : 'md:flex'} md:h-[600px]`}
    >
      <div
        className="md:flex-1 bg-cover bg-no-repeat w-full h-[271px] md:h-full"
        style={{ backgroundImage: `url(${imagePath})` }}
        role="img"
        aria-label={`Image for ${title}`}
      ></div>

      <div className="flex flex-col md:flex-1 md:justify-center px-8 md:px-14 lg:px-28 py-14">
        <h2 className="pr-12 md:pr-10 font-bold text-3xl md:text-4xl uppercase tracking-wider">
          {title}
        </h2>

        <div className="opacity-60 mt-4 mb-6">{info}</div>

        <button className="flex items-center mt-2 md:mt-8 font-bold text-xs hover:underline uppercase tracking-widest cursor-pointer">
          View The Stories
          <span className="ml-4 w-11 h-3.5">
            <img
              src="/assets/images/shared/desktop/arrow.svg"
              alt="Arrow right"
            />
          </span>
        </button>
      </div>
    </div>
  )
}
