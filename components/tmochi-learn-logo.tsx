import Image from "next/image";

export function TMochiLearnLogo() {
  return (
    <span className="brand-name" aria-hidden="true">
      <Image
        className="brand-cat-mark"
        src="/tmochi-learn-logo.png"
        alt=""
        width={512}
        height={512}
        sizes="31px"
        priority
      />
      <span className="brand-word">TMochiLearn</span>
    </span>
  );
}
