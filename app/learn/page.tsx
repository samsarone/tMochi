import { permanentRedirect } from "next/navigation";

export default function LegacyLearnPage() {
  permanentRedirect("/explore");
}
