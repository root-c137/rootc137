<?php

namespace App\Controller\api;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;

class testtokenController extends AbstractController
{
    #[Route('/api/testtoken', name: 'app_api_testtoken')]
    public function index(): JsonResponse
    {
        return $this->json([
            'message' => 'OK'
        ], 200);
    }
}
