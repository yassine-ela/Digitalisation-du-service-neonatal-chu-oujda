<?php

namespace App\Repository;

use App\Entity\FicheMiseaJourPatientTable;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<FicheMiseaJourPatientTable>
 *
 * @method FicheMiseaJourPatientTable|null find($id, $lockMode = null, $lockVersion = null)
 * @method FicheMiseaJourPatientTable|null findOneBy(array $criteria, array $orderBy = null)
 * @method FicheMiseaJourPatientTable[]    findAll()
 * @method FicheMiseaJourPatientTable[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class FicheMiseaJourPatientTableRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, FicheMiseaJourPatientTable::class);
    }

    public function save(FicheMiseaJourPatientTable $entity, bool $flush = false): void
    {
        $this->getEntityManager()->persist($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function remove(FicheMiseaJourPatientTable $entity, bool $flush = false): void
    {
        $this->getEntityManager()->remove($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

//    /**
//     * @return FicheMiseaJourPatientTable[] Returns an array of FicheMiseaJourPatientTable objects
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

//    public function findOneBySomeField($value): ?FicheMiseaJourPatientTable
//    {
//        return $this->createQueryBuilder('f')
//            ->andWhere('f.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}
