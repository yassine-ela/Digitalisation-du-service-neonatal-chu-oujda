<?php

namespace App\Repository;

use App\Entity\FicheSurveillanceDACTable;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<FicheSurveillanceDACTable>
 *
 * @method FicheSurveillanceDACTable|null find($id, $lockMode = null, $lockVersion = null)
 * @method FicheSurveillanceDACTable|null findOneBy(array $criteria, array $orderBy = null)
 * @method FicheSurveillanceDACTable[]    findAll()
 * @method FicheSurveillanceDACTable[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class FicheSurveillanceDACTableRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, FicheSurveillanceDACTable::class);
    }

    public function save(FicheSurveillanceDACTable $entity, bool $flush = false): void
    {
        $this->getEntityManager()->persist($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function remove(FicheSurveillanceDACTable $entity, bool $flush = false): void
    {
        $this->getEntityManager()->remove($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

//    /**
//     * @return FicheSurveillanceDACTable[] Returns an array of FicheSurveillanceDACTable objects
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

//    public function findOneBySomeField($value): ?FicheSurveillanceDACTable
//    {
//        return $this->createQueryBuilder('f')
//            ->andWhere('f.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}
