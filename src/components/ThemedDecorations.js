import React from 'react';
import ReactDOM from 'react-dom';

export default class ThemedDecoration extends React.Component {
  render() {
    const childrenWithExtraClass = React.Children.map(this.props.children, child => {
      return (
        <div className={this.props.theme}>{child}</div>
      )
    })
    return (
      <div>
        {childrenWithExtraClass}
      </div>
    )
  }
}
