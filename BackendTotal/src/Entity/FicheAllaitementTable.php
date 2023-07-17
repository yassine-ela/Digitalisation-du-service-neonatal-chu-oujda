<?php

namespace App\Entity;

use ApiPlatform\Metadata\ApiResource;
use App\Repository\FicheAllaitementTableRepository;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: FicheAllaitementTableRepository::class)]
#[ApiResource]
class FicheAllaitementTable
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column]
    private ?int $ip = null;

    #[ORM\Column(type: Types::TIME_MUTABLE)]
    private ?\DateTimeInterface $heureFicheAllaitement = null;

    #[ORM\Column]
    private ?float $givenQuantity = null;

    #[ORM\Column(length: 5)]
    private ?string $residu = null;

    #[ORM\Column(type: Types::DATE_MUTABLE)]
    private ?\DateTimeInterface $date = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getIp(): ?int
    {
        return $this->ip;
    }

    public function setIp(int $ip): static
    {
        $this->ip = $ip;

        return $this;
    }

    public function getHeureFicheAllaitement(): ?\DateTimeInterface
    {
        return $this->heureFicheAllaitement;
    }

    public function setHeureFicheAllaitement(\DateTimeInterface $heureFicheAllaitement): static
    {
        $this->heureFicheAllaitement = $heureFicheAllaitement;

        return $this;
    }

    public function getGivenQuantity(): ?float
    {
        return $this->givenQuantity;
    }

    public function setGivenQuantity(float $givenQuantity): static
    {
        $this->givenQuantity = $givenQuantity;

        return $this;
    }

    public function getResidu(): ?string
    {
        return $this->residu;
    }

    public function setResidu(string $residu): static
    {
        $this->residu = $residu;

        return $this;
    }

    public function getDate(): ?\DateTimeInterface
    {
        return $this->date;
    }

    public function setDate(\DateTimeInterface $date): static
    {
        $this->date = $date;

        return $this;
    }
}
