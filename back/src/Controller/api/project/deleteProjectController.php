<?php

namespace App\Controller\api\project;

use App\Entity\Project;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;

class deleteProjectController extends AbstractController
{
    #[Route('/api/project/{id}', name: 'app_api_project_delete_project', methods: ['DELETE'] )]
    public function index(Project $project = null, EntityManagerInterface $M): JsonResponse
    {
        $Msg = "Ok";
        $StatusCode = 200;
        $Data = [];

        if($project)
        {
            $M->remove($project);
            $M->flush();
        }
        else
        {
            $Msg = "Project not found";
            $StatusCode = 404;
        }

        return $this->json([
            'message' => $Msg
        ], $StatusCode);
    }
}
