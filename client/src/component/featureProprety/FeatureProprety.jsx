import useFetch from "../../hooks/useFetch";
import "./featureProprety.css";

const FeatureProprety = () => {
  const { error, data, loading } = useFetch("/hotle?featured=true&limit=4");
  return (
    <div className="fp">
      {loading ? (
        "data is loading pleaze wait "
      ) : (
        <>
          {data.map((item, i) => (
            <div className="fpItem" key={i}>
              <img src="https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=e148feeb802ac3d28d1391dad9e4cf1e12d9231f897d0b53ca067bde8a9d3355&o=&s=1" alt="" className="fpImg" />
              <span className="fpName">{item.name}</span>
              <span className="fpCity">{item.city}</span>
              <span className="fpPrice">
                Starting from ${item.cheapestPrice}
              </span>
              {item.rating && (
                <div className="fpRating">
                  <button>{item.rating}</button>
                  <span>Excellent</span>
                </div>
              )}
            </div>
          ))}
        </>
      )}

    
    </div>
  );
};

export default FeatureProprety;
