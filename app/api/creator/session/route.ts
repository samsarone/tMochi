import { createBlankBranchedSession } from "../../../../lib/creator-session";
import {
  getAuthenticatedSamsarClient,
  unauthorizedResponse,
} from "../../../../lib/samsar-auth";

export const dynamic = "force-dynamic";

export async function POST() {
  const authenticated = await getAuthenticatedSamsarClient();
  if (!authenticated) return unauthorizedResponse();

  try {
    const sessionId = await createBlankBranchedSession(authenticated);
    return Response.json(
      { sessionId, sessionType: "branched" },
      { status: 201, headers: { "Cache-Control": "no-store" } },
    );
  } catch (error) {
    return Response.json(
      {
        error: error instanceof Error
          ? error.message
          : "Unable to create a Creator Studio session.",
      },
      { status: 502, headers: { "Cache-Control": "no-store" } },
    );
  }
}
