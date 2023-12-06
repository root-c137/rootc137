<?php

namespace App\Controller\api\article;

use App\Entity\Article;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;

class getArticleController extends AbstractController
{
    #[Route('/article/{slug}', name: 'app_api_article_get_article', methods: ['GET'])]
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
                $Data = [
                    "title" => $Article->getTitle(),
                    "resume" => $Article->getResume(),
                    "author" => $Article->getAuthor(),
                    "slug" => $Article->getSlug(),
                    "text" => $Article->getText(),
                    "image" => $Article->getImage(),
                    "section" => $Article->getSection()->getName(),
                    "createdAt" => $Article->getCreatedAt(),
                    "updatedAt" => $Article->getUpdatedAt()
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


