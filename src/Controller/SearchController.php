<?php

namespace App\Controller;

use App\Entity\QueryHistory;
use FOS\RestBundle\View\View;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use FOS\RestBundle\Controller\FOSRestController;
use FOS\RestBundle\Controller\Annotations\Get;

class SearchController extends FOSRestController
{
    /**
     * Lists all Articles.
     * @Get("/search")
     *
     * @return View
     */
    public function searchFoodAction(Request $request)
    {
        $data = $this->get('service.nutritionix')->search($request->get('data'));

        $queryHistory = new QueryHistory();
        $queryHistory->setQuery($request->get('data'));
        $queryHistory->setQueryResult(json_encode($data));
        $queryHistory->setCalories($request->get('calories'));
        $queryHistory->setDate(new \DateTime());

        $em = $this->getDoctrine()->getManager();
        $em->persist($queryHistory);
        $em->flush($queryHistory);

        return $this->view($data, Response::HTTP_OK);
    }

    /**
     * @get("/queries-history")
     */
    public function getQueriesHistory()
    {
        $queriesHistory = $this->getDoctrine()
            ->getRepository('App:QueryHistory')
            ->getLastRowsDesc(10);

        return $this->view($queriesHistory, Response::HTTP_OK);
    }
}