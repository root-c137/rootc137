<?php

namespace App\Controller\api\user;

use App\Entity\User;
use Cassandra\Type\UserType;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;
use Symfony\Component\Routing\Annotation\Route;

class updateUserController extends AbstractController
{
    #[Route('/api/user', name: 'app_api_user_update_user', methods: ["PUT"] )]
    public function index(Request $request, EntityManagerInterface $Manager, UserPasswordHasherInterface $Encoder): JsonResponse
    {
        $Msg = 'Ok';
        $StatusCode = 200;
        $Data = $request->toArray();

        if($Data )
        {
            $User = $Manager->getRepository(User::class)->find($Data['id']);
            if($User)
            {
               if(!empty($Data['Pass']) )
               {
                   $PassHash = $Encoder->hashPassword($User, $Data['Pass']);
                   $User->setPassword($PassHash);
               }

                $User->setEmail($Data['Email']);
                $User->setUsername($Data['Username']);
                $User->setUpdatedAt(new \DateTimeImmutable());

                $Manager->flush();
            }
            else
            {
                $StatusCode = 404;
                $Msg = "User not found.";
            }
        }
        else
        {
            $StatusCode = 400;
            $Msg = "Missing data.";
        }

        return $this->json([
            'message' => $Msg
        ]);
    }
}
