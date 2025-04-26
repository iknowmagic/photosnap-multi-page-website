import { ReactNode } from 'react'

interface FeatureBoxProps {
  title: string
  image: string
  children: ReactNode
}

export default function FeatureBox({
  title,
  image,
  children,
}: FeatureBoxProps) {
  // Get image path for the feature icon
  const imagePath = `/images/features/desktop/${image}`

  return (
    <div className="flex flex-col justify-center items-center mb-9 md:mb-14 lg:mb-20 text-center">
      <div className="flex justify-center items-center w-[100px] h-20">
        <img src={imagePath} alt={title} />
      </div>

      <div className="mt-10">
        <h3 className="mb-4 font-bold text-lg">{title}</h3>
        <div className="opacity-60">{children}</div>
      </div>
    </div>
  )
}
