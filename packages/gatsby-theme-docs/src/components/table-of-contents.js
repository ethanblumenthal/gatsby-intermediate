/** @jsx jsx */
import { jsx } from 'theme-ui';
import { graphql, Link, useStaticQuery } from 'gatsby';

const TableOfContents = () => {
  const data = useStaticQuery(graphql`
    query {
      allDocsPage {
        nodes {
          id
          title
          path
        }
      }
    }
  `);

  const pages = data.allDocsPages.nodes;

  return (
    <div>
      <h2>Explore the Docs</h2>
      <ul>
        {pages.map(({ id, path, title }) => (
          <li key={id}>
            <Link
              to={path}
              sx={{
                '&.active': {
                  fontStyle: 'italic',
                  textDecoration: 'none',
                  '::after': { content: '" (currently viewing)"' },
                },
              }}
            >
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TableOfContents;
