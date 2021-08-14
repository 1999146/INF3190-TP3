class Parent{
  public id: string;
  public prenom: string;
  public courriel: string;
  public username: string;
  public motDePasse: string;
  public adresse: string;
  public dateNaissance: string;
  public photo: string;
  public enfants: [];

  public constructor(
      id: string,
      prenom: string,
      courriel: string,
      username: string,
      motDePasse: string,
      adresse: string,
      dateNaissance: string,
      photo: string,
      enfants: []
    ) {
    this.id = id;
    this.prenom = prenom;
    this.courriel = courriel;
    this.username = username;
    this.motDePasse = motDePasse;
    this.adresse = adresse;
    this.dateNaissance = dateNaissance;
    this.photo = photo;
    this.enfants = enfants;
  }

}
