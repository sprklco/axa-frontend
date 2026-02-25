import { Container } from "@/components/layout/Container";
import { cn } from "@/lib/cn";

type FeatureIconName = "home" | "cost" | "shield";

export interface FeatureItem {
  id: string;
  icon?: FeatureIconName;
  title: string;
  description: string;
}

export interface ThreeColumnFeatureSectionProps {
  eyebrow?: string;
  heading: string;
  description: string;
  items: readonly FeatureItem[];
  className?: string;
}

function FeatureIcon({ icon }: { icon?: FeatureIconName }) {
  const baseClasses =
    "flex items-center justify-center h-[110px] w-[110px] text-[#00008f]";

  switch (icon) {
    case "home":
      return (
        <div className={cn(baseClasses, "h-[96px] w-[96px]")}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 110 110"
            className="h-[72px] w-[72px]"
            fill="none"
          >
            <path
              d="M87.0833 41.25V87.0833C87.0833 92.1461 82.9794 96.25 77.9167 96.25H32.0833C27.0207 96.25 22.9167 92.1461 22.9167 87.0833V41.25M68.75 96.25V73.3333C68.75 68.2706 64.6461 64.1666 59.5833 64.1666H50.4167C45.3541 64.1666 41.25 68.2706 41.25 73.3333V96.25M96.25 50.4166L61.4818 15.6485C57.9022 12.0687 52.0978 12.0687 48.5183 15.6485L13.75 50.4166"
              stroke="#00008F"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </div>
      );
    case "cost":
      return (
        <div className={cn(baseClasses, "h-[96px] w-[96px]")}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 112 112"
            className="h-[72px] w-[72px]"
            fill="none"
          >
            <path
              d="M41.2099 59.1954C33.8949 59.1954 27.9688 53.2692 27.9688 45.9542C27.9688 38.6393 33.8949 32.7131 41.2099 32.7131C48.5248 32.7131 54.451 38.6393 54.451 45.9542C54.451 53.2692 48.5248 59.1954 41.2099 59.1954Z"
              stroke="#1A1D21"
              strokeWidth="1.91517"
              strokeMiterlimit="10"
            />
            <path
              d="M83.0913 37.7217L81.6775 24.8315L68.4062 26.2855L70.9632 49.5991L76.8242 48.9523"
              stroke="#00008F"
              strokeWidth="1.91517"
              strokeLinejoin="round"
            />
            <path
              d="M57.7344 22.0811L59.6295 23.9762"
              stroke="#00008F"
              strokeWidth="1.91517"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M67.5508 18.5V21.1823"
              stroke="#00008F"
              strokeWidth="1.91517"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M55.5586 32.374H58.2359"
              stroke="#00008F"
              strokeWidth="1.91517"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M80.1456 38.3576C80.311 37.9264 80.3762 37.4701 80.3261 36.9988C80.1305 35.1538 78.2153 33.8503 76.0494 34.0809C73.8835 34.3115 72.2891 35.9911 72.4897 37.8411C72.6852 39.6812 74.6004 40.9897 76.7663 40.7591C76.9869 40.734 77.2076 40.6939 77.4181 40.6438"
              stroke="#00008F"
              strokeWidth="1.91517"
              strokeLinejoin="round"
            />
            <path
              d="M68.6091 28.0759L62.9336 29.4848L68.5238 52.0614L77.3981 49.8503"
              stroke="#00008F"
              strokeWidth="1.91517"
              strokeLinejoin="round"
            />
            <path
              d="M23.7953 93.4986C23.7953 93.4986 22.8678 85.1107 22.5569 82.3181C21.2533 70.6061 28.7037 65.1713 42.1403 64.3992C51.9772 63.8377 60.8163 61.737 67.5496 55.3896"
              stroke="#1A1D21"
              strokeWidth="1.91517"
              strokeLinejoin="round"
            />
            <path
              d="M82.3848 56.9319C77.2909 67.0846 67.7298 73.7828 59.2617 76.5604L62.285 93.4916"
              stroke="#1A1D21"
              strokeWidth="1.91517"
              strokeLinejoin="round"
            />
            <path
              d="M37.0879 93.4999L35.6289 84.1694"
              stroke="#1A1D21"
              strokeWidth="1.91517"
              strokeLinejoin="round"
            />
            <path
              d="M75.5693 48.2324C74.5215 44.4321 76.5019 40.4813 79.3747 39.1978C80.6482 38.6313 81.305 38.6262 82.6286 38.4959C86.8802 38.0747 87.5169 40.8072 88.64 44.8081C89.367 47.4252 90.0087 49.892 89.2567 51.5515C88.9608 52.2033 88.4394 52.7046 87.6372 53.0957C86.815 53.4918 85.0151 53.6522 84.6391 53.6873C80.578 54.0934 76.6573 52.2033 75.5643 48.2375L75.5693 48.2324Z"
              stroke="#1A1D21"
              strokeWidth="1.91517"
              strokeMiterlimit="10"
            />
          </svg>
        </div>
      );
    case "shield":
      return (
        <div className={cn(baseClasses, "h-[96px] w-[96px]")}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 104 104"
            className="h-[72px] w-[72px]"
            fill="none"
          >
            <path
              d="M51.9987 91C55.0619 91 86.4821 76.7572 86.6654 28.1463C86.6654 27.8518 86.525 27.5742 86.2892 27.405C71.8441 17.3602 53.5652 13 51.9987 13C50.4322 13 32.1533 17.3604 17.7079 27.405C17.4726 27.5742 17.332 27.8518 17.332 28.1463C17.5151 76.7581 48.9359 91 51.9987 91Z"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M68.3527 41.1667L47.671 62.8334L38.0195 52.7224"
              stroke="#00008F"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </div>
      );
    default:
      return (
        <div className={cn(baseClasses, "h-[80px] w-[80px]")}>
          <div className="h-8 w-8 rounded-full border border-[#00008f]/30" />
        </div>
      );
  }
}

export function ThreeColumnFeatureSection({
  eyebrow,
  heading,
  description,
  items,
  className,
}: ThreeColumnFeatureSectionProps) {
  return (
    <section className={cn("bg-white py-12 md:py-16 lg:py-20", className)}>
      <Container className="flex flex-col items-center text-center gap-6">
        {eyebrow && (
          <p className="font-source-sans text-sm font-semibold tracking-[0.1em] text-[#8080c7] uppercase">
            {eyebrow}
          </p>
        )}
        <h2 className="font-brand-text text-[24px] leading-[32px] text-[#1a1d21] md:text-[32px] md:leading-[40px]">
          {heading}
        </h2>
        <p className="font-source-sans text-base leading-6 text-[#1a1d21] md:text-[16px] md:leading-[24px] max-w-[682px]">
          {description}
        </p>

        <div className="mt-6 grid w-full max-w-[880px] gap-2 md:mt-8 md:grid-cols-3 md:gap-4 mx-auto">
          {items.map((item) => (
            <div
              key={item.id}
              className="flex flex-col items-center justify-end gap-2 rounded-[8px] px-4 pb-6"
            >
              <FeatureIcon icon={item.icon} />
              <div className="flex flex-col items-center gap-2 text-center">
                <h3 className="font-source-sans text-lg md:text-[20px] md:leading-[28px] text-[#1a1d21]">
                  {item.title}
                </h3>
                <p className="font-source-sans text-sm md:text-base leading-[24px] text-[#434956] max-w-[280px]">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

