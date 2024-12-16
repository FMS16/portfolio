import { notFound } from 'next/navigation';
import { use } from 'react';
import articles from './../articles.json';

interface Article {
  id: number;
  title: string;
  content: string;
}

export default function ArticlePage({ params }: { params: Promise<{ id: string }> }) {
  // Usar `use` para resolver la promesa de params
  const { id } = use(params);

  // Buscar el artículo en el JSON
  const article = articles.find((article: Article) => article.id === Number(id));

  if (!article) {
    notFound();
    return null; // Evitar seguir ejecutando
  }

  return (
    <div>
      <h1>{article.title}</h1>
      <p>{article.content}</p>
    </div>
  );
}
