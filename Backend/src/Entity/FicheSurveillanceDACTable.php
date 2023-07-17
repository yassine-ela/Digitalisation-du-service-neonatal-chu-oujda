<?php

namespace App\Entity;

use ApiPlatform\Metadata\ApiResource;
use App\Repository\FicheSurveillanceDACTableRepository;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: FicheSurveillanceDACTableRepository::class)]
#[ApiResource]
class FicheSurveillanceDACTable
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(type: Types::TIME_MUTABLE)]
    private ?\DateTimeInterface $heureFicheDAC = null;

    #[ORM\Column]
    private ?float $glymie = null;

    #[ORM\Column]
    private ?float $glycosurie = null;

    #[ORM\Column]
    private ?float $acetonurie = null;

    #[ORM\Column]
    private ?int $ip = null;

    #[ORM\Column]
    private ?int $nFiche = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getHeureFicheDAC(): ?\DateTimeInterface
    {
        return $this->heureFicheDAC;
    }

    public function setHeureFicheDAC(\DateTimeInterface $heureFicheDAC): static
    {
        $this->heureFicheDAC = $heureFicheDAC;

        return $this;
    }

    public function getGlymie(): ?float
    {
        return $this->glymie;
    }

    public function setGlymie(float $glymie): static
    {
        $this->glymie = $glymie;

        return $this;
    }

    public function getGlycosurie(): ?float
    {
        return $this->glycosurie;
    }

    public function setGlycosurie(float $glycosurie): static
    {
        $this->glycosurie = $glycosurie;

        return $this;
    }

    public function getAcetonurie(): ?float
    {
        return $this->acetonurie;
    }

    public function setAcetonurie(float $acetonurie): static
    {
        $this->acetonurie = $acetonurie;

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

    public function getNFiche(): ?int
    {
        return $this->nFiche;
    }

    public function setNFiche(int $nFiche): static
    {
        $this->nFiche = $nFiche;

        return $this;
    }
}
