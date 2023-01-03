import { useParams } from "react-router-dom";
import { Arrow } from "../components/Arrow";
import { NoResult } from "../components/NoResult";
import { Result } from "../components/Result";
import { ResultCount } from "../components/ResultCount";
import { PaginationContainer } from "../containers/PaginationContainer";
import { ResultContainer } from "../containers/ResultContainer";
import { API_URL, MAX_RESULTS_PER_PAGE } from "../config/general";
import { Loader } from "../components/Loader";
import { ModalContainer } from "../containers/ModalContainer";
import { useEffect, useState } from "react";
import { ErrorMessage } from "../components/ErrorMessage";
import { fetchJson } from "../api/fetchJson";
import { CachingMessage } from "../components/CachingMessage";

export const Searchpage = () => {
  const { query } = useParams("query");
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [responseTime, setResponseTime] = useState(0);
  const [pageNumber, setPageNumber] = useState(1);

  const fetchData = async (url) => {
    setIsLoading(true);
    setData(null);

    const response = await fetchJson(url);

    if (response.hasOwnProperty("results")) {
      setData(response);
      setError(null);
    } else {
      setError(response);
      setData(null);
    }

    setIsLoading(false);

    return response;
  };

  const fetchWithQueryParam = async () => {
    const startTime = new Date();
    await fetchData(API_URL + `search/?q=${query}`);
    const endTime = new Date();

    setPageNumber(1);
    setResponseTime((endTime - startTime) / 1000);
  };

  const fetchNextPage = () => {
    if (data?.next) {
      fetchData(data.next);
      setPageNumber(pageNumber + 1);
    }
  };

  const fetchPreviousPage = () => {
    if (data?.previous) {
      fetchData(data.previous);
      setPageNumber(pageNumber - 1);
    }
  };

  useEffect(() => {
    if (query) {
      fetchWithQueryParam();
    }
  }, [query]);

  return (
    <div className="search-page">
      {isLoading && (
        <ModalContainer>
          <Loader />
          <CachingMessage />
        </ModalContainer>
      )}

      {!isLoading && error && <ErrorMessage error={error} />}

      {data && (
        <ResultContainer>
          <ResultCount number={data.count} time={responseTime} />
          {data.results?.map((result, index) => (
            <Result
              key={`matching-result-${index}`}
              data={result}
              query={query}
            />
          ))}
        </ResultContainer>
      )}

      {!isLoading && !error && !data?.results?.length && (
        <NoResult keywords={query} />
      )}

      {data && data.count > MAX_RESULTS_PER_PAGE && (
        <PaginationContainer>
          {data.previous && (
            <Arrow direction="left" onClick={fetchPreviousPage} />
          )}
          {data.count !== 0 && (
            <p>
              {pageNumber} / {Math.ceil(data.count / MAX_RESULTS_PER_PAGE)}
            </p>
          )}
          {data.next && <Arrow direction="right" onClick={fetchNextPage} />}
        </PaginationContainer>
      )}
    </div>
  );
};
