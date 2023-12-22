const MovieDetailsSkeletons = () => {
  return (
    <>
      <div className="flex flex-col items-center mt-8">
        <div>
          <div className="flex flex-row gap-4">
            <div className="skeleton h-64 w-60"></div>
            <div className="flex flex-col gap-2">
              <div className="skeleton h-4 w-72"></div>
              <div className="skeleton h-4 w-full"></div>
              <div className="skeleton h-4 w-full"></div>
              <div className="skeleton h-4 w-full"></div>
            </div>
          </div>
          <div className="flex flex-col gap-2 mt-6">
            <div className="skeleton h-4 w-96"></div>
            <div className="skeleton h-4 w-full"></div>
            <div className="skeleton h-4 w-full"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieDetailsSkeletons;
