import Image from "next/image";

export function TmochiExploreLogo() {
  return (
    <span className="brand-name" aria-hidden="true">
      <Image
        className="brand-cat-mark"
        src="/tmochi-explore-logo.png"
        alt=""
        width={512}
        height={512}
        sizes="31px"
        priority
      />
      <span className="brand-word">TmochiExplore</span>
    </span>
  );
}
