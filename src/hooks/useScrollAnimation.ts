import { useInView } from "react-intersection-observer";

/**
 * Hook for scroll-triggered animations
 * @param threshold - The percentage of the element's visibility needed to trigger (0 to 1)
 * @param triggerOnce - Whether the animation should only trigger once
 * @returns { ref, inView }
 */
export function useScrollAnimation(threshold = 0.1, triggerOnce = true) {
  const { ref, inView } = useInView({
    threshold,
    triggerOnce,
  });
  
  return { ref, inView };
}
