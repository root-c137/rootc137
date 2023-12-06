<?php

namespace App\Controller\api\messages;

use App\Entity\Message;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;

class getMessagesController extends AbstractController
{
    #[Route('/api/messages', name: 'app_api_messages_get_messages', methods: ['GET'])]
    public function index(EntityManagerInterface $M): JsonResponse
    {
        $Msg = "OK";
        $StatusCode = 200;
        $Messages = $M->getRepository(Message::class)->findAll();

        if(!$Messages)
        {
            $Msg = "Aucun message.";
            $StatusCode = 404;
        }

        return $this->json([
            'message' => $Msg,
            'data' => $Messages
        ], $StatusCode);
    }
}
