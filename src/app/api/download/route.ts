import fs from "fs";
import path from "path";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const filePath = path.join(process.cwd(), "public", "cv", "cv_ghufron_akbar.pdf");
  
  if (!fs.existsSync(filePath)) {
    return NextResponse.json({ message: "File not found" }, { status: 404 });
  }

  const fileBuffer = fs.readFileSync(filePath);
  const response = new NextResponse(fileBuffer, {
    headers: {
      "Content-Disposition": `attachment; filename="cv_ghufron_akbar.pdf"`,
      "Content-Type": "application/pdf",
    },
  });

  return response;
}
