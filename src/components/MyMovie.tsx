const MyMovie = () => {
  return (
    <div className=" card w-40 bg-base-100 shadow-xl relative">
      <div>
        <figure>
          <img
            className="rounded-lg h-52"
            src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
            alt="Watched movie"
          />
        </figure>
        <div className="text-lg badge badge-accent absolute bottom-72 left-2 w-8 h-8">
          8
        </div>
      </div>
      <div className="card-body">
        <h2 className="card-title">Lord of the rings</h2>
      </div>
    </div>
  );
};

export default MyMovie;
