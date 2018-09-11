export interface ProjetosRestI {
    _id: string;
    updatedAt: string;
    createdAt: string;
    autor: string;
    nome: string;
    descricao: string;
    __v: number;
}

export interface ViewProjetoRestI {
    projeto: ProjetosRestI;
    userStories: UserStorieI[];
}

export interface CondicoesI {
    numero: number;
    descricao: string;
}

export interface UserStorieRestI {
    success: boolean;
    obj: UserStorieI;
  }

export interface ProjetoI {
    _id: string;
    updatedAt: string;
    createdAt: string;
    autor: string;
    nome: string;
    descricao: string;
    __v: number;
  }

export interface UserStorieI {
    _id: string;
    updatedAt: string;
    createdAt: string;
    descricao: string;
    autor: string;
    projeto: ProjetoI | string;
    numero: number;
    nome: string;
    __v: number;
    criterios: CondicoesI[];
    preCondicoes: CondicoesI[];
}

export interface CondicoesI {
    numero: number;
    descricao: string;
}

export interface SuccessI {
    success: boolean;
    obj: any;
}
