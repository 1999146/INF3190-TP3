export class Enfant {
  id: string;
  nom: string;
  prenom: string;
  dateNaissance: Date;
  urlPhoto: string;
  note: string;

  public constructor(
      id: string,
      nom: string,
      prenom: string,
      dateNaissance: Date,
      urlPhoto: string,
      note: string
  ) {
    this.id = id;
    this.nom = nom;
    this.prenom = prenom;
    this.dateNaissance = dateNaissance;
    this.urlPhoto = urlPhoto;
    this.note = note;
  }
}