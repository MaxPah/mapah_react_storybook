import React from 'react';
import './JmlHeader.scss';

export default function JmlHeader({links, image}) {
  return (
    <div className={'jml-header-links'}>
      <img src={image} alt="" />
      {links.map(function (link, key) {
        return (
        <div className={['jml-header-link', 'pos-' + key].join(' ')}>
            <a href={link.url}>{link.title}</a>
        </div>
        );
      })}
    </div>
  );
}
