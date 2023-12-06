<?php

namespace App\Controller\api\article;

use App\Entity\Article;
use App\Service\FileUploader;
use Doctrine\ORM\EntityManagerInterface;
use Exception;
use PhpParser\Node\Scalar\MagicConst\File;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\String\Slugger\AsciiSlugger;

class updateArticleController extends AbstractController
{
    #[Route('/api/article/{id}/title', name: 'app_api_article_update_article_title', methods: ['PUT'])]
    public function index(Article $article = null, Request $request, EntityManagerInterface $M): JsonResponse
    {
        $Msg = "OK";
        $StatusCode = 200;
        $Data = null;

        if($article)
        {
            $D = $request->toArray();
            if($D && !empty($D['title']) )
            {
                $Slugger = new AsciiSlugger();
                $article->setTitle($D['title']);
                $article->setSlug($Slugger->slug($D['title'])->lower());

                $M->flush();
                $Data = [
                    "title" => $article->getTitle(),
                    "resume" => $article->getResume(),
                    "author" => $article->getAuthor(),
                    "section" => $article->getSection()->getName(),
                    "image" => $article->getImage(),
                    "createdAt" => $article->getCreatedAt(),
                    "updatedAt" => $article->getUpdatedAt()
                ];
            }
            else
            {
                $Msg = "Empty data.";
                $StatusCode = 400;
            }
        }
        else
        {
            $Msg = "Article not found.";
            $StatusCode = 404;
        }

        return $this->json([
            'message' => $Msg,
            'data' => $Data
        ], $StatusCode);
    }

    #[Route('/api/article/{id}/resume', name: 'app_api_article_update_article_resume', methods: ['PUT'])]
    public function resume(Article $article = null, Request $request, EntityManagerInterface $M): JsonResponse
    {
        $Msg = "OK";
        $StatusCode = 200;
        $Data = null;

        if($article)
        {
            $D = $request->toArray();
            if($D && !empty($D['resume']) )
            {
                $article->setResume($D['resume']);
                $M->flush();
                $Data = [
                    "title" => $article->getTitle(),
                    "resume" => $article->getResume(),
                    "author" => $article->getAuthor(),
                    "section" => $article->getSection()->getName(),
                    "image" => $article->getImage(),
                    "createdAt" => $article->getCreatedAt(),
                    "updatedAt" => $article->getUpdatedAt()
                ];
            }
            else
            {
                $Msg = "Empty data.";
                $StatusCode = 400;
            }
        }
        else
        {
            $Msg = "Article not found.";
            $StatusCode = 404;
        }

        return $this->json([
            'message' => $Msg,
            'data' => $Data
        ], $StatusCode);
    }

    #[Route('/api/article/{id}/author', name: 'app_api_article_update_article_author', methods: ['PUT'])]
    public function author(Article $article = null, Request $request, EntityManagerInterface $M): JsonResponse
    {
        $Msg = "OK";
        $StatusCode = 200;
        $Data = null;

        if($article)
        {
            $D = $request->toArray();
            if($D && !empty($D['author']) )
            {
                $article->setAuthor($D['author']);
                $M->flush();
                $Data = [
                    "title" => $article->getTitle(),
                    "resume" => $article->getResume(),
                    "author" => $article->getAuthor(),
                    "section" => $article->getSection()->getName(),
                    "image" => $article->getImage(),
                    "createdAt" => $article->getCreatedAt(),
                    "updatedAt" => $article->getUpdatedAt()
                ];
            }
            else
            {
                $Msg = "Empty data.";
                $StatusCode = 400;
            }
        }
        else
        {
            $Msg = "Article not found.";
            $StatusCode = 404;
        }

        return $this->json([
            'message' => $Msg,
            'data' => $Data
        ], $StatusCode);
    }

    #[Route('/api/article/{id}/section', name: 'app_api_article_update_article_section', methods: ['PUT'])]
    public function section(Article $article = null, Request $request, EntityManagerInterface $M): JsonResponse
    {
        $Msg = "OK";
        $StatusCode = 200;
        $Data = null;

        if($article)
        {
            $D = $request->toArray();
            if($D && !empty($D['section']) )
            {
                $article->setTitle($D['section']);
                $M->flush();
                $Data = [
                    "title" => $article->getTitle(),
                    "resume" => $article->getResume(),
                    "author" => $article->getAuthor(),
                    "section" => $article->getSection()->getName(),
                    "image" => $article->getImage(),
                    "createdAt" => $article->getCreatedAt(),
                    "updatedAt" => $article->getUpdatedAt()
                ];
            }
            else
            {
                $Msg = "Empty data.";
                $StatusCode = 400;
            }
        }
        else
        {
            $Msg = "Article not found.";
            $StatusCode = 404;
        }

        return $this->json([
            'message' => $Msg,
            'data' => $Data
        ], $StatusCode);
    }

    #[Route('/api/article/{id}/image', name: 'app_api_article_update_article_image', methods: ['POST'])]
    public function image(Article $article = null, Request $request, EntityManagerInterface $M,
    FileUploader $fileUploader): JsonResponse
    {
        $Msg = "OK";
        $StatusCode = 200;
        $Data = null;
        $File = $request->files->get('file');

        if($article)
        {
            if($File)
            {
                try {
                    $newFileName = $fileUploader->upload($File);
                    $article->setImage($newFileName);
                    $M->flush();

                    $Data = [
                        "title" => $article->getTitle(),
                        "resume" => $article->getResume(),
                        "author" => $article->getAuthor(),
                        "section" => $article->getSection()->getName(),
                        "image" => $article->getImage(),
                        "createdAt" => $article->getCreatedAt(),
                        "updatedAt" => $article->getUpdatedAt()
                    ];
                }catch (Exception $e) {
                    $Msg = "Error uploading file: " . $e->getMessage();
                    $StatusCode = 500; // Code HTTP 500 pour une erreur interne du serveur
                }
            }
            else
            {
                $Msg = "Empty file.";
                $StatusCode = 400;
            }
        }
        else
        {
            $Msg = "Article not found.";
            $StatusCode = 404;
        }

        return $this->json([
            'message' => $Msg,
            'data' => $Data
        ], $StatusCode);
    }

    #[Route('/api/article/{id}/text', name: 'app_api_article_update_article_text', methods: ['PUT'])]
    public function text(Article $article = null, Request $request, EntityManagerInterface $M): JsonResponse
    {
        $Msg = "OK";
        $StatusCode = 200;
        $Data = null;

        if($article)
        {
            $D = $request->toArray();
            if($D && !empty($D['text']) )
            {
                $article->setText($D['text']);
                $M->flush();
                $Data = [
                    "title" => $article->getTitle(),
                    "resume" => $article->getResume(),
                    "author" => $article->getAuthor(),
                    "section" => $article->getSection()->getName(),
                    "image" => $article->getImage(),
                    "text" => $article->getText(),
                    "createdAt" => $article->getCreatedAt(),
                    "updatedAt" => $article->getUpdatedAt()
                ];
            }
            else
            {
                $Msg = "Empty data.";
                $StatusCode = 400;
            }
        }
        else
        {
            $Msg = "Article not found.";
            $StatusCode = 404;
        }

        return $this->json([
            'message' => $Msg,
            'data' => $Data
        ], $StatusCode);
    }

}
