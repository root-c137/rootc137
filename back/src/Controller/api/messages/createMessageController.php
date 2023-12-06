<?php

namespace App\Controller\api\messages;

use App\Entity\Message;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

class createMessageController extends AbstractController
{
    #[Route('/message', name: 'app_api_messages_create_message', methods: ['POST'])]
    public function index(Request $request, EntityManagerInterface $M): JsonResponse
    {
        $Msg = "OK";
        $StatusCode = 200;
        $Data = $request->toArray();

        if($Data && !empty($Data['Email']) && !empty($Data['Name']) && !empty($Data['Msg']) )
        {
            $Message = new Message();
            $Message->setName($Data['Name'] );
            $Message->setEmail($Data['Email'] );
            $Message->setTxt($Data['Msg'] );
            $Message->setCreatedAt(new \DateTimeImmutable() );
            $Message->setIP($request->getClientIp());

            $M->persist($Message);
            $M->flush();;
            $Data = $Message;
        }
        else
        {
            $Msg = "Le message n'a pas pu être envoyé. Remplissez bien tous les champs.";
            $StatusCode = 400;

        }
        return $this->json([
            'message' => $Msg,
            'data' => $Data
        ], $StatusCode);
    }
}
