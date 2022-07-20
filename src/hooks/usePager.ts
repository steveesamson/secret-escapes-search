import { useCallback } from "react";

interface usePagerProps {
  nextPage: React.Dispatch<React.SetStateAction<number>>;
}

export const usePager = ({ nextPage }: usePagerProps) => {
  const onPrev = useCallback(() => {
    nextPage((prev: number) => prev - 1);
  }, [nextPage]);

  const onNext = useCallback(() => {
    nextPage((prev: number) => prev + 1);
  }, [nextPage]);
  return { onPrev, onNext };
};
