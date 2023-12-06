<?php

namespace App\Controller\api\section;

use App\Entity\Section;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;

class getSectionsController extends AbstractController
{
    #[Route('/api/sections', name: 'app_api_section_get_sections')]
    public function index(EntityManagerInterface $M): JsonResponse
    {
        $Msg = "OK";
        $StatusCode = 200;
        $Sections = $M->getRepository(Section::class)->findAll();
        $Data = [];

        if(!$Sections)
        {
            $Msg = "0 sections.";
            $StatusCode = 404;
        }
        else
        {
            foreach($Sections as $s)
            {
                $Data[] = [
                    "id" => $s->getId(),
                    "name" => $s->getName(),
                    "resume" => $s->getResume(),
                    "presentation" => $s->getPresentation(),
                    "createdAt" => $s->getCreatedAt(),
                    "updatedAt" => $s->getUpdatedAt()
                ];
            }
        }

        return $this->json([
            'message' => $Msg,
            'data' => $Data
        ], $StatusCode);
    }
}
