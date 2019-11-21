import React from "react";

const MoveText: React.FC = () => {
  return (
    <section className="header">
      <div className="header-box">
        <h1 className="heading-primary">
          <span className="heading-primary--main">Outdoors</span>
          <span className="heading-primary--sub">is like a sweet panda</span>
        </h1>

        <a href="#" className="btn btn--white btn--animated">
          {" "}
          Discover our tours
        </a>
      </div>
    </section>
  );
};

export default MoveText;
