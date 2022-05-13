/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React, { lazy } from 'react';
// import { FormattedMessage } from 'react-intl';
// import messages from './messages';
const AntFromLoginPage = lazy(() => import('../AntFromLoginPage'));

export default function HomePage() {
  return <AntFromLoginPage />;
}
