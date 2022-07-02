import useFetch from "../../hooks/useFetch";
import "./feature.css";
import axios from "axios";

const Feature = () => {
  //const data = axios("/api/hotle/ByCount?cities=gaza,braa,awni");
  const { error, data, loading } = useFetch(
    "/hotle/bycount?cities=gaza,braa,awni"
  );
  console.log(data);
  return (
    <div className="featured">
      {loading ? (
        "data is loading pleaze wait "
      ) : (
        <>
          <div className="featuredItem">
            <img
              src="https://cf.bstatic.com/xdata/images/city/max500/957801.webp?k=a969e39bcd40cdcc21786ba92826063e3cb09bf307bcfeac2aa392b838e9b7a5&o="
              alt="img"
              className="featuredImage"
            />
            <div className="featuredTitle">
              <h1> Dublin </h1>
              <h2>{data[0]} Properutes</h2>
            </div>
          </div>
          <div className="featuredItem">
            <img
              src="https://cf.bstatic.com/xdata/images/city/max500/957801.webp?k=a969e39bcd40cdcc21786ba92826063e3cb09bf307bcfeac2aa392b838e9b7a5&o="
              alt="img"
              className="featuredImage"
            />
            <div className="featuredTitle">
              <h1> Dublin </h1>
              <h2>{data[1]} Properutes</h2>
            </div>
          </div>
          <div className="featuredItem">
            <img
              src="https://cf.bstatic.com/xdata/images/city/max500/957801.webp?k=a969e39bcd40cdcc21786ba92826063e3cb09bf307bcfeac2aa392b838e9b7a5&o="
              alt="img"
              className="featuredImage"
            />
            <div className="featuredTitle">
              <h1> Dublin </h1>
              <h2>{data[2]} Properutes</h2>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Feature;
