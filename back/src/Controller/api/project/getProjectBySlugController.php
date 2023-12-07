<?php

namespace App\Controller\api\project;

use App\Entity\Project;
use Doctrine\ORM\EntityManagerInterface;
use http\Env\Request;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\String\Slugger\AsciiSlugger;

class getProjectBySlugController extends AbstractController
{
    #[Route('/project/{slug}', name: 'app_api_project_get_project_by__slug')]
    public function index($slug, EntityManagerInterface $M): JsonResponse
    {
        $Msg = "OK";
        $StatusCode = 200;
        $Data = null;

        if($slug)
        {
            $P = $M->getRepository(Project::class)->findOneBy(['slug' => $slug]);
            if($P)
            {
                $Slugger = new AsciiSlugger();
                $Data = [
                    "id" => $P->getId(),
                    "title" => $P->getTitle(),
                    "status" => $P->getStatus(),
                    "section" => $P->getSection()->getName(),
                    "front" => $P->getFront(),
                    "back" => $P->getBack(),
                    "image" => $P->getImage(),
                    "links" => $P->getLinks(),
                    "slug" => $P->getSlug(),
                    "android" => $P->getAndroid(),
                    "ios" => $P->getIos(),
                    "web" => $P->getWeb(),
                    "github" => $P->getGithub(),
                    "presentation" => $P->getPresentation()
                ];

            }
            else
            {
                $StatusCode = 404;
                $Msg = "Aucune projet avec ce nom.";
            }
        }
        else
        {
            $StatusCode = 404;
            $Msg = "Aucune projet avec ce nom.";
        }

        return $this->json([
            'message' => $Msg,
            'data' => $Data
        ], $StatusCode);
    }
}
