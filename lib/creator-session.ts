import type { AuthenticatedSamsarClient } from "./samsar-auth";
type BranchedDraftSessionResponse = {
  session_id?: string;
  request_id?: string;
  status?: string;
  narrative_type?: string;
};

export async function createBlankBranchedSession(
  authenticated: AuthenticatedSamsarClient,
) {
  const result = await authenticated.client.postV2<BranchedDraftSessionResponse>(
    "text_to_interactive_video/session",
    {},
  );
  const sessionId = result.data.session_id || result.data.request_id;
  if (!sessionId?.trim()) {
    throw new Error("Samsar did not return a Creator Studio session ID.");
  }
  return sessionId.trim();
}
