import React from 'react';
import './JmlHeader.scss';

export default class JmlHeader extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      links: [],
    };
  }

  render () {
    const { links, image } = this.props;

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
}
