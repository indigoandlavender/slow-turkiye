import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="bg-[#0a0a0a] text-white min-h-screen">
      {/* Hero - Full viewport */}
      <section className="min-h-screen flex flex-col justify-center relative">
        <div className="absolute inset-0 bg-[url('/grain.png')] opacity-[0.03] pointer-events-none" />
        
        <div className="container mx-auto px-6 lg:px-16 py-32">
          <div className="max-w-5xl">
            <p className="text-xs tracking-[0.4em] uppercase text-white/40 mb-8">
              Slow Türkiye
            </p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif leading-[1.1] mb-8">
              We don't sell tours.
              <br />
              <span className="text-white/40">We solve a problem.</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/60 max-w-2xl leading-relaxed">
              The problem is this: Türkiye is impossible to do well on your own. Too vast. Too complex. Too many layers of history fighting for attention.
            </p>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2">
          <div className="w-px h-16 bg-gradient-to-b from-white/0 via-white/20 to-white/0" />
        </div>
      </section>

      {/* The Problem - Two column */}
      <section className="py-24 md:py-32 border-t border-white/10">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif mb-6">The Problem</h2>
            </div>
            <div className="space-y-6 text-white/60 text-lg leading-relaxed">
              <p>
                You've seen the photos. The balloons over Cappadocia. The Blue Mosque at sunset. The turquoise coast.
              </p>
              <p>
                What you haven't seen: the 47 tour buses arriving at Pamukkale before 9am. The "authentic" carpet demonstration that's actually a 3-hour sales pitch. The cruise ship crowds turning Ephesus into a theme park.
              </p>
              <p>
                The standard Türkiye trip is a masterclass in missing the point. You see everything and experience nothing. You take a thousand photos and remember none of them.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pull Quote */}
      <section className="py-20 md:py-28 bg-[#0d0d0d] border-y border-white/10">
        <div className="container mx-auto px-6 lg:px-16 max-w-4xl text-center">
          <p className="text-2xl md:text-3xl lg:text-4xl font-serif italic text-white/80 leading-relaxed">
            "The best guide in Cappadocia doesn't work for a tour company. He's a retired geology professor who only takes guests he likes."
          </p>
        </div>
      </section>

      {/* The People Who Stayed */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-serif mb-6">The People Who Stayed</h2>
            <p className="text-white/60 text-lg leading-relaxed">
              Twenty years of living in this country taught us something the guidebooks don't mention: the most interesting people in Türkiye are the ones who chose to stay.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12 max-w-5xl mx-auto">
            <div className="md:mt-24">
              <p className="text-white/60 leading-relaxed">
                The textile merchant in the Grand Bazaar whose family has held the same shop for six generations—and who will tell you which "antique" dealers are actually selling factory reproductions from Bulgaria.
              </p>
            </div>
            <div>
              <p className="text-white/60 leading-relaxed">
                The olive oil producer in the Aegean hills who understands that Turkish breakfast isn't a meal—it's a philosophy. Two hours minimum. Forty small dishes. No rushing.
              </p>
            </div>
            <div>
              <p className="text-white/60 leading-relaxed">
                The archaeologist who has spent thirty years at Göbekli Tepe and can explain why this 12,000-year-old temple rewrites everything we thought we knew about human civilization.
              </p>
            </div>
            <div className="md:mt-24">
              <p className="text-white/60 leading-relaxed">
                The hammam keeper in a small Anatolian town whose family has tended the same steam room since the Ottomans—and who knows the difference between a tourist scrub and a real one.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Access - Dark inset */}
      <section className="py-24 md:py-32 bg-[#050505]">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif mb-8">The Access</h2>
            <div className="space-y-6 text-white/60 text-lg leading-relaxed">
              <p>
                These people don't advertise. They don't need to. Their reputations travel through networks that take decades to enter.
              </p>
              <p>
                We spent twenty years entering those networks. Learning who actually knows what they're talking about, and who's performing expertise for tips. Who serves the real thing, and who serves the version tourists expect.
              </p>
              <p>
                When you travel with us, you're not booking a tour. You're borrowing relationships that took two decades to build.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Know */}
      <section className="py-24 md:py-32 border-t border-white/10">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-serif mb-6">What We Know</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="border-l border-white/20 pl-6">
              <p className="text-white/60 text-sm leading-relaxed">
                Which cave hotel in Cappadocia was actually carved by monks in the 4th century, and which was carved by bulldozers in 2019.
              </p>
            </div>
            <div className="border-l border-white/20 pl-6">
              <p className="text-white/60 text-sm leading-relaxed">
                The unmarked door in Gaziantep that leads to the best baklava in a city obsessed with baklava—40 layers of phyllo, hand-stretched.
              </p>
            </div>
            <div className="border-l border-white/20 pl-6">
              <p className="text-white/60 text-sm leading-relaxed">
                Why the "tourist price" at the Spice Bazaar is 400% of the local price, and how to find the same saffron for what it's actually worth.
              </p>
            </div>
            <div className="border-l border-white/20 pl-6">
              <p className="text-white/60 text-sm leading-relaxed">
                The boat captain on the Turquoise Coast who knows where the underwater ruins are—and when to go so you have them to yourself.
              </p>
            </div>
            <div className="border-l border-white/20 pl-6">
              <p className="text-white/60 text-sm leading-relaxed">
                Which sunset viewpoint in Istanbul the photographers actually use (hint: it's not Galata Tower, and it doesn't cost anything).
              </p>
            </div>
            <div className="border-l border-white/20 pl-6">
              <p className="text-white/60 text-sm leading-relaxed">
                The difference between çay offered as hospitality and çay offered as a sales tactic—and how to accept the first without triggering the second.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who This Is For - Split screen */}
      <section className="border-t border-white/10">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Left - For */}
          <div className="bg-[#0d0d0d] p-12 md:p-16 lg:p-20">
            <h3 className="text-xs tracking-[0.3em] uppercase text-white/40 mb-8">This is for you if</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-4">
                <span className="text-white/40 mt-1">→</span>
                <span className="text-white/70">You want to understand Türkiye, not just photograph it</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-white/40 mt-1">→</span>
                <span className="text-white/70">You'd rather have one real conversation than fifty staged experiences</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-white/40 mt-1">→</span>
                <span className="text-white/70">You trust us to say "skip this famous thing, do this unknown thing instead"</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-white/40 mt-1">→</span>
                <span className="text-white/70">You have the budget for quality and the patience for depth</span>
              </li>
            </ul>
          </div>

          {/* Right - Not For */}
          <div className="bg-[#080808] p-12 md:p-16 lg:p-20">
            <h3 className="text-xs tracking-[0.3em] uppercase text-white/40 mb-8">This is not for you if</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-4">
                <span className="text-white/30 mt-1">×</span>
                <span className="text-white/50">You measure trips by attractions checked off</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-white/30 mt-1">×</span>
                <span className="text-white/50">You need the hot air balloon photo for Instagram</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-white/30 mt-1">×</span>
                <span className="text-white/50">You want the cheapest option available</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-white/30 mt-1">×</span>
                <span className="text-white/50">You expect five-star predictability everywhere</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 border-t border-white/10">
        <div className="container mx-auto px-6 lg:px-16 text-center">
          <p className="text-white/40 text-sm tracking-[0.2em] uppercase mb-6">
            Ready to begin?
          </p>
          <h2 className="text-3xl md:text-4xl font-serif mb-8">
            Start with a conversation.
          </h2>
          <p className="text-white/50 max-w-xl mx-auto mb-12">
            No itinerary yet. No obligation. Just a conversation about what you're looking for and whether we're the right fit.
          </p>
          <Link
            href="/plan-your-trip"
            className="inline-block border border-white/20 px-12 py-5 text-xs tracking-[0.2em] uppercase hover:bg-white hover:text-[#0a0a0a] transition-colors"
          >
            Begin The Conversation
          </Link>
        </div>
      </section>
    </div>
  );
}
