<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\ResponseHeaderBag;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\BinaryFileResponse;

class ImageController extends AbstractController
{
        #[Route('/get-image/{img}', name: 'imagecontroller', methods: ['GET'])]
        public function index($img): Response
        {
            //Retrieve the root folder with the kernel and then add the location of the
            //file
            $filename = $this->getParameter('kernel.project_dir') . '/uploads/' . $img;
            //If the file exists then we return it, otherwise return 404
            if (file_exists($filename)) {
                //return a new BinaryFileResponse with the file name
                return new BinaryFileResponse($filename);
            } else {
                return new JsonResponse(null, 404);
            }
        }
}
