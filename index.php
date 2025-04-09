
<!-- somaine1 -->

<?php



// class Voiture{
// public $marque;

// public function __construct($marque){
//     $this->marque=$marque;
// }

// public function affiche(){
//     echo "{$this->marque}";
// }
// }

// $mavoiture=new Voiture("toyota");




// class Animal{
//     public $nom;
//     public function __construct($nom){
//         $this->nom=$nom;
//     }
    
//     public function affiche(){
//         echo "{$this->nom}";
//     }
      
//     public function parler(){
//         echo "L'animal fait un son";
//     }
    
// }

// $lion=new Animal("zion lion");
// $lion->parler();


// class Rectangle{
//     public $longeur;
//     public $largeur;

//     public function __construct($longeur,$largeur){
//         $this->largeur=$largeur;
//         $this->longeur=$longeur;
//     }

//     public function aire(){
//         return $this->largeur*$this->longeur;
//     }
// }

// $rec=new Rectangle(3,2);
//  echo $rec->aire();








//  class Ppersone{

//     public $name;
//     public $age;
//     public function __construct($name,$age){
// $this->name=$name;
// $this->age=$age;
//     }

//     public function saluer(){
//         echo "hi my name is {$this->name}";
//     }


//  }

//  $persooone=new Ppersone("zak",134);
//  $persooone->saluer();
//  $persooone2=new Ppersone("bob",30);
//  $persooone2->saluer();
// 

// <!-- somaine 2 -->


// class Voiture
// {
//     public $marque;

//     public function __construct($marque)
//     {
//         $this->marque = $marque;
//     }


//     public function demarrer()
//     {
//         echo "La voiture démarre";
//     }
// } -->

// $voitire = new Voiture("catkat");
// $voitire->demarrer();


//--------------------
//moyenne

// class CMPTEBANCAIRE
// {
//     public float $solde;

//     public function __construct($solde)
//     {
//         $this->solde = $solde;
//     }
//     public function deposer($montant)
//     {
//         return $this->solde += $montant;
//     }
//     public function retirer($montant)
//     {

//         if ($this->solde > $montant) {
//             return $this->solde -= $montant;
//         } else {
//             throw new Exception("Error Processing Request", 1);
//         }
//     }
// }

// $cmpt=new CMPTEBANCAIRE(0);
//  echo $cmpt->deposer(10);
//  echo $cmpt->deposer(22);
//  echo $cmpt->retirer(22);


//--------------------

// class ETUDIANT
// {
//     public $nom;
//     public $notes = [];

//     public function ajouterNote($note)
//     {
//         $this->notes[] = $note;
//     }

//     public function moyenne()
//     {
//         $total = 0;
//         foreach ($this->notes as $note) {

//             $total += $note;
//         }

//         return $total / count($this->notes);
//     }
// }

// $stud=new ETUDIANT();
// echo $stud->ajouterNote(12);
// echo $stud->ajouterNote(2);

// echo $stud->moyenne();



//difficiles

// class Rectangle 
// {

//     public $lon;
//     public $lar;

//     public function __construct($lar,$lon){
// $this->lar=$lar;
// $this->lon=$lon;
//     }
//     public function aire()
//     {
//         return $this->lar * $this->lon;
//     }
//     public function estCarre()
//     {
//         return ($this->lar === $this->lon);
//     }
// }


// $RECTANGLE=new Rectangle(3,3);
//  echo $RECTANGLE->aire();
//  echo $RECTANGLE->estCarre();


