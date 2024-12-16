import { notFound } from 'next/navigation';
import articles from '../articles.json';

type Params = {
  id: string;
};

interface ArticlePageProps {
  params: Params; 
}

export default function ArticlePage({ params }: ArticlePageProps) {
  const { id } = params;

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
