<?php

namespace App\Controller\api\project;

use App\Entity\Project;
use App\Entity\Section;
use App\Service\FileUploader;
use Doctrine\ORM\EntityManagerInterface;
use Exception;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

class updateProjectController extends AbstractController
{
    #[Route('/api/project/{id}/title', name: 'app_api_project_update_project_title')]
    public function index(Project $project = null, Request $request, EntityManagerInterface $M): JsonResponse
    {
        $Msg = "OK";
        $StatusCode = 200;
        $Data = null;

        if($project)
        {
            $D = $request->toArray();
            if(!empty($D) && !empty($D['title']) )
            {
                $project->setTitle($D['title']);
                $M->flush();
                $Data = [
                    "id" => $project->getId(),
                    "title" => $project->getTitle(),
                    "section" => $project->getSection()->getName(),
                    "category" => $project->getCategory(),
                    "status" => $project->getStatus(),
                    "front" => $project->getFront(),
                    "back" => $project->getBack(),
                    "links" => $project->getLinks(),
                    "presentation" => $project->getPresentation()
                ];

            }
            else
            {
                $Msg = "empty data..";
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

    #[Route('/api/project/{id}/section', name: 'app_api_project_update_section')]
    public function section(Project $project = null, Request $request, EntityManagerInterface $M): JsonResponse
    {
        $Msg = "OK";
        $StatusCode = 200;
        $Data = null;

        if($project)
        {
            $D = $request->toArray();
            if (!empty($D) && !empty($D['section'])) {
                $Section = $M->getRepository(Section::class)->findOneBy(['Name' => $D['section']]);
                if($Section)
                {
                    $project->setSection($Section);
                    $M->flush();
                    $Data = [
                        "id" => $project->getId(),
                        "title" => $project->getTitle(),
                        "section" => $project->getSection()->getName(),
                        "category" => $project->getCategory(),
                        "status" => $project->getStatus(),
                        "front" => $project->getFront(),
                        "back" => $project->getBack(),
                        "links" => $project->getLinks(),
                        "presentation" => $project->getPresentation()
                    ];
                } else {
                    $Msg = "Section not found";
                    $StatusCode = 404;
                }
            } else {
                $Msg = "empty data..";
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

    #[Route('/api/project/{id}/status', name: 'app_api_project_update_status')]
    public function status(Project $project = null, Request $request, EntityManagerInterface $M): JsonResponse
    {
        $Msg = "OK";
        $StatusCode = 200;
        $Data = null;

        if($project)
        {
            $D = $request->toArray();
            if (!empty($D) && !empty($D['status']))
            {
                $project->setStatus($D['status']);
                $M->flush();
                $Data = [
                    "id" => $project->getId(),
                    "title" => $project->getTitle(),
                    "section" => $project->getSection()->getName(),
                    "category" => $project->getCategory(),
                    "status" => $project->getStatus(),
                    "front" => $project->getFront(),
                    "back" => $project->getBack(),
                    "links" => $project->getLinks(),
                    "presentation" => $project->getPresentation()
                ];
            } else {
                $Msg = "empty data..";
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

    #[Route('/api/project/{id}/category', name: 'app_api_project_update_category')]
    public function category(Project $project = null, Request $request, EntityManagerInterface $M): JsonResponse
    {
        $Msg = "OK";
        $StatusCode = 200;
        $Data = null;

        if($project)
        {
            $D = $request->toArray();
            if (!empty($D) && !empty($D['category'])) {
                $project->setSection($D['category']);
                $M->flush();
                $Data = [
                    "id" => $project->getId(),
                    "title" => $project->getTitle(),
                    "section" => $project->getSection()->getName(),
                    "category" => $project->getCategory(),
                    "status" => $project->getStatus(),
                    "front" => $project->getFront(),
                    "back" => $project->getBack(),
                    "links" => $project->getLinks(),
                    "presentation" => $project->getPresentation()
                ];
            } else {
                $Msg = "empty data..";
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

    #[Route('/api/project/{id}/front', name: 'app_api_project_update_front')]
    public function front(Project $project = null, Request $request, EntityManagerInterface $M): JsonResponse
    {
        $Msg = "OK";
        $StatusCode = 200;
        $Data = null;

        if($project) {

            $D = $request->toArray();
            if (!empty($D) && !empty($D['front']))
            {
                $project->setFront($D['front']);
                $M->flush();
                $Data = [
                    "id" => $project->getId(),
                    "title" => $project->getTitle(),
                    "section" => $project->getSection()->getName(),
                    "category" => $project->getCategory(),
                    "status" => $project->getStatus(),
                    "front" => $project->getFront(),
                    "back" => $project->getBack(),
                    "links" => $project->getLinks(),
                    "presentation" => $project->getPresentation()
                ];
            } else {
                $Msg = "empty data..";
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
    #[Route('/api/project/{id}/back', name: 'app_api_project_update_back')]
    public function back(Project $project = null, Request $request, EntityManagerInterface $M): JsonResponse
    {
        $Msg = "OK";
        $StatusCode = 200;
        $Data = null;

        if($project)
        {
            $D = $request->toArray();
            if (!empty($D) && !empty($D['back'])) {
                $project->setBack($D['back']);
                $M->flush();
                $Data = [
                    "id" => $project->getId(),
                    "title" => $project->getTitle(),
                    "section" => $project->getSection()->getName(),
                    "category" => $project->getCategory(),
                    "status" => $project->getStatus(),
                    "front" => $project->getFront(),
                    "back" => $project->getBack(),
                    "links" => $project->getLinks(),
                    "presentation" => $project->getPresentation()
                ];
            } else {
                $Msg = "empty data..";
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
    #[Route('/api/project/{id}/links', name: 'app_api_project_update_links')]
    public function links(Project $project = null, Request $request, EntityManagerInterface $M, FileUploader $fileUploader): JsonResponse
    {
        $Msg = "OK";
        $StatusCode = 200;
        $Data = null;

        if($project) {

            $D = $request->toArray();
            if (!empty($D) && !empty($D['links'])) {
                $project->setLinks($D['links']);
                $M->flush();
                $Data = [
                    "id" => $project->getId(),
                    "title" => $project->getTitle(),
                    "section" => $project->getSection()->getName(),
                    "category" => $project->getCategory(),
                    "status" => $project->getStatus(),
                    "front" => $project->getFront(),
                    "back" => $project->getBack(),
                    "links" => explode(',',$project->getLinks()),
                    "presentation" => $project->getPresentation()
                ];
            } else {
                $Msg = "empty data..";
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
    #[Route('/api/project/{id}/image', name: 'app_api_project_update_image')]
    public function image(Project $project = null, Request $request, EntityManagerInterface $M,
    FileUploader $fileUploader): JsonResponse
    {
        $Msg = "OK";
        $StatusCode = 200;
        $Data = null;
        $File = $request->files->get('file');


        if($project)
        {
            if ($File)
            {
                try
                {
                    $newFileName = $fileUploader->upload($File);
                    $project->setImage($newFileName);
                    $M->flush();
                    $Data = [
                        "id" => $project->getId(),
                        "title" => $project->getTitle(),
                        "section" => $project->getSection()->getName(),
                        "category" => $project->getCategory(),
                        "status" => $project->getStatus(),
                        "front" => $project->getFront(),
                        "back" => $project->getBack(),
                        "links" => $project->getLinks(),
                        "image" => $project->getImage(),
                        "presentation" => $project->getPresentation()
                    ];
                }catch (Exception $e) {
                    $Msg = "Error uploading file: " . $e->getMessage();
                    $StatusCode = 500; // Code HTTP 500 pour une erreur interne du serveur
                }
            }
            else
            {
                $Msg = "Empty file.";
                $StatusCode = 500;
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
