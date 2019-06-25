<?php

namespace App\Service;

use GuzzleHttp\Client;
use GuzzleHttp\Exception\RequestException;

class NutritionixService
{
    private $client;

    /**
     * NutritionixService constructor.
     *
     * @param Client $client
     */
    public function __construct(Client $client)
    {
        $this->client = $client;
    }

    /**
     * @param $query
     * @return mixed
     *
     * @throws \Exception
     */
    public function search($query)
    {
        try {
            $result = $this->client->post('/v2/natural/nutrients', ['form_params' => [
                'query' => $query, 'timezone' => "US/Eastern"]
            ]);

            return json_decode($result->getBody()->getContents(), true);
        } catch (RequestException $exception) {
            throw new \Exception($exception->getResponse()->getBody()->getContents(), 0, $exception);
        }
    }
}
