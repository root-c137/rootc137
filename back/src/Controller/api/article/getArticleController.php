<?php

namespace App\Controller\api\article;

use App\Entity\Article;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;

class getArticleController extends AbstractController
{
    #[Route('/api/article/{slug}', name: 'app_api_article_get_article', methods: ['GET'])]
    public function index($slug, EntityManagerInterface $M): JsonResponse
    {
        $Msg = "Ok";
        $StatusCode = 200;
        $Data = [];

        if($slug)
        {
            $Article = $M->getRepository(Article::class)->findOneBy(['Slug' => $slug]);
            if($Article)
            {
                $Data[] = [
                    "Title" => $Article->getTitle(),
                    "Resume" => $Article->getResume(),
                    "Author" => $Article->getAuthor(),
                    "Slug" => $Article->getSlug(),
                    "Text" => $Article->getText(),
                    "Section" => $Article->getSection()->getName(),
                    "CreatedAt" => $Article->getCreatedAt(),
                    "UpdatedAt" => $Article->getUpdatedAt()
                ];
            }
            else
            {
                $Msg = "Article not found.";
                $StatusCode = 404;
            }
        }
        else
        {
            $Msg = "slug is empty..";
            $StatusCode = 400;
        }

        return $this->json([
            'message' => $Msg,
            'data' => $Data
        ], $StatusCode);
    }
}


