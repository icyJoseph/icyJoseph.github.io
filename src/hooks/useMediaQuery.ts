import { useEffect, useRef } from "react";

export function useMediaQuery({
  handler,
  breakpoint
}: {
  handler: ({ matches }: MediaQueryListEvent | MediaQueryList) => void;
  breakpoint: number;
}) {
  const ref = useRef(handler);

  useEffect(() => {
    const mediaQuery = window.matchMedia(`(min-width: ${breakpoint}px)`);

    const _handler = ref.current;

    _handler(mediaQuery);

    mediaQuery.addEventListener("change", _handler);

    return () => mediaQuery.removeEventListener("change", _handler);
  }, [breakpoint]);

  return null;
}
