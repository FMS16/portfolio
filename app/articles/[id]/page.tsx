import { notFound } from 'next/navigation';
import articles from '../articles.json';

export default function ArticlePage({ params }: { params: { id: string } }) {
  const { id } = params;

  // Buscar el artículo
  const article = articles.find((article) => article.id === Number(id));

  // Si no se encuentra el artículo, llamar a notFound
  if (!article) {
    notFound();
    return null;
  }

  return (
    <div>
      <h1>{article.title}</h1>
      <p>{article.content}</p>
    </div>
  );
}
