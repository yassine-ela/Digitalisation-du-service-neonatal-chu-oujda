<?php

namespace App\Repository;

use App\Entity\FicheAllaitementTable;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<FicheAllaitementTable>
 *
 * @method FicheAllaitementTable|null find($id, $lockMode = null, $lockVersion = null)
 * @method FicheAllaitementTable|null findOneBy(array $criteria, array $orderBy = null)
 * @method FicheAllaitementTable[]    findAll()
 * @method FicheAllaitementTable[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class FicheAllaitementTableRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, FicheAllaitementTable::class);
    }

    public function save(FicheAllaitementTable $entity, bool $flush = false): void
    {
        $this->getEntityManager()->persist($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function remove(FicheAllaitementTable $entity, bool $flush = false): void
    {
        $this->getEntityManager()->remove($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

//    /**
//     * @return FicheAllaitementTable[] Returns an array of FicheAllaitementTable objects
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

//    public function findOneBySomeField($value): ?FicheAllaitementTable
//    {
//        return $this->createQueryBuilder('f')
//            ->andWhere('f.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}
