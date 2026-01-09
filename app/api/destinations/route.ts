import { NextResponse } from "next/server";
import { getSheetData } from "@/lib/sheets";

export const revalidate = 60;

export async function GET() {
  try {
    const destinationsData = await getSheetData("Destinations");
    const regionsData = await getSheetData("Regions");
    
    // Create region slug lookup
    const regionSlugById: Record<string, string> = {};
    regionsData.forEach((r: any) => {
      regionSlugById[r.id] = r.slug;
    });
    
    const destinations = destinationsData
      .map((d: any) => ({
        slug: d.slug || "",
        title: d.name || "",
        subtitle: d.description || "",
        region: regionSlugById[d.region_id] || "",
        heroImage: d.heroImage || "",
        excerpt: d.description || "",
        featured: d.featured === true || d.featured === "TRUE" || d.featured === "True",
        order: parseInt(d.order) || 999,
      }))
      .sort((a: any, b: any) => a.order - b.order);

    return NextResponse.json({ 
      success: true,
      destinations 
    });
  } catch (error: any) {
    console.error("GET /api/destinations error:", error);
    return NextResponse.json(
      { success: false, error: error.message, destinations: [] },
      { status: 500 }
    );
  }
}
