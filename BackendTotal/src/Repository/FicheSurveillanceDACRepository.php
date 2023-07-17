<?php

namespace App\Repository;

use App\Entity\FicheSurveillanceDAC;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<FicheSurveillanceDAC>
 *
 * @method FicheSurveillanceDAC|null find($id, $lockMode = null, $lockVersion = null)
 * @method FicheSurveillanceDAC|null findOneBy(array $criteria, array $orderBy = null)
 * @method FicheSurveillanceDAC[]    findAll()
 * @method FicheSurveillanceDAC[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class FicheSurveillanceDACRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, FicheSurveillanceDAC::class);
    }

    public function save(FicheSurveillanceDAC $entity, bool $flush = false): void
    {
        $this->getEntityManager()->persist($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function remove(FicheSurveillanceDAC $entity, bool $flush = false): void
    {
        $this->getEntityManager()->remove($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

//    /**
//     * @return FicheSurveillanceDAC[] Returns an array of FicheSurveillanceDAC objects
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

//    public function findOneBySomeField($value): ?FicheSurveillanceDAC
//    {
//        return $this->createQueryBuilder('f')
//            ->andWhere('f.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}
