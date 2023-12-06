<?php

namespace App\Controller\api\project;

use App\Entity\Project;
use Doctrine\ORM\EntityManagerInterface;
use Exception;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

class getProjectByIdController extends AbstractController
{

    #[Route('/api/project/{id}', name: 'app_api_project_getbyid', methods: ['GET'])]
    public function section(Project $project = null, EntityManagerInterface $M): JsonResponse
    {
        $Msg = "OK";
        $StatusCode = 200;
        $Data = null;

        if($project)
        {
                $Data = [
                    "id" => $project->getId(),
                    "title" => $project->getTitle(),
                    "section" => $project->getSection()->getName(),
                    "category" => $project->getCategory(),
                    "status" => $project->getStatus(),
                    "front" => $project->getFront(),
                    "back" => $project->getBack(),
                    "links" => $project->getLinks(),
                    "github" => $project->getGithub(),
                    "web" => $project->getWeb(),
                    "ios" => $project->getIos(),
                    "android" => $project->getAndroid(),
                    "image" => $project->getImage(),
                    "presentation" => $project->getPresentation()
                ];
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
