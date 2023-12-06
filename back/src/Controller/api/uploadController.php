<?php

namespace App\Controller\api;

use App\Service\FileUploader;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

class uploadController extends AbstractController
{
    #[Route('/api/upload', name: 'app_api_upload')]
    public function index(Request $request, FileUploader $fileUploader): JsonResponse
    {
        $Msg = "OK";
        $StatusCode = 200;
        $Data = $request;

        dd($request);

        if ($Data) {
            $brochureFileName = $fileUploader->upload($Data['fileName']);
            $Data = $brochureFileName;
        }
        else
        {
            $Msg = "L'image n'a pas pu être téléchargé.";
            $StatusCode = 500;
        }

        return $this->json(['message' => $Msg], $StatusCode);
    }
}
