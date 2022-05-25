/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React, { lazy, useEffect } from 'react';
import MetaTags from 'react-meta-tags';
// import { FormattedMessage } from 'react-intl';
// import messages from './messages';
import WebFont from 'webfontloader';
const AntFromLoginPage = lazy(() => import('../AntFromLoginPage'));

export default function HomePage() {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Product Sans'],
      },
    });
  }, []);
  return (
    <div>
      <MetaTags>
        <meta name="description" content="Emoha login" />
      </MetaTags>
      <AntFromLoginPage />
    </div>
  );
}
