import React, { Component } from 'react';
import { ButtonWrapper } from './Button.styled';
import { AiOutlineReload } from 'react-icons/ai';
export default class Button extends Component {
  render() {
    return (
      <ButtonWrapper type="button" onClick={this.props.onClick}>
        <AiOutlineReload />
        <span>Load more</span>
      </ButtonWrapper>
    );
  }
}
