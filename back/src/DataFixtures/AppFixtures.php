<?php

namespace App\DataFixtures;

use App\Entity\User;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\ORM\EntityManagerInterface;
use Doctrine\Persistence\ObjectManager;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;


class AppFixtures extends Fixture
{
    public function load(ObjectManager $manager): void
    {
        // $product = new Product();
        // $manager->persist($product);

        $User = new User();
        $User->setEmail("hello@rootc137.com");
        $User->setUsername("rootc137");
        $User->setRoles(["Admin"]);
        $User->setCreatedAt(new \DateTimeImmutable());

        $manager->persist($User);
        $manager->flush();
    }
}
