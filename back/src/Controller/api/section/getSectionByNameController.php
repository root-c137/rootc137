<?php

namespace App\Controller\api\section;

use App\Entity\Section;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;

class getSectionByNameController extends AbstractController
{
    #[Route('/section/byname/{name}', name: 'app_api_section_get_section_name', methods: ['GET'])]
    public function index($name, EntityManagerInterface $M): JsonResponse
    {
        $Msg = "Ok";
        $StatusCode = 200;
        $Data = [];

        if(!$name)
        {
            $Msg = "empty data..";
            $StatusCode = 404;
        }
        else
        {
            $s = $M->getRepository(Section::class)->findOneBy(['Name' => $name]);
            if($s)
            {
                $Data = [
                    "id" => $s->getId(),
                    "name" => $s->getName(),
                    "resume" => $s->getResume(),
                    "presentation" => $s->getPresentation(),
                    "createdAt" => $s->getCreatedAt(),
                    "updatedAt" => $s->getUpdatedAt()
                ];
            }
            else
            {
                $Msg = "section not found.";
                $StatusCode = 404;
            }
        }

        return $this->json([
            'message' => $Msg,
            'data' => $Data,
        ], $StatusCode);
    }
}
