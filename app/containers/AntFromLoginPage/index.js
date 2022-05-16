import React from 'react';
// import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
// import { createStructuredSelector } from 'reselect';
// import { compose } from 'redux';
import { FormattedMessage } from 'react-intl';
import PhoneInput from 'react-phone-input-3';
import 'react-phone-input-3/lib/material.css';

// import { GoogleLogin } from 'react-google-login';
// import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { Typography, Form } from 'antd';
import Button from '../../components/Button';
import EmohaLogoSign from '../../assets/svgImages/EmohaLogoSign';
import messages from './messages';
import './styles.scss';
// const [form] = Form.useForm();
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
          <EmohaLogoSign style={{ position: 'absolute', right: 0 }} />
          <Box className="mt-5">
            <Typography className="welcomeMessage text-center">
              <FormattedMessage {...messages.welcomeMessage} />
            </Typography>
            <Typography
              className="secondMessage text-center"
              // style={{ fontSize: width > 600 ? '' : '16px' }}
            >
              <FormattedMessage {...messages.enterMobilenumber} />
            </Typography>
            <div className="mt-4">
              <Form
                layout="vertical"
                name="basic"
                initialValues={{ remember: true }}
              >
                <Form.Item
                  name="phonenumber"
                  rules={[
                    {
                      required: true,
                      whitespace: true,
                      message: 'Required',
                    },
                  ]}
                >
                  <PhoneInput
                    // onChange={(e, code) => setcountryCode(code.dialCode)}
                    enableSearch
                    disableCountryGuess
                    country="in"
                    placeholder="Phone Number"
                  />
                </Form.Item>
                <Form.Item>
                  <Button
                    type="primary"
                    htmlType="submit"
                    // loading={antFromLoginPage.loading}
                    block
                  >
                    <FormattedMessage {...messages.sendOtp} />
                  </Button>
                </Form.Item>
              </Form>
              <Box className="mt-5 mb-5">
                <h6 style={{ color: '#979fb4' }}>
                  <span>OR</span>
                </h6>
              </Box>
            </div>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
