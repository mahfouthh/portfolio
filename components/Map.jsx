import React from "react";

const Map = () => {
  return (
    <>
      <div className="google-map">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3371.7626903326563!2d34.8466261764478!3d32.31822867385867!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151d40107aeea6f1%3A0xc3d5c0be63773aac!2sHaRe&#39;ut%20St%207%2C%20Netanya%2C%20Israel!5e0!3m2!1sen!2s!4v1694710270812!5m2!1sen!2s" width="600" height="450" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
      </div>
      {/* End google-map */}
    </>
  );
};

export default Map;
