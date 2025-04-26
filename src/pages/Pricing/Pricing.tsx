import { useState } from 'react'
import PlanToggle from '@/components/pricing/PlanToggle'
import BetaAnnouncement from '@/components/common/BetaAnnouncement'

export default function Pricing() {
  const [isYearly, setIsYearly] = useState(false)

  // Feature data for the comparison table
  const features = [
    {
      category: 'Unlimited Story Posting',
      plans: { basic: true, pro: true, business: true },
    },
    {
      category: 'Unlimited Photo Upload',
      plans: { basic: true, pro: true, business: true },
    },
    {
      category: 'Embedding Custom Content',
      plans: { basic: false, pro: true, business: true },
    },
    {
      category: 'Customize Metadata',
      plans: { basic: false, pro: true, business: true },
    },
    {
      category: 'Advanced Metrics',
      plans: { basic: false, pro: false, business: true },
    },
    {
      category: 'Photo Downloads',
      plans: { basic: false, pro: false, business: true },
    },
    {
      category: 'Search Engine Indexing',
      plans: { basic: false, pro: false, business: true },
    },
    {
      category: 'Custom Analytics',
      plans: { basic: false, pro: false, business: true },
    },
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="md:flex bg-black md:h-[490px]">
        <div className="relative md:flex-1 md:order-1 px-7 md:px-14 lg:px-28 py-14 md:py-36 text-white">
          {/* Gradient line for desktop */}
          <div className="top-0 md:top-[173px] left-0 absolute bg-gradient-to-r from-[#ffc593] via-[#bc7198] to-[#5a77ff] w-32 md:w-1.5 h-1.5 md:h-[144px]"></div>

          <h1 className="mb-5 font-bold text-3xl md:text-4xl uppercase tracking-wider">
            Pricing
          </h1>

          <p className="opacity-60 mb-6 md:mb-10">
            Create a your stories, Photosnap is a platform for photographers and
            visual storytellers. It&apos;s the simple way to create and share
            your photos.
          </p>
        </div>

        <div
          className="md:flex-1 md:order-0 bg-cover bg-center h-[294px] md:h-full"
          style={{
            backgroundImage: `url('/assets/images/pricing/desktop/hero.jpg')`,
          }}
        ></div>
      </section>

      {/* Pricing Plans */}
      <section className="px-8 md:px-10 lg:px-40 py-16 md:py-28">
        {/* Pricing Toggle */}
        <div className="flex justify-center mb-10 pb-5">
          <PlanToggle active={isYearly} onChange={setIsYearly} />
        </div>

        {/* Pricing Cards */}
        <div className="md:gap-x-8 lg:gap-x-8 space-y-6 md:space-y-0 md:grid md:grid-cols-3">
          {/* Basic Plan */}
          <div className="md:flex md:flex-col bg-[#f5f5f5] px-6 md:px-10 py-14 md:py-10 lg:py-14 text-center">
            <h2 className="font-bold md:text-3xl! lg:text-4xl!">Basic</h2>
            <p className="opacity-60 mt-5 md:mt-0 md:text-left">
              Includes basic usage of our platform. Recommended for new and
              aspiring photographers.
            </p>
            <p className="mt-10 font-bold text-4xl md:text-right tracking-wider">
              {isYearly ? '$190.00' : '$19.00'}
            </p>
            <p className="opacity-60 md:text-right">
              per {isYearly ? 'year' : 'month'}
            </p>
            <button className="bg-black hover:bg-[#dfdfdf] mt-10 md:mt-10 w-full h-10 font-bold text-white hover:text-black text-xs uppercase tracking-widest transition-colors duration-300">
              Pick Plan
            </button>
          </div>

          {/* Pro Plan */}
          <div className="relative md:flex md:flex-col bg-black lg:-mt-10 lg:-mb-10 px-6 md:px-10 py-14 md:py-10 lg:py-20 text-white">
            {/* Accent bar on top */}
            <div className="top-0 md:top-0 left-0 md:left-0 absolute bg-gradient-to-r md:bg-gradient-to-b from-[#ffc593] via-[#bc7198] to-[#5a77ff] w-full md:w-1.5 h-1.5 md:h-full"></div>

            <h2 className="font-bold md:text-3xl! lg:text-4xl!">Pro</h2>
            <p className="opacity-60 mt-5 md:mt-0 md:text-left">
              More advanced features available. Recommended for photography
              veterans and professionals.
            </p>
            <p className="mt-10 font-bold text-4xl md:text-right tracking-wider">
              {isYearly ? '$390.00' : '$39.00'}
            </p>
            <p className="opacity-60 md:text-right">
              per {isYearly ? 'year' : 'month'}
            </p>
            <button className="bg-white hover:bg-[#dfdfdf] mt-10 md:mt-10 w-full h-10 font-bold text-black text-xs uppercase tracking-widest transition-colors duration-300">
              Pick Plan
            </button>
          </div>

          {/* Business Plan */}
          <div className="md:flex md:flex-col bg-[#f5f5f5] px-6 md:px-10 py-14 md:py-10 lg:py-14 text-center">
            <h2 className="font-bold md:text-3xl! lg:text-4xl!">Business</h2>
            <p className="opacity-60 mt-5 md:mt-0 md:text-left">
              Additional features available such as more detailed metrics.
              Recommended for business owners.
            </p>
            <p className="mt-10 font-bold text-4xl md:text-right tracking-wider">
              {isYearly ? '$990.00' : '$99.00'}
            </p>
            <p className="opacity-60 md:text-right">
              per {isYearly ? 'year' : 'month'}
            </p>
            <button className="bg-black hover:bg-[#dfdfdf] mt-10 md:mt-10 w-full h-10 font-bold text-white hover:text-black text-xs uppercase tracking-widest transition-colors duration-300">
              Pick Plan
            </button>
          </div>
        </div>
      </section>

      {/* Feature Comparison */}
      <section className="px-8 md:px-10 lg:px-40 py-16 md:py-28">
        <h2 className="mb-4 font-bold text-4xl text-center">Compare</h2>

        <div className="overflow-x-auto">
          <table className="mx-auto mt-8 w-full max-w-4xl">
            <thead>
              <tr className="border-b border-black">
                <th className="py-6 font-bold text-xs text-left uppercase tracking-widest">
                  The Features
                </th>
                <th className="py-6 font-bold text-xs text-center uppercase tracking-widest">
                  Basic
                </th>
                <th className="py-6 font-bold text-xs text-center uppercase tracking-widest">
                  Pro
                </th>
                <th className="py-6 font-bold text-xs text-center uppercase tracking-widest">
                  Business
                </th>
              </tr>
            </thead>
            <tbody>
              {features.map((feature, index) => (
                <tr key={index} className="border-gray-200 border-b">
                  <th className="py-6 font-bold text-xs text-left uppercase tracking-widest">
                    {feature.category}
                  </th>
                  <td className="py-6 text-center">
                    {feature.plans.basic && (
                      <img
                        src="/assets/images/pricing/desktop/check.svg"
                        alt="Included"
                        className="inline-block"
                      />
                    )}
                  </td>
                  <td className="py-6 text-center">
                    {feature.plans.pro && (
                      <img
                        src="/assets/images/pricing/desktop/check.svg"
                        alt="Included"
                        className="inline-block"
                      />
                    )}
                  </td>
                  <td className="py-6 text-center">
                    {feature.plans.business && (
                      <img
                        src="/assets/images/pricing/desktop/check.svg"
                        alt="Included"
                        className="inline-block"
                      />
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Beta Announcement Banner */}
      <BetaAnnouncement />
    </>
  )
}
