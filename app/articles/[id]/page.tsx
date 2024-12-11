import { notFound } from 'next/navigation';
import articles from '../articles.json';
import NotFound from '@/app/not-found';

type Params = {
  id: string;
};

interface ArticlePageProps {
  params: Params; // Define que `params` tiene un campo `id` de tipo string
}

export default function ArticlePage({ params }: ArticlePageProps) {
  const { id } = params;

  // Busca el artículo correspondiente
  const article = articles.find((article) => article.id === parseInt(id, 10));
    if(!article){
        notFound();
    }
  return (
    <>
        <div>
            
        </div>
    </>
  );
}
