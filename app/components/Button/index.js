/**
 *
 * Button
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';
import { Button as AntdButton } from 'antd';

import { FormattedMessage } from 'react-intl';
import messages from './messages';
import './styles.scss';

function Button({ htmlType }) {
  return (
    <AntdButton
      htmlType={htmlType}
      block
      type="primary"
      className="primary-button"
    >
      <FormattedMessage {...messages.header} />
    </AntdButton>
  );
}

Button.propTypes = {
  htmlType: PropTypes.string,
};

export default memo(Button);
