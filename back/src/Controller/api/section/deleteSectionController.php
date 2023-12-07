<?php

namespace App\Controller\api\section;

use App\Entity\Section;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;

class deleteSectionController extends AbstractController
{
    #[Route('/api/section/{id}', name: 'app_api_section_delete_section')]
    public function index(Section $section = null, EntityManagerInterface $M): JsonResponse
    {
        $Msg = "OK";
        $StatusCode = 200;

        if($section)
        {
            $M->remove($section);
            //$M->flush(); -> ca provoque un bug pour le moment "cascade..";
        }
        else
        {
            $Msg = "Section not found.";
            $StatusCode = 404;
        }

        return $this->json([
            'message' => $Msg
        ], $StatusCode);
    }
}
