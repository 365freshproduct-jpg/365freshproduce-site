import type { ReactElement, SVGProps } from "react";

import type { SolutionKey } from "@/lib/site-data";

type IconProps = SVGProps<SVGSVGElement>;

function BaseIcon(props: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    />
  );
}

export function MenuIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M4 7h16" />
      <path d="M4 12h16" />
      <path d="M4 17h16" />
    </BaseIcon>
  );
}

export function CloseIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M6 6l12 12" />
      <path d="M18 6L6 18" />
    </BaseIcon>
  );
}

export function ArrowUpRightIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M7 17L17 7" />
      <path d="M8 7h9v9" />
    </BaseIcon>
  );
}

export function CheckIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M5 12.5l4.2 4.2L19 7" />
    </BaseIcon>
  );
}

export function PhoneIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M6.8 3.8h3.1l1.4 4.1-1.9 1.8a15.8 15.8 0 0 0 5 5l1.8-1.9 4.1 1.4v3.1a1.9 1.9 0 0 1-2 1.9A16.3 16.3 0 0 1 4.9 5.7a1.9 1.9 0 0 1 1.9-1.9Z" />
    </BaseIcon>
  );
}

export function MailIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <rect x="3.5" y="5.5" width="17" height="13" rx="2.2" />
      <path d="M4.8 7.4 12 12.8l7.2-5.4" />
    </BaseIcon>
  );
}

export function MapPinIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M12 21s6-5.8 6-11a6 6 0 1 0-12 0c0 5.2 6 11 6 11Z" />
      <circle cx="12" cy="10" r="2.2" />
    </BaseIcon>
  );
}

function StructuresIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M3 15 12 5l9 10" />
      <path d="M5 15v4h14v-4" />
      <path d="M8 15v4" />
      <path d="M12 10v9" />
      <path d="M16 15v4" />
    </BaseIcon>
  );
}

function FoggingIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M6 6h12" />
      <path d="M8 6v4" />
      <path d="M12 6v6" />
      <path d="M16 6v4" />
      <path d="M8 14c0 1.2-.9 2-2 2s-2-.8-2-2 2-3.5 2-3.5 2 2.3 2 3.5Z" />
      <path d="M14 17c0 1.2-.9 2-2 2s-2-.8-2-2 2-3.5 2-3.5 2 2.3 2 3.5Z" />
      <path d="M20 14c0 1.2-.9 2-2 2s-2-.8-2-2 2-3.5 2-3.5 2 2.3 2 3.5Z" />
    </BaseIcon>
  );
}

function CoolingIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <circle cx="12" cy="12" r="2.4" />
      <path d="M12 3v5" />
      <path d="M12 16v5" />
      <path d="m5.6 5.6 3.5 3.5" />
      <path d="m14.9 14.9 3.5 3.5" />
      <path d="M3 12h5" />
      <path d="M16 12h5" />
      <path d="m5.6 18.4 3.5-3.5" />
      <path d="m14.9 9.1 3.5-3.5" />
    </BaseIcon>
  );
}

function HeatingIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M12 3c1.8 2 4.5 4.7 4.5 8a4.5 4.5 0 0 1-9 0c0-3.3 2.7-6 4.5-8Z" />
      <path d="M12 12.5c1.1 1 2 2 2 3.5a2 2 0 1 1-4 0c0-1.5.9-2.5 2-3.5Z" />
    </BaseIcon>
  );
}

function ScreeningIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <rect x="4" y="5" width="16" height="14" rx="2" />
      <path d="M4 10h16" />
      <path d="M4 14h16" />
      <path d="M9 5v14" />
      <path d="M15 5v14" />
    </BaseIcon>
  );
}

function IrrigationIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M4 8h9a4 4 0 0 1 4 4v0" />
      <path d="M17 12h3v7h-3" />
      <path d="M9 12c0 1.2-.9 2-2 2s-2-.8-2-2 2-3.5 2-3.5 2 2.3 2 3.5Z" />
      <path d="M15 17c0 1.2-.9 2-2 2s-2-.8-2-2 2-3.5 2-3.5 2 2.3 2 3.5Z" />
    </BaseIcon>
  );
}

function ClimateIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M6 13a4 4 0 1 1 7.6-1.8A3.5 3.5 0 1 1 15 18H7.5A3.5 3.5 0 0 1 6 13Z" />
      <path d="M18 5v7" />
      <path d="M18 5a2 2 0 1 0-4 0v7a3 3 0 1 0 4 0" />
    </BaseIcon>
  );
}

function AutomationIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <rect x="4" y="6" width="16" height="12" rx="2.5" />
      <path d="M8 10h3" />
      <path d="M8 14h4" />
      <path d="M15.5 10.5 18 8" />
      <path d="m15.5 13.5 2.5 2.5" />
      <circle cx="14.5" cy="12" r="1.5" />
    </BaseIcon>
  );
}

function TurnkeyIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M5 14.5V8.8L12 4l7 4.8v5.7" />
      <path d="M4 20h16" />
      <path d="M8 20v-5h8v5" />
      <path d="M10.8 10.8a2.2 2.2 0 1 0 2.4 2.4l3.8 3.8 1.2-1.2-3.8-3.8a2.2 2.2 0 0 0-3.6-1.2Z" />
    </BaseIcon>
  );
}

export const solutionIcons: Record<SolutionKey, (props: IconProps) => ReactElement> = {
  structures: StructuresIcon,
  fogging: FoggingIcon,
  cooling: CoolingIcon,
  heating: HeatingIcon,
  screening: ScreeningIcon,
  irrigation: IrrigationIcon,
  climate: ClimateIcon,
  automation: AutomationIcon,
  turnkey: TurnkeyIcon,
};
