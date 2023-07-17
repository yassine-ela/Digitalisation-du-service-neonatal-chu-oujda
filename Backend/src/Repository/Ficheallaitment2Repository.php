<?php

namespace App\Repository;

use App\Entity\Ficheallaitment2;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<Ficheallaitment2>
 *
 * @method Ficheallaitment2|null find($id, $lockMode = null, $lockVersion = null)
 * @method Ficheallaitment2|null findOneBy(array $criteria, array $orderBy = null)
 * @method Ficheallaitment2[]    findAll()
 * @method Ficheallaitment2[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class Ficheallaitment2Repository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Ficheallaitment2::class);
    }

    public function save(Ficheallaitment2 $entity, bool $flush = false): void
    {
        $this->getEntityManager()->persist($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function remove(Ficheallaitment2 $entity, bool $flush = false): void
    {
        $this->getEntityManager()->remove($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

//    /**
//     * @return Ficheallaitment2[] Returns an array of Ficheallaitment2 objects
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

//    public function findOneBySomeField($value): ?Ficheallaitment2
//    {
//        return $this->createQueryBuilder('f')
//            ->andWhere('f.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}
