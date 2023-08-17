import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Error component (page)
 * @description Renders the error page
 * @returns {JSX.Element}
 */
export default function Error() {
  return (
    <div className="px-4 py-5 my-5 text-center">
      <h1>Error 404</h1>
      <p>You might be lost.</p>
      <Link to="/" className="btn">Go Home</Link>

    </div>
  );
}
