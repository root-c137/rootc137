<?php

namespace App\Controller\api\section;

use App\Entity\Section;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;

class getSectionController extends AbstractController
{
    #[Route('/api/section/{id}', name: 'app_api_section_get_section', methods: ['GET'])]
    public function index(Section $section = null, EntityManagerInterface $Manager): JsonResponse
    {
        $Msg = "Ok";
        $StatusCode = 200;
        $Data = null;

        if(!$section)
        {
            $Msg = "section not found.";
            $StatusCode = 404;
        }
        else
        {
            $Data = [
                "id" => $section->getId(),
                "name" => $section->getName(),
                "resume" => $section->getResume(),
                "presentation" => $section->getPresentation(),
                "createdAt" => $section->getCreatedAt(),
                "updatedAt" => $section->getUpdatedAt()
            ];
        }

        return $this->json([
            'message' => $Msg,
            'data' => $Data,
        ], $StatusCode);
    }
}
