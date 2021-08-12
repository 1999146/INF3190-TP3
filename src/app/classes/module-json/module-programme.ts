export declare module ModuleProgramme {

  export interface IGabaritProgramme {
    id: string;
    titre: string;
    description: string;
  }

  export interface IActivite {

  }

  export interface IBlocActivite {
    id: string;
    nom: string;
    activites: IActivite[];
    typeBloc: ITypeActivite[];
  }

  export interface ITypeActivite {
    
  }

}