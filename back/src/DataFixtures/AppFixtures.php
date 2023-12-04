<?php

namespace App\DataFixtures;

use App\Entity\Category;
use App\Entity\Project;
use App\Entity\Section;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\ORM\EntityManagerInterface;
use Doctrine\Persistence\ObjectManager;

class AppFixtures extends Fixture
{
    public function load(ObjectManager $manager): void
    {
        // $product = new Product();
        // $manager->persist($product);

        $Section = new Section();
        $Section->setName('rootledev');
        $Section->setResume('..;');
        $Section->setPresentation('...');
        $Section->setCreatedAt(new \DateTimeImmutable() );

        $manager->persist($Section);

        $Section2 = new Section();
        $Section2->setName('rootleyoutubeu');
        $Section2->setResume('..;');
        $Section2->setPresentation('...');
        $Section2->setCreatedAt(new \DateTimeImmutable() );

        $manager->persist($Section2);

        $Cat = new Category();
        $Cat->setName('web');
        $Cat->setCreatedAt(new \DateTimeImmutable() );

        $manager->persist($Cat);

        $Project = new Project();
        $Project->setTitle('Project1');
        $Project->setStatus('terminé');
        $Project->setPresentation(' ');
        $Project->setLinks('...');
        $Project->setFront('Next.js');
        $Project->setBack('Symfony');
        $Project->setSection($Section);
        $Project->setImage('...');
        $Project->setCategory("web");
        $Project->setCreatedAt(new \DateTimeImmutable() );
        $Project->setUpdatedAt($Project->getCreatedAt() );

        $manager->persist($Project);

        $Project2 = new Project();
        $Project2->setTitle('Project2');
        $Project2->setStatus('en cours');
        $Project2->setPresentation(' ');
        $Project2->setLinks('...');
        $Project2->setFront('Next.js');
        $Project2->setBack('expressjs');
        $Project2->setSection($Section);
        $Project2->setImage('...');
        $Project2->setCategory("app, web");
        $Project2->setCreatedAt(new \DateTimeImmutable() );
        $Project2->setUpdatedAt($Project->getCreatedAt() );

        $manager->persist($Project2);

        $Project3 = new Project();
        $Project3->setTitle('Project3');
        $Project3->setStatus('en cours');
        $Project3->setPresentation(' ');
        $Project3->setLinks('...');
        $Project3->setFront('Flutter');
        $Project3->setBack('Symfony');
        $Project3->setSection($Section);
        $Project3->setImage('...');
        $Project3->setCategory("app");
        $Project3->setCreatedAt(new \DateTimeImmutable() );
        $Project3->setUpdatedAt($Project->getCreatedAt() );

        $manager->persist($Project3);

        $Project4 = new Project();
        $Project4->setTitle('Project3');
        $Project4->setStatus('en cours');
        $Project4->setPresentation(' ');
        $Project4->setLinks('...');
        $Project4->setFront('Flutter');
        $Project4->setBack('Symfony');
        $Project4->setSection($Section2);
        $Project4->setImage('...');
        $Project4->setCategory("app");
        $Project4->setCreatedAt(new \DateTimeImmutable() );
        $Project4->setUpdatedAt($Project->getCreatedAt() );

        $manager->persist($Project4);
        $manager->flush();
    }
}
