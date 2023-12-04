<?php

namespace App\Controller\api\article;

use App\Entity\Article;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;

class getArticlesController extends AbstractController
{
    #[Route('/api/articles', name: 'app_api_article_get_articles', methods: ['GET'])]
    public function index(EntityManagerInterface $M): JsonResponse
    {
        $Msg = "Ok";
        $StatusCode = 200;
        $Data = [];
        $Articles = $M->getRepository(Article::class)->findAll();

        if($Articles)
        {
            foreach($Articles as $Article)
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
        }
        else
        {
            $Msg = "Articles not found";
            $StatusCode = 404;
        }

        return $this->json([
            'message' => $Msg,
            'data' => $Data
        ], $StatusCode);
    }
}
