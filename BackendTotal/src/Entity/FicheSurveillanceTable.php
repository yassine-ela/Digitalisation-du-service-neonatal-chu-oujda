<?php

namespace App\Entity;

use ApiPlatform\Metadata\ApiResource;
use App\Repository\FicheSurveillanceTableRepository;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: FicheSurveillanceTableRepository::class)]
#[ApiResource]
class FicheSurveillanceTable
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column]
    private ?int $ip = null;

    #[ORM\Column(type: Types::DATE_MUTABLE)]
    private ?\DateTimeInterface $date = null;

    #[ORM\Column]
    private ?float $t = null;

    #[ORM\Column]
    private ?float $fc = null;

    #[ORM\Column]
    private ?float $fr = null;

    #[ORM\Column]
    private ?float $sao2 = null;

    #[ORM\Column]
    private ?float $ta = null;

    #[ORM\Column]
    private ?float $dextro = null;

    #[ORM\Column]
    private ?float $poids = null;

    #[ORM\Column(length: 30)]
    private ?string $peau = null;

    #[ORM\Column]
    private ?float $diurese = null;

    #[ORM\Column(length: 10)]
    private ?string $vomissement = null;

    #[ORM\Column(length: 20)]
    private ?string $selles = null;

    #[ORM\Column(length: 10)]
    private ?string $convulsions = null;

    #[ORM\Column(length: 5)]
    private ?string $apnees = null;

    #[ORM\Column]
    private ?float $pc = null;

    #[ORM\Column]
    private ?float $perimetreOmbilical = null;

    #[ORM\Column]
    private ?float $quantityGlucoseGramPar24 = null;

    #[ORM\Column]
    private ?float $ccLait24h = null;

    #[ORM\Column]
    private ?float $atbGramPar24h = null;

    #[ORM\Column(type: Types::TIME_MUTABLE)]
    private ?\DateTimeInterface $heures = null;

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

    public function getDate(): ?\DateTimeInterface
    {
        return $this->date;
    }

    public function setDate(\DateTimeInterface $date): static
    {
        $this->date = $date;

        return $this;
    }

    public function getT(): ?float
    {
        return $this->t;
    }

    public function setT(float $t): static
    {
        $this->t = $t;

        return $this;
    }

    public function getFc(): ?float
    {
        return $this->fc;
    }

    public function setFc(float $fc): static
    {
        $this->fc = $fc;

        return $this;
    }

    public function getFr(): ?float
    {
        return $this->fr;
    }

    public function setFr(float $fr): static
    {
        $this->fr = $fr;

        return $this;
    }

    public function getSao2(): ?float
    {
        return $this->sao2;
    }

    public function setSao2(float $sao2): static
    {
        $this->sao2 = $sao2;

        return $this;
    }

    public function getTa(): ?float
    {
        return $this->ta;
    }

    public function setTa(float $ta): static
    {
        $this->ta = $ta;

        return $this;
    }

    public function getDextro(): ?float
    {
        return $this->dextro;
    }

    public function setDextro(float $dextro): static
    {
        $this->dextro = $dextro;

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

    public function getPeau(): ?string
    {
        return $this->peau;
    }

    public function setPeau(string $peau): static
    {
        $this->peau = $peau;

        return $this;
    }

    public function getDiurese(): ?float
    {
        return $this->diurese;
    }

    public function setDiurese(float $diurese): static
    {
        $this->diurese = $diurese;

        return $this;
    }

    public function getVomissement(): ?string
    {
        return $this->vomissement;
    }

    public function setVomissement(string $vomissement): static
    {
        $this->vomissement = $vomissement;

        return $this;
    }

    public function getSelles(): ?string
    {
        return $this->selles;
    }

    public function setSelles(string $selles): static
    {
        $this->selles = $selles;

        return $this;
    }

    public function getConvulsions(): ?string
    {
        return $this->convulsions;
    }

    public function setConvulsions(string $convulsions): static
    {
        $this->convulsions = $convulsions;

        return $this;
    }

    public function getApnees(): ?string
    {
        return $this->apnees;
    }

    public function setApnees(string $apnees): static
    {
        $this->apnees = $apnees;

        return $this;
    }

    public function getPc(): ?float
    {
        return $this->pc;
    }

    public function setPc(float $pc): static
    {
        $this->pc = $pc;

        return $this;
    }

    public function getPerimetreOmbilical(): ?float
    {
        return $this->perimetreOmbilical;
    }

    public function setPerimetreOmbilical(float $perimetreOmbilical): static
    {
        $this->perimetreOmbilical = $perimetreOmbilical;

        return $this;
    }

    public function getQuantityGlucoseGramPar24(): ?float
    {
        return $this->quantityGlucoseGramPar24;
    }

    public function setQuantityGlucoseGramPar24(float $quantityGlucoseGramPar24): static
    {
        $this->quantityGlucoseGramPar24 = $quantityGlucoseGramPar24;

        return $this;
    }

    public function getCcLait24h(): ?float
    {
        return $this->ccLait24h;
    }

    public function setCcLait24h(float $ccLait24h): static
    {
        $this->ccLait24h = $ccLait24h;

        return $this;
    }

    public function getAtbGramPar24h(): ?float
    {
        return $this->atbGramPar24h;
    }

    public function setAtbGramPar24h(float $atbGramPar24h): static
    {
        $this->atbGramPar24h = $atbGramPar24h;

        return $this;
    }

    public function getHeures(): ?\DateTimeInterface
    {
        return $this->heures;
    }

    public function setHeures(\DateTimeInterface $heures): static
    {
        $this->heures = $heures;

        return $this;
    }
}
