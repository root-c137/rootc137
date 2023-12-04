<?php

namespace App\Controller\api\project;

use App\Entity\Project;
use Cassandra\Date;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

class createProjectController extends AbstractController
{
    #[Route('/api/project', name: 'app_api_project_create_project', methods: ['POST'] )]
    public function index(Request $request, EntityManagerInterface $Manager): JsonResponse
    {
        $Msg = "The project has been added.";
        $StatusCode = 200;
        $Data = $request->toArray();

        $Project = new Project();
        if($Data)
        {
            $Project->setTitle($Data['Title']);
            $Project->setImage($Data['Image']);
            $Project->setFront($Data['Front']);
            $Project->setBack($Data['Back'] );
            $Project->setLinks($Data['Links'] );
            $Project->setStatus($Data['Status'] );
            $Project->setPresentation($Data['Presentation'] );
            $Project->setCreatedAt(new \DateTimeImmutable() );
            $Project->setUpdatedAt($Project->getCreatedAt() );

            $Manager->persist($Project);
            $Manager->flush();
        }
        else
        {
            $Msg = "Empty data..";
            $StatusCode = 400;
        }

        return $this->json([
            'message' => $Msg,
            'data' => $Project,
        ], $StatusCode);
    }

    private function downloadImage($Image)
    {

    }
}


