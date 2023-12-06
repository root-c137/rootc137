<?php

namespace App\Controller\api\project;

use App\Entity\Project;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;

class getProjectsController extends AbstractController
{
    #[Route('/projects', name: 'app_api_project_get_projects', methods: ['GET'])]
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
                    "id" => $project->getId(),
                    "title" => $project->getTitle(),
                    "image" => $project->getImage(),
                    "presentation" => $project->getPresentation(),
                    "front" => $project->getFront(),
                    "back" => $project->getBack(),
                    "status" => $project->getStatus(),
                    "section" => $project->getSection()->getName(),
                    "category" => $project->getCategory(),
                    "slug" => $project->getSlug(),
                    "createdAt" => $project->getCreatedAt()->format('d-m-Y'),
                    "updatedAt" => $project->getUpdatedAt() !== null ? $project->getUpdatedAt()->format('d-m-Y') : null
                ];
            }
        }

        return $this->json([
            'message' => $Msg,
            'data' => $Data
        ], $StatusCode);
    }
}
