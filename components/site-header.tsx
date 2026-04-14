"use client";

import Link from "next/link";
import { useState } from "react";

import type { NavItem } from "@/lib/site-data";

import { CloseIcon, MenuIcon } from "./icons";
import { Logo } from "./logo";

type SiteHeaderProps = {
  companyName: string;
  locale: string;
  nav: NavItem[];
};

export function SiteHeader({ companyName, locale, nav }: SiteHeaderProps) {
  const [open, setOpen] = useState(false);

  return (
    <header className="absolute inset-x-0 top-0 z-40">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-5 sm:px-8 lg:px-10 lg:py-7">
        <Logo href={`/${locale}`} label={companyName} />

        <nav className="hidden items-center gap-8 lg:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={`/${locale}${item.href}`}
              className="text-sm font-medium text-white/70 transition hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Link
            href={`/${locale}#calculator`}
            className="inline-flex items-center rounded-full bg-pine px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#6eab1e]"
          >
            Request a quote
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white lg:hidden"
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
        >
          {open ? <CloseIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
        </button>
      </div>

      {open ? (
        <div className="mx-4 rounded-[2rem] border border-white/20 bg-canvas/95 p-6 shadow-panel backdrop-blur-xl lg:hidden">
          <nav className="flex flex-col gap-3">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={`/${locale}${item.href}`}
                className="rounded-2xl border border-white/10 px-4 py-3 text-base text-white/80 transition hover:border-white/20 hover:bg-white/5 hover:text-white"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href={`/${locale}#calculator`}
              className="mt-2 inline-flex justify-center rounded-2xl bg-pine px-4 py-3 text-sm font-semibold text-white"
              onClick={() => setOpen(false)}
            >
              Request a quote
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
