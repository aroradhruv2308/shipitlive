import React, { useEffect, useState } from 'react';
import { BlocksRenderer } from '@strapi/blocks-react-renderer';
import { fetchContent } from '../api.js';

const Article = () => {
  const [blog, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadArticle = async () => {
      try {
        const data = await fetchContent(`/articles`);
        console.log(data);
        setArticle(data.data[0]);
      } catch (err) {
        setError('Failed to fetch article');
      } finally {
        setLoading(false);
      }
    };

    loadArticle();
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  const { title, description, Article } = blog;

  return (
    <div className="prose">
      <h1>{title}</h1>
      <p>{description}</p>
      <BlocksRenderer content={Article} />
    </div>
  );
};

export default Article;
