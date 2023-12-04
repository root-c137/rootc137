<?php

namespace App\Controller\api\project;

use App\Entity\Project;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

class updateProjectController extends AbstractController
{
    #[Route('/api/project/{id}', name: 'app_api_project_update_project', methods: ['PUT'] )]
    public function index(Project $project = null, Request $request, EntityManagerInterface $M): JsonResponse
    {
        $Msg = "Ok";
        $StatusCode = 200;
        $Data = [];

        if($project)
        {
            if($request->toArray())
            {
                $project->setTitle($Data['Title']);
                $project->setFront($Data['Front'] );
                $project->setBack($Data['Back'] );
                $project->setImage($Data['Image']);
                $project->setPresentation($Data['Presentation']);
                $project->setLinks($Data['Links'] );
                $project->setCategory($Data['Category']);
                $project->setStatus($Data['Status']);
                $project->setUpdatedAt(new \DateTimeImmutable() );

                $M->flush();

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
            else
            {
                $Msg = "Data empty..";
                $StatusCode = 400;
            }
        }
        else
        {
            $Msg = "Project not found.";
            $StatusCode = 404;
        }

        return $this->json([
            'message' => $Msg,
            'data' => $Data
        ], $StatusCode);
    }
}
