<?php

namespace App\Controller\api\article;

use App\Entity\Article;
use App\Entity\Section;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;

class getArticlesBySectionController extends AbstractController
{
    #[Route('/api/articles/{section}', name: 'app_api_article_get_articles_by_section', methods: ['GET'])]
    public function index($section, EntityManagerInterface $M): JsonResponse
    {
        $Msg = "Ok";
        $StatusCode = 200;
        $Data = [];

            $Section = $M->getRepository(Section::class)->findOneBy(['Name' => $section] );
            if($Section)
            {
                $Articles = $M->getRepository(Article::class)->findBy(['Section' => $Section]);
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
                    $Msg = "Articles not found.";
                    $StatusCode = 404;
                }
            }
            else
            {
                $Msg = "Section not found.";
                $StatusCode = 404;
            }

        return $this->json([
            'message' => $Msg,
            'data' => $Data
        ], $StatusCode);
    }
}
