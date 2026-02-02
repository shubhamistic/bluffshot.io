import { useEffect, useState } from "react";
import type { Breakpoint } from "@/types/Breakpoint";
import * as constants from "@/constants/constants";

const queries: Record<Breakpoint, string> = {
  mobile: constants.mobileDeviceBreakpoint,
  tablet: constants.tabletDeviceBreakpoint,
  laptop: constants.laptopDeviceBreakpoint,
  desktop: constants.desktopDeviceBreakpoint,
  largeDesktop: constants.xlDesktopDeviceBreakpoint,
};

export function useBreakpoint(): Breakpoint {
  const getBreakpoint = (): Breakpoint => {
    for (const [key, query] of Object.entries(queries)) {
      if (window.matchMedia(query).matches) {
        return key as Breakpoint;
      }
    }
    return "desktop";
  };

  const [breakpoint, setBreakpoint] = useState<Breakpoint>(getBreakpoint);

  useEffect(() => {
    const handlers = Object.entries(queries).map(([key, query]) => {
      const media = window.matchMedia(query);

      const listener = () => {
        if (media.matches) {
          setBreakpoint(key as Breakpoint);
        }
      };

      media.addEventListener("change", listener);
      return () => media.removeEventListener("change", listener);
    });

    return () => handlers.forEach((cleanup) => cleanup());
  }, []);

  return breakpoint;
}