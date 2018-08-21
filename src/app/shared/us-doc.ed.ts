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
    userStories: UserStoryI[];
}

export interface UserStoryI {
    _id: string;
    updatedAt: string;
    createdAt: string;
    descricao: string;
    autor: string;
    projeto: string;
    numero: number;
    nome: string;
    __v: number;
    condicoes: CondicoesI[];
    preCondicoes: CondicoesI[];
  }

export interface CondicoesI {
    numero: number;
    descricao: string;
}

export interface UserStorieRestI {
    success: boolean;
    userStorie: UserStorieI;
    projeto: ProjetoI;
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
    projeto: string;
    numero: number;
    nome: string;
    __v: number;
    condicoes: CondicoesI[];
    preCondicoes: CondicoesI[];
}

export interface CondicoesI {
    numero: number;
    descricao: string;
}
