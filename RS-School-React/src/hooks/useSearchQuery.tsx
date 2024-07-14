import { useEffect, useState } from "react";

const useSearchQuery = (key: string) => {
  const [searchQuery, setSearchQuery] = useState(() => {
    const savedQuery = localStorage.getItem(key);
    return savedQuery ? savedQuery : "";
  });

  useEffect(() => {
    return () => {
      localStorage.setItem(key, searchQuery);
    };
  }, [key, searchQuery]);

  return [searchQuery, setSearchQuery] as const;
};

export default useSearchQuery;