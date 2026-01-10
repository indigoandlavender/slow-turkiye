'use client';

import dynamic from 'next/dynamic';
import { useState, useEffect, Component, ReactNode } from 'react';
import Link from 'next/link';

interface ErrorBoundaryProps { children: ReactNode; fallback: ReactNode; onError?: () => void; }
interface ErrorBoundaryState { hasError: boolean; }

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) { super(props); this.state = { hasError: false }; }
  static getDerivedStateFromError(): ErrorBoundaryState { return { hasError: true }; }
  componentDidCatch() { this.props.onError?.(); }
  render() { if (this.state.hasError) return this.props.fallback; return this.props.children; }
}

function MapFallback({ stories }: { stories: Array<{ slug: string; title: string; region?: string; category?: string }> }) {
  const byRegion = stories.reduce((acc, story) => { const region = story.region || 'Türkiye'; if (!acc[region]) acc[region] = []; acc[region].push(story); return acc; }, {} as Record<string, typeof stories>);
  const sortedRegions = Object.keys(byRegion).sort();
  return (
    <div className="w-full bg-[#111] px-6 py-8 border border-white/10">
      <p className="text-xs uppercase tracking-[0.2em] text-white/40 mb-6">Stories by Region</p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-4">
        {sortedRegions.slice(0, 9).map(region => (
          <div key={region}><h3 className="text-sm text-white/70 mb-2">{region}</h3><ul className="space-y-1">{byRegion[region].slice(0, 3).map(story => (<li key={story.slug}><Link href={`/story/${story.slug}`} className="text-sm text-white/40 hover:text-white transition-colors">{story.title}</Link></li>))}{byRegion[region].length > 3 && (<li className="text-xs text-white/30">+ {byRegion[region].length - 3} more</li>)}</ul></div>
        ))}
      </div>
    </div>
  );
}

const TurkiyeMap = dynamic(() => import('./TurkiyeMap'), { ssr: false, loading: () => (<div className="w-full h-[400px] md:h-[500px] bg-[#1a1a1a] flex items-center justify-center"><div className="w-8 h-8 border-2 border-white/20 border-t-white rounded-full animate-spin" /></div>) });

const TURKIYE_COORDINATES: Record<string, [number, number]> = {
  'Istanbul': [28.9784, 41.0082], 'Ankara': [32.8597, 39.9334], 'Cappadocia': [34.8289, 38.6431], 'Antalya': [30.7133, 36.8969],
  'Izmir': [27.1428, 38.4237], 'Bodrum': [27.4305, 37.0344], 'Fethiye': [29.1156, 36.6515], 'Pamukkale': [29.1187, 37.9204],
  'Aegean': [27.5, 38.5], 'Mediterranean': [31.0, 36.5], 'Central Anatolia': [33.0, 39.0], 'Black Sea': [37.0, 41.0],
  'Türkiye': [32.0, 39.0], 'Turkey': [32.0, 39.0], 'Multiple': [32.0, 39.0],
};

const prepareStoriesForTurkiyeMap = (stories: Array<{ slug: string; title: string; subtitle?: string; category?: string; region?: string; }>) => {
  const getCoordinates = (region: string): [number, number] => {
    if (!region) return TURKIYE_COORDINATES['Türkiye'];
    if (TURKIYE_COORDINATES[region]) return TURKIYE_COORDINATES[region];
    const lowerRegion = region.toLowerCase();
    for (const [key, coords] of Object.entries(TURKIYE_COORDINATES)) {
      if (key.toLowerCase() === lowerRegion) return coords;
      if (lowerRegion.includes(key.toLowerCase()) || key.toLowerCase().includes(lowerRegion)) return coords;
    }
    return TURKIYE_COORDINATES['Türkiye'];
  };
  return stories.map(story => ({ slug: story.slug, title: story.title, subtitle: story.subtitle, category: story.category, region: story.region, coordinates: getCoordinates(story.region || '') }));
};

interface TurkiyeMapWrapperProps { stories: Array<{ slug: string; title: string; subtitle?: string; category?: string; region?: string; }>; className?: string; }

export default function TurkiyeMapWrapper({ stories, className }: TurkiyeMapWrapperProps) {
  const [mapError, setMapError] = useState(false);
  const [isClient, setIsClient] = useState(false);
  useEffect(() => { setIsClient(true); }, []);
  if (stories.length === 0) return (<div className="w-full h-[300px] bg-[#1a1a1a] flex items-center justify-center"><p className="text-white/40 text-sm">No stories to display on map</p></div>);
  if (!isClient || mapError) return <MapFallback stories={stories} />;
  const mappedStories = prepareStoriesForTurkiyeMap(stories);
  return (<ErrorBoundary fallback={<MapFallback stories={stories} />} onError={() => setMapError(true)}><TurkiyeMap stories={mappedStories} className={className} /></ErrorBoundary>);
}
