<?php

namespace App\Controller\api\user;

use App\Entity\User;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

class getUserController extends AbstractController
{
    #[Route('/api/user/{id}', name: 'app_api_user_get_user', methods: ['GET'])]
    public function index(User $user = null): JsonResponse
    {
        $Data = $user;
        $Msg = 'A user has been successfully recovered.';
        $StatusCode = 200;

        if(!$user)
        {
            $StatusCode = 404;
            $Msg = "no users found.";
        }


        return $this->json(['message' => $Msg, 'data' => $Data], $StatusCode);
    }
}
