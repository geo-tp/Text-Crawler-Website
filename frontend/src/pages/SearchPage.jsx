import { useParams } from "react-router-dom";
import { Arrow } from "../components/Arrow";
import { NoResult } from "../components/NoResult";
import { Result } from "../components/Result";
import { ResultCount } from "../components/ResultCount";
import { PaginationContainer } from "../containers/PaginationContainer";
import { ResultContainer } from "../containers/ResultContainer";
import { ARCHIVE_API_URL, CRAWLER_API_URL, MAX_RESULTS_PER_PAGE } from "../config/general";
import { Loader } from "../components/Loader";
import { ModalContainer } from "../containers/ModalContainer";
import { useEffect, useState } from "react";
import { ErrorMessage } from "../components/ErrorMessage";
import { CachingMessage } from "../components/CachingMessage";
import { ImageResultContainer } from "../containers/ImageResultContainer";
import { ImageResult } from "../components/ImageResult";
import Lightbox from "../components/Lightbox";
import { fetchTextResults } from "../api/fetchTextResults";
import { fetchImageResults } from "../api/fetchImageResults";
import { Embed } from "../components/Embed";
import { FixedButton } from "../components/FixedButton";


export const Searchpage = () => {
  const { query } = useParams("query");
  const [isLoading, setIsLoading] = useState(false);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [indexInView, setIndexInView] = useState(0);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [responseTime, setResponseTime] = useState(0);
  const [pageNumber, setPageNumber] = useState(1);
  const [images, setImages] = useState(null);
  const [isEmbedInView, setIsEmbedInView] = useState(false)


  const fetchImageResultWithQueryParam = async () => {
    await fetchImageResults(ARCHIVE_API_URL+ `search_by_keywords?k=${query}`, setImages)
  }

  const fetchTextResultWithQueryParam = async () => {
    const startTime = new Date();
    await fetchTextResults(CRAWLER_API_URL + `search/?q=${query}`, setIsLoading, setData, setError);
    const endTime = new Date();

    setPageNumber(1);
    setResponseTime((endTime - startTime) / 1000);
  };

  const fetchNextPage = () => {
    if (data?.next) {
      fetchTextResults(data.next, setIsLoading, setData, setError);
      setPageNumber(pageNumber + 1);
    }
  };

  const fetchPreviousPage = () => {
    if (data?.previous) {
      fetchTextResults(data.previous, setIsLoading, setData, setError);
      setPageNumber(pageNumber - 1);
    }
  };

  const handleImageClick = (index) => {
    setIsLightboxOpen(true)
    setIndexInView(index)
  }

  useEffect(() => {
    if (query) {
      fetchTextResultWithQueryParam();
      fetchImageResultWithQueryParam();
    }
  }, [query]);

  console.log(isEmbedInView)

  return (
    <div className="search-page">
      {isEmbedInView && <Embed/>}
      <FixedButton show={isEmbedInView} setShow={setIsEmbedInView} />

      {data && <ResultCount number={images ? data.count + images.length : data.count} time={responseTime} />}
      {isLoading && (
        <ModalContainer>
          <Loader />
          <CachingMessage />
        </ModalContainer>
      )}

      {!isLoading && error && <ErrorMessage error={error} />}

      {!isLightboxOpen && images && 
      <ImageResultContainer>
        {images.map((img, index) => (
          <ImageResult 
            handleImageClick={() => handleImageClick(index)} 
            json={img} 
            index={index}
            key={`image-matching-result-${index}`}
          />
        ))}
      </ImageResultContainer>}

      {!isLightboxOpen && data && (
        <ResultContainer>
          {data.results?.map((result, index) => (
            <Result
              key={`text-matching-result-${index}`}
              data={result}
              query={query}
            />
          ))}
        </ResultContainer>
      )}

      {!isLoading && !error && !data?.results?.length && (
        <NoResult keywords={query} />
      )}

      {images && isLightboxOpen && <Lightbox files={images} index={indexInView} setIsOpen={setIsLightboxOpen}/>}

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
