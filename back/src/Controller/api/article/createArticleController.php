<?php

namespace App\Controller\api\article;

use App\Entity\Article;
use App\Entity\Section;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\String\Slugger\AsciiSlugger;


class createArticleController extends AbstractController
{
    #[Route('/api/article', name: 'app_api_article_create_article', methods: ['POST'])]
    public function index(Request $request, EntityManagerInterface $M): JsonResponse
    {
        $Data = [];
        $Msg = "Ok";
        $StatusCode = 200;
        $D = $request->toArray();

        if($D && !empty($D['Section']) && !empty($D['Title']) && !empty($D['Resume']) &&
        !empty($D['Image']) && !empty($D['Text']) && !empty($D['Author']) )
        {
            $Section = $M->getRepository(Section::class)->findOneBy(['Name' => $D['Section'] ]);
            if($Section)
            {
                $Article = new Article();
                $Article->setTitle($D['Title']);
                $Article->setResume($D['Resume']);
                $Article->setImage($D['Image']);
                $Article->setText($D['Text']);
                $Article->setAuthor($D['Author']);
                $Article->setSection($Section);
                $Article->setCreatedAt(new \DateTimeImmutable());

                $Slugger = new AsciiSlugger();
                $Slug = $Slugger->slug($D['Title']);
                $Article->setSlug($Slug->lower());

                $M->persist($Article);
                $M->flush();
                $Data[] = [
                    "Title" => $Article->getTitle(),
                    "Image" => $Article->getImage(),
                    "Text" => $Article->getText(),
                    "Resume" => $Article->getResume(),
                    "Author" => $Article->getAuthor(),
                    "Section" => $Article->getSection()->getName(),
                    "CreatedAt" => $Article->getCreatedAt(),
                    "UpadatedAt" => $Article->getUpdatedAt()
                ];
            }
            else
            {
                $Msg = "Section not found";
                $StatusCode = 404;
            }
        }
        else
        {
            $Msg = "Data empty..";
            $StatusCode = 400;
        }


        return $this->json([
            'message' => $Msg,
            'data' => $Data
        ], $StatusCode);
    }
}
