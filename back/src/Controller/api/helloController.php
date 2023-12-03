<?php

namespace App\Controller\api;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;

class helloController extends AbstractController
{
    #[Route('/hello', name: 'app_api_hello')]
    public function index(): JsonResponse
    {
        return $this->json([
            'message' => 'Welcome to rootc137 API !'
        ]);
    }
}
