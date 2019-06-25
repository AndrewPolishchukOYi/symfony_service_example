<?php

namespace App\Repository;

use App\Entity\QueryHistory;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Symfony\Bridge\Doctrine\RegistryInterface;

/**
 * @method QueryHistory|null find($id, $lockMode = null, $lockVersion = null)
 * @method QueryHistory|null findOneBy(array $criteria, array $orderBy = null)
 * @method QueryHistory[]    findAll()
 * @method QueryHistory[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class QueryHistoryRepository extends ServiceEntityRepository
{
    public function __construct(RegistryInterface $registry)
    {
        parent::__construct($registry, QueryHistory::class);
    }

    /**
     * @param int $quantity limit returns
     *
     * @return QueryHistory[] Returns an array of last QueryHistory arrays
     */
    public function getLastRowsDesc($quantity = 10): ? array
    {
        $queriesHistory = $this->createQueryBuilder('q')
            ->orderBy('q.id', 'DESC')
            ->setMaxResults($quantity)
            ->getQuery()
            ->getArrayResult();


        foreach ($queriesHistory as &$item) {
            $item["query_result"] = json_decode($item["query_result"], true);
        }

        return $queriesHistory;
    }
}
