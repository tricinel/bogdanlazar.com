import React from 'react';
import { Link } from 'gatsby';

import { Header as StyledHeader } from '../Layout';
import { Heading } from '../Typography';

interface IHeaderProps {
  title: string;
  back?: string;
}

const Header: React.SFC<IHeaderProps> = ({ title, back }): JSX.Element => (
  <StyledHeader>
    {back && (
      <p>
        <Link to={back}>&#8592; Go back</Link>
      </p>
    )}
    <Heading>{title}</Heading>
  </StyledHeader>
);

export default Header;
