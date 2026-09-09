import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/lib/constants";

export function Brand({
  light = false,
  onClick,
}: {
  light?: boolean;
  onClick?: () => void;
}) {
  return (
    <Link
      href="/"
      onClick={onClick}
      aria-label={`${siteConfig.name} — home`}
      className="inline-flex shrink-0 items-center gap-2.5"
    >
      <Image
        src={siteConfig.logoMark}
        alt=""
        width={31}
        height={43}
        className="h-10 w-8"
      />
      <span className={cn("flex flex-col", light && "text-white")}>
        <span className="text-[17px] leading-5 font-bold tracking-tight">
          E COMMERCE
        </span>
        <span className="mt-1 text-[9px] font-semibold tracking-[0.27em]">
          SOLUTIONS KENYA
        </span>
      </span>
    </Link>
  );
}
