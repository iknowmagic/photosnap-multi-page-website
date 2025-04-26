import StoryPromoBox from '@/components/stories/StoryPromoBox'
import StoryCard from '@/components/stories/StoryCard'
import FeatureBox from '@/components/feature/FeatureBox'

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="md:flex bg-black md:h-[650px]">
        <div className="relative md:flex-1 md:order-1 px-7 md:px-14 lg:px-28 py-14 md:py-36 text-white">
          {/* Gradient line for desktop */}
          <div className="top-0 md:top-[172px] left-0 absolute bg-gradient-to-r from-[#ffc593] via-[#bc7198] to-[#5a77ff] w-32 md:w-1.5 h-1.5 md:h-[304px]"></div>

          <h1 className="mb-5 font-bold text-3xl md:text-4xl uppercase tracking-wider">
            Create and share your photo stories.
          </h1>

          <p className="opacity-60 mb-6 md:mb-10">
            Photosnap is a platform for photographers and visual storytellers.
            We make it easy to share photos, tell stories and connect with
            others.
          </p>

          <button className="flex items-center font-bold text-xs hover:underline uppercase tracking-widest cursor-pointer">
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

        <div
          className="md:flex-1 md:order-0 bg-cover bg-center h-[294px] md:h-full"
          style={{
            backgroundImage: `url('/assets/images/home/desktop/create-and-share.jpg')`,
          }}
          role="img"
          aria-label="Photographer with camera"
        ></div>
      </section>

      {/* Story Promo Sections */}
      <section>
        <StoryPromoBox
          image="beautiful-stories.jpg"
          title="Beautiful stories every time"
          info="We provide design templates to ensure your stories look terrific. Easily add photos, text, embed maps and media from other networks. Then share your story with everyone."
        />

        <StoryPromoBox
          image="designed-for-everyone.jpg"
          title="Designed for everyone"
          info="Photosnap can help you create stories that resonate with your audience. Our tool is designed for photographers of all levels, brands, businesses you name it."
          invert={true}
        />
      </section>

      {/* Stories Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        <StoryCard
          title="The Mountains"
          author="John Appleseed"
          image="mountains.jpg"
        />
        <StoryCard
          title="Sunset Cityscapes"
          author="Benjamin Cruz"
          image="cityscapes.jpg"
        />
        <StoryCard
          title="18 Days Voyage"
          author="Alexei Borodin"
          image="18-days-voyage.jpg"
        />
        <StoryCard
          title="Architecturals"
          author="Samantha Brooke"
          image="architecturals.jpg"
        />
      </section>

      {/* Features Section */}
      <section className="lg:gap-8 lg:grid lg:grid-cols-3 px-8 md:px-10 lg:px-40 py-20 md:py-28 lg:py-30">
        <FeatureBox title="100% Responsive" image="responsive.svg">
          No matter which the device you&apos;re on, our site is fully
          responsive and stories look beautiful on any screen.
        </FeatureBox>

        <FeatureBox title="No Photo Upload Limit" image="no-limit.svg">
          Our tool has no limits on uploads or bandwidth. Freely upload in bulk
          and share all of your stories in one go.
        </FeatureBox>

        <FeatureBox title="Available to Embed" image="embed.svg">
          Embed Tweets, Facebook posts, Instagram media, Vimeo or YouTube
          videos, Google Maps, and more.
        </FeatureBox>
      </section>
    </>
  )
}
