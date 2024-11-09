import { google } from "googleapis";
import { NextResponse } from "next/server";
export async function POST(request) {
  const res = await request.json();
  console.log(res);
  try {
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
      },
      scopes: [
        "https://www.googleapis.com/auth/drive",
        "https://www.googleapis.com/auth/drive.file",
        "https://www.googleapis.com/auth/spreadsheets",
      ],
    });

    const sheets = google.sheets({
      auth,
      version: "v4",
    });

    const response = await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: "A1:F1",
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [
          [
            res.Name,
            res.Age,
            res.Email,
            res.Country,
            res.State,
            res.issues.join(", "),
          ],
        ],
      },
    });
    return NextResponse.json({ message: "OK" });
  } catch (e) {
    return Response.json(
      { message: `Something went wrong: ${e.message}` },
      { status: 500 }
    );
  }
}
