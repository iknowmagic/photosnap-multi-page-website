import StoryCard from '@/components/stories/StoryCard'

export default function Stories() {
  // Story data array for maintainability
  const stories = [
    {
      date: 'April 16th 2020',
      title: 'The Mountains',
      author: 'John Appleseed',
      image: 'mountains.jpg',
    },
    {
      date: 'April 14th 2020',
      title: 'Sunset Cityscapes',
      author: 'Benjamin Cruz',
      image: 'cityscapes.jpg',
    },
    {
      date: 'April 11th 2020',
      title: '18 Days Voyage',
      author: 'Alexei Borodin',
      image: '18-days-voyage.jpg',
    },
    {
      date: 'April 9th 2020',
      title: 'Architecturals',
      author: 'Samantha Brooke',
      image: 'architecturals.jpg',
    },
    {
      date: 'April 7th 2020',
      title: 'World Tour 2019',
      author: 'Timothy Wagner',
      image: 'world-tour.jpg',
    },
    {
      date: 'April 3rd 2020',
      title: 'Unforeseen Corners',
      author: 'William Malcolm',
      image: 'unforeseen-corners.jpg',
    },
    {
      date: 'March 29th 2020',
      title: 'King on Africa: Part II',
      author: 'Tim Hillenburg',
      image: 'king-on-africa.jpg',
    },
    {
      date: 'March 21st 2020',
      title: 'The Trip to Nowhere',
      author: 'Felicia Rourke',
      image: 'trip-to-nowhere.jpg',
    },
    {
      date: 'March 19th 2020',
      title: 'Rage of The Sea',
      author: 'Mohammed Abdul',
      image: 'rage-of-the-sea.jpg',
    },
    {
      date: 'March 16th 2020',
      title: 'Running Free',
      author: 'Michelle',
      image: 'running-free.jpg',
    },
    {
      date: 'March 11th 2020',
      title: 'Behind the Waves',
      author: 'Lamarr Wilson',
      image: 'behind-the-waves.jpg',
    },
    {
      date: 'March 9th 2020',
      title: 'Calm Waters',
      author: 'Samantha Brooke',
      image: 'calm-waters.jpg',
    },
    {
      date: 'March 5th 2020',
      title: 'The Milky Way',
      author: 'Benjamin Cruz',
      image: 'milky-way.jpg',
    },
    {
      date: 'March 4th 2020',
      title: 'Night at The Dark Forest',
      author: 'Mohammed Abdul',
      image: 'dark-forest.jpg',
    },
    {
      date: 'March 1st 2020',
      title: "Somwarpet's Beauty",
      author: 'Michelle',
      image: 'somwarpet.jpg',
    },
    {
      date: 'February 25th 2020',
      title: 'Land of Dreams',
      author: 'William Malcolm',
      image: 'land-of-dreams.jpg',
    },
  ]

  return (
    <>
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center text-white"
        style={{
          backgroundImage: `url('/assets/images/stories/desktop/moon-of-appalacia.jpg')`,
        }}
      >
        <div className="px-8 md:px-10 lg:px-28 py-14 md:py-32 lg:py-40 md:max-w-[760px] lg:max-w-[500px]">
          <p className="font-bold text-xs uppercase tracking-wider">
            Last month&#39;s featured story
          </p>

          <h1 className="my-4 font-bold text-3xl md:text-4xl uppercase tracking-wider">
            Hazy Full Moon of Appalachia
          </h1>

          <div className="flex mb-6">
            <span className="opacity-75 text-sm">March 2nd 2020</span>
            <span className="ml-2 text-sm">by John Appleseed</span>
          </div>

          <p className="opacity-60 mb-6">
            The dissected plateau area, while not actually made up of geological
            mountains, is popularly called &quot;mountains,&quot; especially in
            eastern Kentucky and West Virginia, and while the ridges are not
            high, the terrain is extremely rugged.
          </p>

          <button className="flex items-center font-bold text-xs hover:underline uppercase tracking-widest">
            Read the Story
            <span className="ml-4 w-11 h-3.5">
              <img
                src="/assets/images/shared/desktop/arrow.svg"
                alt=""
                className="invert"
              />
            </span>
          </button>
        </div>
      </section>

      {/* Stories Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {stories.map((story, index) => (
          <StoryCard
            key={index}
            title={story.title}
            author={story.author}
            image={story.image}
            date={story.date}
          />
        ))}
      </section>
    </>
  )
}
