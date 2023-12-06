<?php

namespace App\Controller\api\section;

use App\Entity\Section;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

class updateSectionController extends AbstractController
{
    #[Route('/api/section/{id}/name', name: 'app_api_section_update_section')]
    public function index(Section $section, Request $request, EntityManagerInterface $M): JsonResponse
    {
        $Msg = "OK";
        $StatusCode = 200;
        $Data = [];

        if($section)
        {
            $D = $request->toArray();
            if(!empty($D) && strlen($D['name']) > 2)
            {
                $s = $M->getRepository(Section::class)->findOneBy(['Name' => $D['name']]);
                if(!$s)
                {
                    $section->setName($D['name']);
                    $section->setUpdatedAt(new \DateTimeImmutable() );

                    $Data = [
                        "id" => $section->getId(),
                        "name" => $section->getName(),
                        "resume" => $section->getResume(),
                        "presentation" => $section->getPresentation(),
                        "createdAt" => $section->getCreatedAt(),
                        "updatedAt" => $section->getUpdatedAt()
                    ];
                    $M->flush();
                }
                else
                {
                    $StatusCode = 500;
                    $Msg = "this section aleardy exist.";
                }
            }
            else
            {
                $StatusCode = 400;
                $Msg = "Name incorrect.";
            }
        }
        else
        {
            $StatusCode = 404;
            $Msg = "Section not found.";
        }

        return $this->json([
            'message' => $Msg,
            'data' => $Data
        ], $StatusCode);
    }

    #[Route('/api/section/{id}/resume', name: 'app_api_section_update_section_resume')]
    public function resume(Section $section, Request $request, EntityManagerInterface $M): JsonResponse
    {
        $Msg = "OK";
        $StatusCode = 200;
        $Data = [];

        if($section)
        {
            $D = $request->toArray();
            if(!empty($D) && strlen($D['resume']) > 20)
            {
                    $section->setResume($D['resume']);
                    $section->setUpdatedAt(new \DateTimeImmutable() );

                    $Data = [
                        "id" => $section->getId(),
                        "name" => $section->getName(),
                        "resume" => $section->getResume(),
                        "presentation" => $section->getPresentation(),
                        "createdAt" => $section->getCreatedAt(),
                        "updatedAt" => $section->getUpdatedAt()
                    ];
                    $M->flush();
            }
            else
            {
                $StatusCode = 400;
                $Msg = "Resume incorrect. ( > 20 )";
            }
        }
        else
        {
            $StatusCode = 404;
            $Msg = "Section not found.";
        }

        return $this->json([
            'message' => $Msg,
            'data' => $Data
        ], $StatusCode);
    }
    #[Route('/api/section/{id}/presentation', name: 'app_api_section_update_section_presentation', methods: ['PUT'] )]
    public function presentation(Section $section, Request $request, EntityManagerInterface $M): JsonResponse
    {
        $Msg = "OK";
        $StatusCode = 200;
        $Data = [];

        if($section)
        {
            $D = $request->toArray();
            if(!empty($D) && strlen($D['presentation']) > 3)
            {
                $section->setPresentation(html_entity_decode($D['presentation']));
                $section->setUpdatedAt(new \DateTimeImmutable() );

                $Data = [
                    "id" => $section->getId(),
                    "name" => $section->getName(),
                    "resume" => $section->getResume(),
                    "presentation" => $section->getPresentation(),
                    "createdAt" => $section->getCreatedAt(),
                    "updatedAt" => $section->getUpdatedAt()
                ];
                $M->flush();
            }
            else
            {
                $StatusCode = 400;
                $Msg = "Resume incorrect. ( > 300 )";
            }
        }
        else
        {
            $StatusCode = 404;
            $Msg = "Section not found.";
        }

        return $this->json([
            'message' => $Msg,
            'data' => $Data
        ], $StatusCode);
    }
}
