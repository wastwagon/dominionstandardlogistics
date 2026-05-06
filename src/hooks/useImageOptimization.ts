/**
 * Hook for optimized image loading with lazy loading and performance hints
 */

export interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  /** Index for determining eager vs lazy loading (0 = eager) */
  priority?: number;
  className?: string;
  onLoad?: () => void;
}

export function useOptimizedImage(props: OptimizedImageProps) {
  const { src, alt, width, height, priority = 1, className } = props;

  // Load first image eagerly, rest lazily
  const isEager = priority === 0;

  return {
    src,
    alt,
    width,
    height,
    className,
    loading: isEager ? ("eager" as const) : ("lazy" as const),
    fetchPriority: isEager ? ("high" as const) : undefined,
    decoding: "async" as const,
    onLoad: props.onLoad,
  };
}
