"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";

interface Place {
  slug: string;
  title: string;
  destination: string;
  category: string;
  address: string;
  openingHours: string;
  fees: string;
  notes: string;
  heroImage: string;
  heroCaption: string;
  excerpt: string;
  body: string;
  sources: string;
  tags: string;
}

interface Journey {
  slug: string;
  title: string;
  heroImage: string;
  description: string;
  shortDescription: string;
  durationDays: number;
  destinations: string;
  journeyType: string;
}

export default function PlaceDetailPage() {
  const params = useParams();
  const slug = params.slug as string;

  const [place, setPlace] = useState<Place | null>(null);
  const [relatedJourneys, setRelatedJourneys] = useState<Journey[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!slug) return;

    // Fetch place and journeys in parallel
    Promise.all([
      fetch(`/api/places/${slug}`).then((r) => r.json()),
      fetch("/api/journeys").then((r) => r.json()),
    ])
      .then(([placeData, journeysData]) => {
        if (placeData.success && placeData.place) {
          setPlace(placeData.place);

          // Filter journeys that include this destination, excluding epic journeys
          const destination = placeData.place.destination?.toLowerCase();
          if (destination && journeysData.journeys) {
            const related = journeysData.journeys.filter((j: Journey) => {
              const destinations = j.destinations?.toLowerCase() || "";
              const isEpic = j.journeyType === "epic";
              return destinations.includes(destination) && !isEpic;
            });
            setRelatedJourneys(related);
          }
        } else {
          setError(placeData.error || "Place not found");
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError("Failed to load place");
        setLoading(false);
      });
  }, [slug]);

  if (loading) {
    return (
      <div className="bg-[#0a0a0a] min-h-screen">
        <div className="flex justify-center items-center h-[60vh]">
          <div className="w-8 h-8 border-2 border-white/20 border-t-white rounded-full animate-spin" />
        </div>
      </div>
    );
  }

  if (error || !place) {
    return (
      <div className="bg-[#0a0a0a] min-h-screen text-white">
        <div className="flex flex-col justify-center items-center h-[60vh]">
          <p className="text-white/50 mb-4">{error || "Place not found"}</p>
          <Link href="/places" className="text-sm underline text-white/60 hover:text-white">
            Back to Places
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#0a0a0a] min-h-screen text-white">
      {/* Hero Image */}
      <section className="relative h-[60vh] md:h-[70vh]">
        {place.heroImage ? (
          <Image
            src={place.heroImage}
            alt={place.title}
            fill
            className="object-cover"
            priority
          />
        ) : (
          <div className="absolute inset-0 bg-white/5" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-[#0a0a0a]/30" />

        {/* Back button */}
        <div className="absolute top-24 left-6 lg:left-16">
          <Link
            href="/places"
            className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <polyline points="10,3 5,8 10,13" />
            </svg>
            <span className="text-sm">All Places</span>
          </Link>
        </div>

        {/* Title overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-16">
          <div className="container mx-auto">
            <p className="text-xs tracking-[0.2em] uppercase text-white/70 mb-2 capitalize">
              {place.destination}
            </p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white mb-4">
              {place.title}
            </h1>
            {place.heroCaption && (
              <p className="text-white/70 text-sm max-w-xl">
                {place.heroCaption}
              </p>
            )}
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main content */}
            <div className="lg:col-span-2">
              {/* Excerpt */}
              {place.excerpt && (
                <p className="text-xl md:text-2xl text-white/60 leading-relaxed mb-12 font-serif italic">
                  {place.excerpt}
                </p>
              )}

              {/* Body */}
              {place.body && (
                <div className="prose prose-invert prose-lg max-w-none">
                  {place.body.split("\n\n").map((paragraph, index) => (
                    <p key={index} className="text-white/80 mb-6 leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-white/5 p-6 sticky top-24 border border-white/10">
                <h3 className="font-serif text-lg mb-6 text-white/90">
                  Visitor Information
                </h3>

                {place.address && (
                  <div className="flex gap-3 mb-4">
                    <svg
                      className="w-4 h-4 text-white/40 flex-shrink-0 mt-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    <div>
                      <p className="text-xs tracking-[0.1em] uppercase text-white/40 mb-1">
                        Address
                      </p>
                      <p className="text-sm text-white/80">{place.address}</p>
                    </div>
                  </div>
                )}

                {place.openingHours && (
                  <div className="flex gap-3 mb-4">
                    <svg
                      className="w-4 h-4 text-white/40 flex-shrink-0 mt-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <circle cx="12" cy="12" r="10" strokeWidth={1.5} />
                      <polyline points="12 6 12 12 16 14" strokeWidth={1.5} />
                    </svg>
                    <div>
                      <p className="text-xs tracking-[0.1em] uppercase text-white/40 mb-1">
                        Hours
                      </p>
                      <p className="text-sm text-white/80">{place.openingHours}</p>
                    </div>
                  </div>
                )}

                {place.fees && (
                  <div className="flex gap-3 mb-4">
                    <svg
                      className="w-4 h-4 text-white/40 flex-shrink-0 mt-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z"
                      />
                    </svg>
                    <div>
                      <p className="text-xs tracking-[0.1em] uppercase text-white/40 mb-1">
                        Entry Fee
                      </p>
                      <p className="text-sm text-white/80">{place.fees}</p>
                    </div>
                  </div>
                )}

                {place.notes && (
                  <div className="mt-6 pt-6 border-t border-white/10">
                    <p className="text-xs tracking-[0.1em] uppercase text-white/40 mb-2">
                      Tips
                    </p>
                    <p className="text-sm text-white/50">{place.notes}</p>
                  </div>
                )}

                <div className="mt-8">
                  <Link
                    href="/plan-your-trip"
                    className="block w-full bg-white text-[#0a0a0a] text-center py-3 text-xs tracking-[0.15em] uppercase hover:bg-white/90 transition-colors"
                  >
                    Include in Your Journey
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Journeys Section */}
      {relatedJourneys.length > 0 && (
        <section className="py-24 md:py-32 border-t border-white/10 mt-16">
          <div className="container mx-auto px-6 lg:px-16">
            <div className="text-center mb-16">
              <p className="text-xs tracking-[0.2em] uppercase text-white/40 mb-4">
                Explore More
              </p>
              <h2 className="text-2xl md:text-3xl tracking-[0.15em] font-light mb-4">
                Related Journeys
              </h2>
              <p className="text-white/50 max-w-xl mx-auto">
                Curated routes that pass through{" "}
                {place.destination.charAt(0).toUpperCase() +
                  place.destination.slice(1)}
              </p>
            </div>

            <div className="relative">
              {/* Carousel navigation */}
              <button
                onClick={() => {
                  const container = document.getElementById(
                    "related-journeys-carousel"
                  );
                  if (container)
                    container.scrollBy({ left: -320, behavior: "smooth" });
                }}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 p-2 bg-[#0a0a0a] border border-white/20 rounded-full hover:bg-white/10 transition-colors hidden md:flex items-center justify-center"
                aria-label="Previous journeys"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <polyline points="12,4 6,10 12,16" />
                </svg>
              </button>

              <button
                onClick={() => {
                  const container = document.getElementById(
                    "related-journeys-carousel"
                  );
                  if (container)
                    container.scrollBy({ left: 320, behavior: "smooth" });
                }}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 p-2 bg-[#0a0a0a] border border-white/20 rounded-full hover:bg-white/10 transition-colors hidden md:flex items-center justify-center"
                aria-label="Next journeys"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <polyline points="8,4 14,10 8,16" />
                </svg>
              </button>

              {/* Carousel container */}
              <div
                id="related-journeys-carousel"
                className="flex gap-6 overflow-x-auto pb-4"
                style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
              >
                {relatedJourneys.map((journey) => (
                  <Link
                    key={journey.slug}
                    href={`/journeys/${journey.slug}`}
                    className="group flex-shrink-0 w-[280px] md:w-[300px]"
                  >
                    <div className="relative aspect-[3/4] mb-4 overflow-hidden bg-white/5">
                      {journey.heroImage && (
                        <Image
                          src={journey.heroImage}
                          alt={journey.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                      )}
                    </div>
                    <p className="text-xs tracking-[0.15em] uppercase text-white/40 mb-1">
                      {journey.durationDays} Days
                    </p>
                    <h3 className="font-serif text-lg mb-2 text-white/90 group-hover:text-white transition-colors">
                      {journey.title}
                    </h3>
                    <p className="text-sm text-white/50 line-clamp-2">
                      {journey.shortDescription || journey.description}
                    </p>
                  </Link>
                ))}
              </div>
            </div>

            <div className="text-center mt-12">
              <Link
                href="/journeys"
                className="text-xs tracking-[0.2em] uppercase border-b border-white pb-1 hover:opacity-60 transition-opacity"
              >
                View All Journeys
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Sources */}
      {place.sources && (
        <section className="py-8 border-t border-white/10">
          <div className="container mx-auto px-6 lg:px-16">
            <p className="text-xs text-white/40">
              <span className="font-medium text-white/50">Sources:</span>{" "}
              {place.sources}
            </p>
          </div>
        </section>
      )}
    </div>
  );
}
