import React from 'react';
import { Link } from 'react-router-dom';

export default function PageBanner({ title, breadcrumb, style = {}, bgImage }) {
  const customStyle = bgImage
    ? { backgroundImage: `url(${bgImage})`, ...style }
    : style;

  return (
    <section className="page-title" style={customStyle}>
      <div className="auto-container">
        <div className="content-box">
          <h1>{title}</h1>
          <ul className="bread-crumb">
            <li>
              <Link className="home" to="/">
                <span className="fa fa-home"></span>
              </Link>
            </li>
            <li>{breadcrumb || title}</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
