<?php

namespace App\Controller\api\user;

use App\Entity\User;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;

class getUsersController extends AbstractController
{
    #[Route('/api/users', name: 'app_api_user_get_users', methods: ['GET'])]
    public function index(EntityManagerInterface $Manager): JsonResponse
    {
        $Users = $Manager->getRepository(User::class)->findAll();
        $Data = [];

        foreach($Users as $user)
        {
            $Data[] = [
                "id" => $user->getId(),
                "email" => $user->getEmail(),
                "username" => $user->getUsername(),
                "roles" => $user->getRoles(),
                "createdAt" => $user->getCreatedAt()->format("d-m-Y H:i"),
                "updatedAt" => $user->getUpdatedAt() !== null ? $user->getUpdatedAt()->format("d-m-Y H:i") : null
            ];
        }

        return $this->json([
            'message' => 'All users have been successfully recovered.',
            'data' => $Data,
        ]);
    }
}
