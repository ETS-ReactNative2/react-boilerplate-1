import React from 'react';
// import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
// import { createStructuredSelector } from 'reselect';
// import { compose } from 'redux';
import { FormattedMessage } from 'react-intl';
// import useWindowDimensions from './useWindowDimensions';
// const { width } = useWindowDimensions();

// import { GoogleLogin } from 'react-google-login';
// import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { Typography } from 'antd';
import messages from './messages';
import './styles.scss';
// const { Text, Link } = Typography;

export default function AntFromLoginPage() {
  return (
    <Box className="loginFormContainer h-100 w-100">
      <Grid container className="h-100 w-100">
        <Grid item sm={8} xs={12} className="leftContainer">
          {/* <h1>Hello</h1> */}
        </Grid>
        <Grid
          item
          sm={4}
          xs={12}
          className="d-flex flex-column align-items-center justify-content-between w-100 form-container"
        >
          <Box className="mt-5 w-100">
            <Typography className="welcomeMessage text-center">
              <FormattedMessage {...messages.welcomeMessage} />
            </Typography>
            <Typography
              className="secondMessage text-center"
              // style={{ fontSize: width > 600 ? '' : '16px' }}
            >
              <FormattedMessage {...messages.enterMobilenumber} />
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
