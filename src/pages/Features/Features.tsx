import FeatureBox from '@/components/feature/FeatureBox'

export default function Features() {
  return (
    <>
      {/* Hero Section */}
      <section className="md:flex bg-black md:h-[490px]">
        <div className="relative md:flex-1 md:order-1 px-7 md:px-14 lg:px-28 py-14 md:py-36 text-white">
          {/* Gradient line for desktop */}
          <div className="top-0 md:top-[173px] left-0 absolute bg-gradient-to-r from-[#ffc593] via-[#bc7198] to-[#5a77ff] w-32 md:w-1.5 h-1.5 md:h-[144px]"></div>

          <h1 className="mb-5 font-bold text-3xl md:text-4xl uppercase tracking-wider">
            Features
          </h1>

          <p className="opacity-60 mb-6 md:mb-10">
            We make sure all of our features are designed to be loved by every
            aspiring and even professional photograpers who wanted to share
            their stories.
          </p>
        </div>

        <div
          className="md:flex-1 md:order-0 bg-cover bg-center h-[294px] md:h-full"
          style={{
            backgroundImage: `url('/assets/images/features/desktop/hero.jpg')`,
          }}
          role="img"
          aria-label="Camera on tripod"
        ></div>
      </section>

      {/* Features Grid */}
      <section className="lg:gap-8 md:grid md:grid-cols-2 lg:grid-cols-3 px-8 md:px-10 lg:px-40 py-16 md:py-28 lg:py-30">
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

        <FeatureBox title="Custom Domain" image="custom-domain.svg">
          With Photosnap subscriptions you can host your stories on your own
          domain. You can also remove our branding!
        </FeatureBox>

        <FeatureBox title="Boost Your Exposure" image="boost-exposure.svg">
          Users that viewed your story or gallery can easily get notified of new
          and featured stories with our built in mailing list.
        </FeatureBox>

        <FeatureBox title="Drag & Drop Image" image="drag-drop.svg">
          Easily drag and drop your image and get beautiful shots everytime. No
          over the top tooling to add friction to creating stories.
        </FeatureBox>
      </section>
    </>
  )
}
