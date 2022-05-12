/*
 * AntFromLoginPage Messages
 *
 * This contains all the text for the AntFromLoginPage container.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.containers.AntFromLoginPage';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'This is the AntFromLoginPage container!',
  },
  welcomeMessage: {
    id: 'app.containers.Login.welcomeMessage',
    defaultMessage: 'Welcome to Emoha!',
  },
  enterMobilenumber: {
    id: 'app.containers.Login.enterMobilenumber',
    defaultMessage: 'Please enter your mobile number',
  },
  sendOtp: {
    id: 'app.containers.Login.sendOtp',
    defaultMessage: 'Send OTP',
  },
  termsMessage: {
    id: 'app.containers.Login.termsMessage',
    defaultMessage: 'By continuing, you agree to our ',
  },
  termsAndConditions: {
    id: 'app.containers.Login.termsAndConditions',
    defaultMessage: 'Terms & Conditions',
  },
});
