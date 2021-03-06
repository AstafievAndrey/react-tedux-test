import React, { Component } from 'react';
import './css/messagesComponent.css';

class MessagesComponent extends Component {
  removeMessage = (index, type) => {
    this.props.removeMessage(index, type);
  };

  renderMessage(messages, type) {
    return messages
      .slice()
      .reverse()
      .map((element, index) => {
        return (
          <div
            onClick={() => this.removeMessage(index, type)}
            className={type}
            key={`${type}-${index}`}
          >
            {element}
          </div>
        );
      });
  }

  render() {
    const { errors, warnings, success } = this.props;
    return (
      <div className="messagesComponent">
        {this.renderMessage(errors, 'errors')}
        {this.renderMessage(warnings, 'warnings')}
        {this.renderMessage(success, 'success')}
      </div>
    );
  }
}

export default MessagesComponent;
