/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React, { lazy } from 'react';
import MetaTags from 'react-meta-tags';
// import { FormattedMessage } from 'react-intl';
// import messages from './messages';
const AntFromLoginPage = lazy(() => import('../AntFromLoginPage'));

export default function HomePage() {
  return (
    <div>
      <MetaTags>
        <meta name="description" content="Emoha login" />
      </MetaTags>
      <AntFromLoginPage />
    </div>
  );
}
