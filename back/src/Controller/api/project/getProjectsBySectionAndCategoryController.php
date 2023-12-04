<?php

namespace App\Controller\api\project;

use App\Entity\Category;
use App\Entity\Project;
use App\Entity\Section;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;

class getProjectsBySectionAndCategoryController extends AbstractController
{
    #[Route('/api/projects/{section}/{category}', name: 'app_api_project_get_projects_by_section_and_category')]
    public function index($section, $category, EntityManagerInterface $Manager): JsonResponse
    {
        $Msg = "Ok";
        $StatusCode = 200;
        $Data = [];
        $Section = $Manager->getRepository(Section::class)->findOneBy(['Name' => $section]);

        if($Section)
        {

                $Projects = $Manager->getRepository(Project::class)->findByLike($Section, $category);
                if($Projects)
                {
                    foreach ($Projects as $project)
                    {
                        $Data[] = [
                            "Title" => $project->getTitle(),
                            "Image" => $project->getImage(),
                            "Presentation" => $project->getPresentation(),
                            "Front" => $project->getFront(),
                            "Back" => $project->getBack(),
                            "Status" => $project->getStatus(),
                            "Section" => $project->getSection()->getName(),
                            "Category" => $project->getCategory()
                        ];
                    }
                }
                else
                {
                    $Msg = "Projects not found";
                    $StatusCode = 404;
                }
        }
        else
        {
            $Msg = "Section not found";
            $StatusCode = 404;
        }

        return $this->json([
            'message' => $Msg,
            'data' => $Data],
            $StatusCode);
    }
}
