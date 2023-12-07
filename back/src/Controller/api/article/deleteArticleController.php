<?php

namespace App\Controller\api\article;

use App\Entity\Article;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;

class deleteArticleController extends AbstractController
{
    #[Route('/api/article/{id}', name: 'app_api_article_delete_article', methods: ['DELETE'])]
    public function index(Article $article = null, EntityManagerInterface $M): JsonResponse
    {
        $Msg = "OK";
        $StatusCode = 200;

        if($article)
        {
            $M->remove($article);
            $M->flush();

        }
        else
        {
            $Msg = "Article not found";
            $StatusCode = 404;
        }

        return $this->json([
            'message' => $Msg
        ], $StatusCode);
    }
}
