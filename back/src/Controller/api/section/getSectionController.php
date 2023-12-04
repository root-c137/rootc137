<?php

namespace App\Controller\api\section;

use App\Entity\Section;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;

class getSectionController extends AbstractController
{
    #[Route('/api/section/{name}', name: 'app_api_section_get_section', methods: ['GET'])]
    public function index($name, EntityManagerInterface $Manager): JsonResponse
    {
        $Msg = "Ok";
        $StatusCode = 200;

        $Section = $Manager->getRepository(Section::class)->findOneBy(['Name' => $name]);
        if(!$Section)
        {
            $Msg = "section not found.";
            $StatusCode = 404;
        }

        return $this->json([
            'message' => $Msg,
            'data' => $Section,
        ], $StatusCode);
    }
}
