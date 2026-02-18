"use client";

import Link from "next/link";

/**
 * Contact navigation item with phone handset icon
 */
export function ContactNavItem() {
    return (
        <Link
            href="/contact"
            className="flex flex-col items-center justify-center gap-1.5 px-3 py-2 transition-opacity hover:opacity-80"
            aria-label="Contact us"
        >
            <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
            >
                <path
                    d="M26 22.28V25.28C26 25.7618 25.8084 26.2239 25.4683 26.564C25.1283 26.904 24.6661 27.0957 24.1843 27.0957C20.4337 26.8097 16.8343 25.6097 13.68 23.6097C10.7535 21.7885 8.29148 19.3265 6.47027 16.4C4.46003 13.2297 3.26003 9.61035 2.98403 5.84035C2.98403 5.36035 3.17403 4.90035 3.51403 4.56035C3.85403 4.22035 4.31403 4.03035 4.79403 4.03035H7.79403C8.65403 4.03035 9.39403 4.66035 9.52403 5.51035C9.66403 6.51035 9.93403 7.49035 10.324 8.41035C10.564 8.97035 10.424 9.62035 9.96403 10.0404L8.68403 11.3204C10.3694 14.2885 12.7818 16.7009 15.75 18.3863L17.03 17.1063C17.4501 16.6463 18.1001 16.5063 18.66 16.7463C19.58 17.1363 20.56 17.4063 21.56 17.5463C22.42 17.6763 23.05 18.4263 23.04 19.2963L26 22.28Z"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
            <span className="text-[10px] font-semibold uppercase tracking-[0.15em] text-white">
                Contact
            </span>
        </Link>
    );
}
