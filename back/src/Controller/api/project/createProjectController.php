<?php

namespace App\Controller\api\project;

use App\Entity\Project;
use App\Entity\Section;
use App\Service\FileUploader;
use Cassandra\Date;
use Doctrine\ORM\EntityManagerInterface;
use Exception;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\String\Slugger\AsciiSlugger;

class createProjectController extends AbstractController
{
    #[Route('/api/project', name: 'app_api_project_create_project', methods: ['POST'] )]
    public function index(Request $request, EntityManagerInterface $Manager, FileUploader $fileUploader): JsonResponse
    {
        $Msg = "The project has been added.";
        $StatusCode = 200;
        $Data = null;
        $Project = new Project();

        if(!empty($request->request->get('Title')) &&
            !empty($request->request->get('Front')) && !empty($request->request->get('Back')) &&
            !empty($request->request->get('Links')) && !empty($request->request->get('Status')) &&
            !empty($request->request->get('Presentation') ) && !empty($request->files->get('File')) &&
            !empty($request->request->get('Section')) )
        {
            if(!empty($request->request->get('Section') ))
            {
                $Section = $Manager->getRepository(Section::class)->findOneBy(['Name' => $request->request->get('Section') ]);
                if($Section)
                {
                    try
                    {
                        $File = $request->files->get('File');
                        $newFileName = $fileUploader->upload($File);
                        $Project->setImage($newFileName);

                        $Slugger = new AsciiSlugger();
                        $Project->setTitle($request->request->get('Title'));
                        $Project->setFront($request->request->get('Front'));
                        $Project->setBack($request->request->get('Back' ));
                        $Project->setLinks($request->request->get('Links'));
                        $Project->setStatus($request->request->get('Status'));
                        $Project->setCategory($request->request->get('Category') );
                        $Project->setPresentation($request->request->get('Presentation'));
                        $Project->setSection($Section);
                        $Project->setSlug($Slugger->slug($Project->getTitle())->lower());
                        $Project->setCreatedAt(new \DateTimeImmutable() );
                        $Project->setUpdatedAt($Project->getCreatedAt() );

                        if($request->request->get('Ios'))
                            $Project->setIos($request->request->get('Ios') );
                        if($request->request->get('Android') )
                            $Project->setAndroid($request->request->get('Android') );
                        if($request->request->get('Web') )
                            $Project->setWeb($request->request->get('Web') );
                        if($request->request->get('GitHub') )
                            $Project->setGithub($request->request->get('GitHub') );

                        $Manager->persist($Project);
                        $Manager->flush();

                        $Data = [
                            "id" => $Project->getId(),
                            "title" => $Project->getTitle(),
                            "section" => $Project->getSection()->getName(),
                            "category" => $Project->getCategory(),
                            "status" => $Project->getStatus(),
                            "front" => $Project->getFront(),
                            "back" => $Project->getBack(),
                            "links" => $Project->getLinks(),
                            "image" => $Project->getImage(),
                            "presentation" => $Project->getPresentation()
                        ];
                    }catch(Exception $e) {
                        $Msg = "Error uploading file: " . $e->getMessage();
                        $StatusCode = 500; // Code HTTP 500 pour une erreur interne du serveur
                    }
                }
                else
                {
                    $Msg = "Section not found.";
                    $StatusCode = 404;
                }
            }

        }
        else
        {
            $Msg = "Empty data..";
            $StatusCode = 400;
        }

        return $this->json([
            'message' => $Msg,
            'data' => $Data,
        ], $StatusCode);
    }

    private function downloadImage($Image)
    {

    }
}


