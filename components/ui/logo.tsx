import Link from "next/link";
import Image from "next/image";
import logo from "@/public/images/scoutifi.jpg";

export default function Logo() {
  return (
    <Link href="/" className="inline-flex shrink-0" aria-label="ScoutiFi">
      <Image src={logo} alt="ScoutiFi Logo" width={32} height={32} />
    </Link>
  );
}
