import React from 'react';
import MenuLink from './MenuLink';

export default function Breadcrumb() {
  return (
    <div className="center">
      <nav className="z-depth-0 indigo">
        <div className="nav-wrapper">
          <div
            className="col s12"
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
            }}
          >
            <MenuLink to="/description" label="Description">
              Descrição
            </MenuLink>
            <MenuLink to="/payment" label="Payment">
              Pagamento
            </MenuLink>
            <MenuLink to="/address" label="Address">
              Endereço
            </MenuLink>
          </div>
        </div>
      </nav>
    </div>
  );
}
