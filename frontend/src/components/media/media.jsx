import { Helmet } from "react-helmet";
import { useEffect, useState } from "react";

function Media() {
  const [media, setMedia] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3001/media/all")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setMedia(data.reverse());
      });
  }, []);
  console.log(media);
  return (
    <>
      <div className="container-fluid media_wrapper">
        <ul>
          {media.map((item) => (
            <li key={item.id} className="media_item">
              <div className="media_img">
                <img
                  src={`http://localhost:3001/getfiles/${item.path}`}
                  alt=""
                  width={300}
                  height={200}
                />
              </div>
              <div className="media_body mt-3">
                <p>
                  <a
                    href={`http://localhost:3001/getfiles/${item.path}`}
                  >{`http://localhost:3001/getfiles/${item.path}`}</a>{" "}
                </p>
                <button
                  className="btn-danger mt-3"
                  onClick={() => {
                    let answer = prompt("siz rostan o'chirmoqchimisiz? Y/N");
                    if (answer == "Y") {
                      fetch("http://localhost:3001/media/delete", {
                        method: "DELETE",
                        headers: {
                          Accept: "application/json",
                          "Content-Type": "application/json",
                        },
                        body: JSON.stringify({
                          id: item.id,
                        }),
                      })
                        .then(function (res) {
                          return res.json();
                        })
                        .then(function (data) {
                          console.log("ok");
                        });
                      window.location.reload();
                    } else {
                    }
                  }}
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Media;
