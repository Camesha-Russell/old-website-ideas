import { useSearchParams } from "react-router-dom";

/**
 * Returns true when ?edit=true is in the URL.
 * Toggle edit mode by navigating to /?edit=true
 */
export function useEditMode(): boolean {
  const [params] = useSearchParams();
  return params.get("edit") === "true";
}
