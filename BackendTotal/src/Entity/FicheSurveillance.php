<?php

namespace App\Entity;

use ApiPlatform\Metadata\ApiResource;
use App\Repository\FicheSurveillanceRepository;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: FicheSurveillanceRepository::class)]
#[ApiResource]
class FicheSurveillance
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;
    
    #[ORM\Column]
    private ?int $ip = null;
    
    #[ORM\Column(type: Types::DATE_MUTABLE)]
    private ?\DateTimeInterface $date = null;

    #[ORM\Column(length: 100)]
    private ?string $NouveauNedeMaman = null;


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

    public function getNouveauNedeMaman(): ?string
    {
        return $this->NouveauNedeMaman;
    }

    public function setNouveauNedeMaman(string $NouveauNedeMaman): static
    {
        $this->NouveauNedeMaman = $NouveauNedeMaman;

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
}
