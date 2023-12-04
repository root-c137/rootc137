<?php

namespace App\Controller\api\project;

use App\Entity\Project;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;

class getProjectsController extends AbstractController
{
    #[Route('/api/projects', name: 'app_api_project_get_projects', methods: ['GET'])]
    public function index(EntityManagerInterface $Manager): JsonResponse
    {
        $Projects = $Manager->getRepository(Project::class)->findAll();
        $Msg = "Ok";
        $StatusCode = 200;
        $Data = [];

        if(!$Projects)
        {
            $Msg = "No projects found.";
            $StatusCode = 404;
        }
        else
        {
            foreach ($Projects as $project)
            {
                $Data[] = [
                    "Title" => $project->getTitle(),
                    "Image" => $project->getImage(),
                    "Presentation" => $project->getPresentation(),
                    "Front" => $project->getFront(),
                    "Back" => $project->getBack(),
                    "Status" => $project->getStatus(),
                    "Section" => $project->getSection()->getName(),
                    "Category" => $project->getCategory()
                ];
            }
        }

        return $this->json([
            'message' => $Msg,
            'data' => $Data
        ], $StatusCode);
    }
}
