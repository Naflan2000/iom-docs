import React from 'react';
import DocTagsListPage from '@theme-original/DocTagsListPage';

export default function DocTagsListPageWrapper(props) {
  return (
    <>
      {/* Just prevent indexing */}
      <head>
        <meta name="robots" content="noindex, nofollow, noarchive" />
        <meta name="googlebot" content="noindex, nofollow, noarchive" />
      </head>
      {/* Just prevent indexing */}
      <DocTagsListPage {...props} />
    </>
  );
}
