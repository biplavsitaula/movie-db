import React from "react";
import { useSearchParams } from "react-router";

function useParams() {
  const [params, setParams] = useSearchParams("");

  const queryParam = params.get("query") || "";
  const pageParam = parseInt(params.get("page") || "1", 10);
  const genreParams = params.get("genre");

  const handleSearch = (newQuery) => {
    const newParams = new URLSearchParams();
    if (newQuery) newParams.set("query", newQuery);
    setParams(newParams);
  };

  const handlePageChange = (newPage) => {
    const newParams = new URLSearchParams();
    if (queryParam) newParams.set("query", queryParam);
    if (genreParams) newParams.set("genre", genreParams);
    if (newPage > 1) newParams.set("page", newPage);
    setParams(newParams);
  };

  return {
    queryParam,
    pageParam,
    genreParams,
    handleSearch,
    handlePageChange,
  };
}

export default useParams;
