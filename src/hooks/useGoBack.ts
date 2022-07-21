import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

export const useGoBack = () => {
  const navigate = useNavigate();
  const goBack = useCallback(
    (e: any) => {
      e.preventDefault();
      navigate(-1);
    },
    [navigate]
  );
  return goBack;
};
