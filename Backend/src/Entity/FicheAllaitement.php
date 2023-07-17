<?php

namespace App\Entity;

use ApiPlatform\Metadata\ApiResource;
use App\Repository\FicheAllaitementRepository;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: FicheAllaitementRepository::class)]
#[ApiResource]
class FicheAllaitement
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(type: Types::DATE_MUTABLE)]
    private ?\DateTimeInterface $date = null;

    #[ORM\Column]
    private ?int $ip = null;

    #[ORM\Column(length: 100)]
    private ?string $prenomMere = null;

    #[ORM\Column(length: 15)]
    private ?string $prematurity = null;

    #[ORM\Column]
    private ?float $poids = null;

    #[ORM\Column]
    private ?float $recommandedQuantity = null;

    public function getId(): ?int
    {
        return $this->id;
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

    public function getIp(): ?int
    {
        return $this->ip;
    }

    public function setIp(int $ip): static
    {
        $this->ip = $ip;

        return $this;
    }

    public function getPrenomMere(): ?string
    {
        return $this->prenomMere;
    }

    public function setPrenomMere(string $prenomMere): static
    {
        $this->prenomMere = $prenomMere;

        return $this;
    }

    public function getPrematurity(): ?string
    {
        return $this->prematurity;
    }

    public function setPrematurity(string $prematurity): static
    {
        $this->prematurity = $prematurity;

        return $this;
    }

    public function getPoids(): ?float
    {
        return $this->poids;
    }

    public function setPoids(float $poids): static
    {
        $this->poids = $poids;

        return $this;
    }

    public function getRecommandedQuantity(): ?float
    {
        return $this->recommandedQuantity;
    }

    public function setRecommandedQuantity(float $recommandedQuantity): static
    {
        $this->recommandedQuantity = $recommandedQuantity;

        return $this;
    }
}
