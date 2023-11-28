import React from "react";

export default function Photos(props) {
  if (props.photos) {
    return (
      <section className="Photos">
        <div className="row">
          {/* loop through all photos */}
          {props.photos.map(function (photo, index) {
            return (
              <div className="col-4 p-2" key={index}>
                <img
                  src={photo.src.tiny}
                  alt=""
                  className="img-fluid rounded"
                />
              </div>
            );
          })}
        </div>
      </section>
    );
  } else {
    return null;
  }
}
