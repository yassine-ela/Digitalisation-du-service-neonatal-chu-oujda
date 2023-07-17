<?php

namespace App\Repository;

use App\Entity\FicheMiseaJourPatient;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<FicheMiseaJourPatient>
 *
 * @method FicheMiseaJourPatient|null find($id, $lockMode = null, $lockVersion = null)
 * @method FicheMiseaJourPatient|null findOneBy(array $criteria, array $orderBy = null)
 * @method FicheMiseaJourPatient[]    findAll()
 * @method FicheMiseaJourPatient[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class FicheMiseaJourPatientRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, FicheMiseaJourPatient::class);
    }

    public function save(FicheMiseaJourPatient $entity, bool $flush = false): void
    {
        $this->getEntityManager()->persist($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function remove(FicheMiseaJourPatient $entity, bool $flush = false): void
    {
        $this->getEntityManager()->remove($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

//    /**
//     * @return FicheMiseaJourPatient[] Returns an array of FicheMiseaJourPatient objects
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

//    public function findOneBySomeField($value): ?FicheMiseaJourPatient
//    {
//        return $this->createQueryBuilder('f')
//            ->andWhere('f.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}
