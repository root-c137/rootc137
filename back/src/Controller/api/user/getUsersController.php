<?php

namespace App\Controller\api\user;

use App\Entity\User;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;

class getUsersController extends AbstractController
{
    #[Route('/api/user', name: 'app_api_user_get_users', methods: ['GET'])]
    public function index(EntityManagerInterface $Manager): JsonResponse
    {
        $Users = $Manager->getRepository(User::class)->findAll();

        return $this->json([
            'message' => 'All users have been successfully recovered.',
            'data' => $Users,
        ]);
    }
}
