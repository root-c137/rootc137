<?php

namespace App\Controller\api\section;

use App\Entity\Section;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

class createSectionController extends AbstractController
{
    #[Route('/api/section', name: 'app_api_section_create_section', methods: ['POST'] )]
    public function index(Request $request, EntityManagerInterface $Manager): JsonResponse
    {
        $Msg = "Ok";
        $StatusCode = 200;
        $Data = $request->toArray();

        if($Data)
        {
            if(!empty($Data['Name']) && !empty($Data['Resume']) &&
            !empty($Data['Presentation']) )
            {
                $Section = new Section();
                $Section->setName($Data['Name']);
                $Section->setResume($Data['Resume']);
                $Section->setPresentation($Data['Presentation']);
                $Section->setCreatedAt(new \DateTimeImmutable());

                $Data = $Section;
                $Manager->persist($Section);
                $Manager->flush();
            }
            else
            {
                $Msg = "Empty data..";
                $StatusCode = 400;
            }
        }
        else
        {
            $Msg = "Empty data..";
            $StatusCode = 400;
        }

        return $this->json([
            'message' => $Msg,
            'data' => $Data
        ], $StatusCode);
    }
}


