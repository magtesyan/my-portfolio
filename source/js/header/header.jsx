import React from 'react';

const Header = () => {
  return (
    <header className="page__header header">
      <nav className="header__nav nav">
        <a href="/" className="nav__link">
          <picture>
            <source type="image/webp" srcSet="./img/icons/menu-btn.webp" />
            <img className="nav__button" src="./img/icons/menu-btn.png" />
          </picture>
        </a>
      </nav>
      <div className="header__title headings">
        <h1 className="headings__name headings__title_white">Mikael Magtesyan</h1>
        <h2 className="headings__position headings__subtitle headings__title_pink">Front End Developer from Moscow</h2>
      </div>
      <div className="header__links header-links">
        <a className="header-links__lets-talk-btn btn btn_full-shadow" href="#">
          Let&apos;s talk
        </a>
        <a className="header-links__see-below-link" href="#">
          or
          <br />
          see below
          <br />
          <img src="./img/icons/arrow-down.png" />
        </a>
      </div>
    </header>
  );
};

export default Header;
