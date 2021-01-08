import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { useLocation } from '@reach/router';
import { useStaticQuery, graphql } from 'gatsby';

// https://www.gatsbyjs.com/docs/add-seo-component/

const Head = ({ title, description, image }) => {
  const { pathname } = useLocation();

  // const { site } = useStaticQuery(
  //   graphql`
  //     query {
  //       site {
  //         siteMetadata {
  //           defaultTitle: title
  //           defaultDescription: description
  //           siteUrl
  //           defaultImage: image
  //           twitterUsername
  //         }
  //       }
  //     }
  //   `,
  // );

  // const {
  //   defaultTitle,
  //   defaultDescription,
  //   siteUrl,
  //   defaultImage,
  //   twitterUsername,
  // } = site.siteMetadata;

  const seo = {
    title: 'Akhil Kashyap | Web Developer',
    description: 'Portfolio Webpage for Akhil KAshyap',
    image: '../images/logo.png',
  };

  return (
    <Helmet title={seo.title} defaultTitle={seo.title}>
      <html lang="en" />

      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />

      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />

      <meta property="og:type" content="website" />

      <meta name="twitter:card" content="summary_large_image" />

      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />

      <meta name="google-site-verification" content="DCl7VAf9tcz6eD9gb67NfkNnJ1PKRNcg8qQiwpbx9Lk" />
    </Helmet>
  );
};

export default Head;

Head.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
};

Head.defaultProps = {
  title: null,
  description: null,
  image: null,
};
