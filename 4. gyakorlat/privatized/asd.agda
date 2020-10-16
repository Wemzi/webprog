{- BEGIN FIX -}
module asd where

open import Agda.Primitive

infixr 4 _,_
infixr 2 _×_
infixr 1 _⊎_
infixr 0 _↔_
infixr 0 _←_

data Bool : Set where
  true false : Bool

if_then_else_ : ∀{i}{A : Set i}(t : Bool)(u v : A) → A
if true then u else v = u
if false then u else v = v

not : Bool → Bool
not = λ x → if x then false else true

and : Bool → Bool → Bool
and = λ b c → if b then c else false

data ℕ : Set where
  zero : ℕ
  suc : ℕ → ℕ
{-# BUILTIN NATURAL ℕ #-}

rec : ∀{i}{A : Set i}(u : A)(v : A → A)(t : ℕ) → A
rec u v zero = u
rec u v (suc t) = v (rec u v t)

record _×_ {i}{j}(A : Set i)(B : Set j) : Set (i ⊔ j) where
  constructor _,_
  field
    proj₁ : A
    proj₂ : B
open _×_ public

data _⊎_ {i}{j}(A : Set i)(B : Set j) : Set (i ⊔ j) where
  inj₁ : A → A ⊎ B
  inj₂ : B → A ⊎ B

case : ∀ {i j k}{A : Set i}{B : Set j}{C : Set k}
       (t : A ⊎ B)(u : A → C)(v : B → C) → C
case (inj₁ t) u v = u t
case (inj₂ t) u v = v t

_↔_ : ∀{i j}(A : Set i)(B : Set j) → Set (i ⊔ j)
A ↔ B = (A → B) × (B → A)

data ⊥ : Set where

exfalso : ∀{i}{A : Set i} → ⊥ → A
exfalso ()

record ⊤ : Set where
  constructor tt
open ⊤ public

¬_ : ∀{i}(A : Set i) → Set i
¬ A = A → ⊥

_←_ : ∀{i j}(A : Set i)(B : Set j) → Set (i ⊔ j)
A ← B = B → A

data Eq {i}(A : Set i)(a : A) : A → Set where
  refl : Eq A a a

-- órai feladatok gyakorlása
-- először próbáljátok megoldani magatoktól

comm× : {A B : Set} → A × B → B × A
{- END FIX -}
comm× = λ ab →  proj₂ ab , proj₁ ab
-- use comm×
{- BEGIN FIX -}
usagecomm : ℕ × Bool → Bool × ℕ
{- END FIX -}
usagecomm = comm× 

-- (⊎, ⊥) form a commutative monoid (kommutativ egysegelemes felcsoport)

{- BEGIN FIX -}
assoc⊎ : {A B C : Set} → (A ⊎ B) ⊎ C ↔ A ⊎ (B ⊎ C)
{- END FIX -}
assoc⊎ = ((λ abc → case abc  (λ ab → case ab (λ a → inj₁ a) (λ b → inj₂ (inj₁ b))) (λ c → inj₂ (inj₂ c))) ,
                   λ abc → case abc ((λ a → inj₁ (inj₁ a))) (λ bc → case bc ((λ b → inj₁ (inj₂ b))) (λ c → inj₂ c) )  )

{- BEGIN FIX -}
idl⊎ : {A : Set} → ⊥ ⊎ A ↔ A
{- END FIX -}
idl⊎ = (λ nulla → case nulla (λ n → exfalso n ) λ a → a ) , (λ a → inj₂ a)

{- BEGIN FIX -}
idr⊎ : {A : Set} → A ⊎ ⊥ ↔ A
{- END FIX -}
idr⊎ = (λ anull →   case anull (λ a → a) λ null → exfalso null )  , (λ a → inj₁ a ) 

{- BEGIN FIX -}
comm⊎ : {A B : Set} → A ⊎ B ↔ B ⊎ A
{- END FIX -}
comm⊎ = (λ ab → case ab (λ a → inj₂ a) λ b → inj₁ b )
                   ,
                   (λ ba → case ba (λ b → inj₂ b) λ a → inj₁ a)

-- (×, ⊤) form a commutative monoid (kommutativ egysegelemes felcsoport)

{- BEGIN FIX -}
assoc× : {A B C : Set} → (A × B) × C ↔ A × (B × C)
{- END FIX -}
assoc× = (λ abc → proj₁(proj₁ abc), ( proj₂ (proj₁ abc) ), proj₂ abc) , ((λ abc → (proj₁ abc , proj₁ (proj₂ abc)) , proj₂ (proj₂ abc) ))

{- BEGIN FIX -}
usageassoc : (ℕ × Bool) × (ℕ → ℕ) → ℕ × (Bool × (ℕ → ℕ))
{- END FIX -}
usageassoc = proj₁ assoc× 

{- BEGIN FIX -}
idl× : {A : Set} → ⊤ × A ↔ A
{- END FIX -}
idl× = (λ nulla → proj₂ nulla ),( λ a → ( tt , a ) )  

{- BEGIN FIX -}
idr× : {A : Set} → A × ⊤ ↔ A
{- END FIX -}
idr× = (λ anull → proj₁ anull ), (λ a → ( a , tt ))

-- commutativity above

-- ⊥ is a null element

{- BEGIN FIX -}
null× : {A : Set} → A × ⊥ ↔ ⊥
{- END FIX -}
null× = (λ anull → proj₂ anull  ), (λ null → exfalso null )

-- distributivity of × and ⊎

{- BEGIN FIX -}
dist : {A B C : Set} → A × (B ⊎ C) ↔ (A × B) ⊎ (A × C)
{- END FIX -}
dist = (λ abc → case (proj₂ abc) (λ b → case (proj₂ abc) (λ b → inj₁ (proj₁ abc , b )) λ c → inj₂ (proj₁ abc , c) ) λ c → inj₂ (proj₁ abc , c )   ) , (λ abc → case abc (λ ab → proj₁ ab , inj₁ (proj₂ ab)) λ ac → proj₁ ac , inj₂ (proj₂ ac) )

-- exponentiation laws

{- BEGIN FIX -}
curry : {A B C : Set} → ((A × B) → C) ↔ (A → (B → C))
{- END FIX -}
curry = (λ abc → λ a → λ b → abc ( a , b) ) , (λ abc → λ a → abc (proj₁ a) (proj₂ a)  )

{- BEGIN FIX -}
⊎×→ : {A B C D : Set} → ((A ⊎ B) → C) ↔ (A → C) × (B → C)
{- END FIX -}
⊎×→ = (λ abc → (λ a → abc (inj₁ a) ) , λ b → abc (inj₂ b)   ), (λ abc → λ x → case x (proj₁ abc) (proj₂ abc) ) 

{- BEGIN FIX -}
^0 : {A : Set} → (⊥ → A) ↔ ⊤
{- END FIX -}
^0 = (λ abc → tt) , (λ tt → exfalso ) 

{- BEGIN FIX -}
^1 : {A : Set} → (⊤ → A) ↔ A
{- END FIX -}
^1 = (λ abc → abc tt ) , ( λ abc → λ a → abc )

{- BEGIN FIX -}
1^ : {A : Set} → (A → ⊤) ↔ ⊤
{- END FIX -}
1^ = (λ abc → tt  ) , (λ abc → λ a → tt  )


-- tests
{- BEGIN FIX -}
testcomm : {A B : Set}{w : ℕ × Bool} → Eq (ℕ × Bool) (comm× (comm× w)) w
testcomm = refl 

{- BEGIN FIX -}
testassoc× : {A B C : Set}{w : (A × B) × C} → Eq ((A × B) × C) (proj₂ assoc× (proj₁ assoc× w)) w
{- END FIX -}
testassoc× = refl