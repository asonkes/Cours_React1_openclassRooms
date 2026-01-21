function CareScale({ scaleValue, careType, className }) {
  const quantityLabel = {
    1: "peu",
    2: "modérément",
    3: "beaucoup",
  };

  /** Le nombre MAX d'icônes qu'on accepte d'afficher */
  const range = [1, 2, 3];

  const scaleType = careType === "light" ? "☀️" : "💧";

  /** Et alors pour le raisonnement de :
   * scaleValue > = element
   * Pour chaque élément, on va chercher s'il est > ou = à l'élément du tableau (1, puis 2, puis 3)
   * Et à chaque étape, on reçoit un soleil, si 2, 2 soleils
   */
  /** On met "toString()" car historiquement on accepte les nombre en React mais c'est mieux de mettre en "string" */
  return (
    <div
      className={className}
      onClick={() =>
        alert(`Cette plante requiert 
                    ${quantityLabel[scaleValue]} 
                    ${careType === "light" ? "de lumière" : "d'arrosage"}`)
      }
    >
      {range.map((element) =>
        scaleValue >= element ? (
          <span key={element.toString()}>{scaleType}</span>
        ) : null,
      )}
    </div>
  );
}

export default CareScale;
