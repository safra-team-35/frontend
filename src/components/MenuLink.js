import React from 'react';
import { useRouteMatch, Link } from 'react-router-dom';

export default function MenuLink({ label, to, activeOnlyWhenExact, children }) {
  let match = useRouteMatch({
    path: to,
    exact: activeOnlyWhenExact,
  });

  const style = match ? { fontWeight: 'bold' } : {};

  return (
    // <div className={match ? 'active breadcrumb' : 'breadcrumb'}>
    <div className="breadcrumb" style={style}>
      <Link to={to}>{children}</Link>
    </div>
  );
}
