import './Main.css';
import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { LinkBlank, LinkedinLink } from '../components';
import { ERouteType } from '../constants';

interface IPageConfig {
  label: string;
  description: string;
  route?: ERouteType;
}

interface IStackConfig {
  label: string;
  url: string;
}

const pagesConfig: IPageConfig[] = [
  {
    label: 'Main Page',
    description: 'contains a test description and links to other pages.',
  },
  {
    route: ERouteType.TEST,
    label: 'Test Page',
    description: 'contains elements to fetch and display test data.',
  },
  {
    route: ERouteType.PERFORMANCE,
    label: 'Performance Page',
    description: 'contains elements to display and manage performance reports.',
  },
];

const stackConfig: IStackConfig[] = [
  {
    label: 'React',
    url: 'https://reactjs.org/',
  },
  {
    label: 'React Router',
    url: 'https://reactrouter.com/',
  },
  {
    label: 'React Query',
    url: 'https://react-query.tanstack.com/',
  },
  {
    label: 'Milligram',
    url: 'https://milligram.io/',
  },
];

export const MainPage: FC = () => (
  <section data-testid="main-page-root" className="main-page-root">
    <section>
      <p className="main-page-description">
        This single page application was developed by <LinkedinLink /> as a
        study case about React's performance while fetching and presenting
        external data.
      </p>
    </section>

    <section>
      <h5>Content:</h5>
      <table>
        <tbody>
          {pagesConfig.map(({ route, label, description }, index) => (
            <tr key={`${label.replace(/\s/g, '')}_${index}`}>
              <td>{index + 1}.</td>
              <td>{<PageLabel label={label} route={route} />}</td>
              <td>{description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>

    <section>
      <h5>Technology Stack:</h5>
      <ul>
        {stackConfig.map(({ label, url }) => (
          <li key={label}>
            <LinkBlank url={url} label={label} />
          </li>
        ))}
      </ul>
    </section>
  </section>
);

const PageLabel: FC<Omit<IPageConfig, 'description'>> = (props) => {
  const { label, route } = props;

  if (!route) return <b>{label}</b>;

  return (
    <Link to={route}>
      <b>{label}</b>
    </Link>
  );
};
