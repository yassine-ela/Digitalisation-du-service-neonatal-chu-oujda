<?php

namespace App\Repository;

use App\Entity\FicheSurveillanceTable;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<FicheSurveillanceTable>
 *
 * @method FicheSurveillanceTable|null find($id, $lockMode = null, $lockVersion = null)
 * @method FicheSurveillanceTable|null findOneBy(array $criteria, array $orderBy = null)
 * @method FicheSurveillanceTable[]    findAll()
 * @method FicheSurveillanceTable[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class FicheSurveillanceTableRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, FicheSurveillanceTable::class);
    }

    public function save(FicheSurveillanceTable $entity, bool $flush = false): void
    {
        $this->getEntityManager()->persist($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function remove(FicheSurveillanceTable $entity, bool $flush = false): void
    {
        $this->getEntityManager()->remove($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

//    /**
//     * @return FicheSurveillanceTable[] Returns an array of FicheSurveillanceTable objects
//     */
//    public function findByExampleField($value): array
//    {
//        return $this->createQueryBuilder('f')
//            ->andWhere('f.exampleField = :val')
//            ->setParameter('val', $value)
//            ->orderBy('f.id', 'ASC')
//            ->setMaxResults(10)
//            ->getQuery()
//            ->getResult()
//        ;
//    }

//    public function findOneBySomeField($value): ?FicheSurveillanceTable
//    {
//        return $this->createQueryBuilder('f')
//            ->andWhere('f.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}
