<?php

namespace App\Controller\api\user;

use App\Entity\User;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;
use Symfony\Component\Routing\Annotation\Route;

class createUserController extends AbstractController
{
    #[Route('/api/create_user', name: 'app_api_user_create_user')]
    public function index(Request $request, EntityManagerInterface $Manager, UserPasswordHasherInterface $Encoder): JsonResponse
    {
        $Msg = "Ok";
        $StatusCode = 200;

        $Data = $request->toArray();
        if(isset($Data['Email']) && isset($Data['Pass']) )
        {
            if(!preg_match('/[\'^£$%&*()}{@#~?><>,|=_+¬-]/', $Data['Email']) )
            {
                $StatusCode = 400;
                $Msg = "the email address is invalid";
            }
            else
            {
                $User = $Manager->getRepository(User::class)->findOneBy(['email' => $Data['Email'] ] );
                if(!$User)
                {
                    $U = new User();
                    $PassHash = $Encoder->hashPassword($U, $Data['Pass']);
                    $U->setEmail($Data['Email']);
                    $U->setUsername($Data['Email']);
                    $U->setPassword($PassHash );
                    $U->setCreatedAt(new \DateTimeImmutable());

                    $Manager->persist($U);
                    $Manager->flush();
                }
                else
                {
                    $StatusCode = 500;
                    $Msg = "A user already exists with this email";
                }
            }
        }
        else
        {
            $StatusCode = 400;
            $Msg = "The email address and or password is missing";
        }


        return $this->json(['message' => $Msg], $StatusCode);
    }
}

