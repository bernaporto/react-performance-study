import React, { FC } from 'react';

interface ILinkProps {
  url: string;
  label?: string;
}

export const LinkBlank: FC<ILinkProps> = (props) => {
  const { url, label = '' } = props;
  return (
    <a href={url} rel="noreferrer" target="_blank">
      {label}
    </a>
  );
};

export const LinkedinLink = () => {
  return (
    <LinkBlank
      url="https://www.linkedin.com/in/bernaporto"
      label="Bernardo Porto"
    />
  );
};
