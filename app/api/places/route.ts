import { NextResponse } from "next/server";
import { getSheetData } from "@/lib/sheets";

export const revalidate = 60;

export async function GET() {
  try {
    const placesData = await getSheetData("Places");
    const destinationsData = await getSheetData("Destinations");
    
    // Create destination slug lookup
    const destSlugById: Record<string, string> = {};
    destinationsData.forEach((d: any) => {
      destSlugById[d.id] = d.slug;
    });
    
    const places = placesData
      .map((p: any) => ({
        slug: p.slug || "",
        title: p.name || "",
        destination: destSlugById[p.destination_id] || "",
        category: p.type || "",
        heroImage: p.heroImage || "",
        excerpt: p.description || "",
        order: parseInt(p.order) || 999,
      }))
      .sort((a: any, b: any) => a.order - b.order);

    return NextResponse.json({ 
      success: true,
      places 
    });
  } catch (error: any) {
    console.error("GET /api/places error:", error);
    return NextResponse.json(
      { success: false, error: error.message, places: [] },
      { status: 500 }
    );
  }
}
