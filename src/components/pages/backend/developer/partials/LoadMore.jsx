import React from "react";

const LoadMore = ({
  fetchNextPage,
  isFetchingNextPage,
  hasNextPage,
  result,
  setPage,
  page,
  refView,
  isSearchOrFilter = false,
}) => {
  if (
    result?.count > 0 &&
    (page === result?.total_pages || !hasNextPage) &&
    !isSearchOrFilter
  ) {
    return (
      <>
        {isFetchingNextPage ? (
          <button
            type="button"
            disabled={isFetchingNextPage}
            className="loadmore h-full relative my-8 text-primary p-1.5 rounded full w-36 disabled:opacity-100 disabled:cursor-not-allowed"
          ></button>
        ) : (
          <div className="loadmore my-8 p-1.5 text-center ">END of LIST</div>
        )}
      </>
    );
  }

  if (!hasNextPage && result?.count > 0 && !isSearchOrFilter) {
    return <div className="my-5 p-1.5">END of LIST</div>;
  }

  if (hasNextPage) {
    return (
      <>
        <button
          type="button"
          ref={refView}
          disabled={isFetchingNextPage}
          onClick={() => {
            setPage((prev) => prev + 1);
            fetchNextPage();
          }}
          className="loadmore h-full relative my-8 text-primary p-1.5 rounded full w-36 disabled:opacity-50 disabled:cursor-not-allowed"
        ></button>
      </>
    );
  }

  // return (
  //   <>
  //     <div className="text-center py-2 mt-5">
  //       <button className="text-body hover:text-accent transition-all">
  //         Load More
  //       </button>
  //     </div>
  //   </>
  // );
};

export default LoadMore;
