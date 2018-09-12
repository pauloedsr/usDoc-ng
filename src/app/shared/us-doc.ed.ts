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
    projeto: ProjetoI | String;
    numero: number;
    nome: string;
    __v: number;
    criterios: CondicoesI[];
    preCondicoes: CondicoesI[];
    prototipos?: PrototipoI[];
}

export interface CondicoesI {
    numero: number;
    descricao: string;
}

export interface SuccessI {
    success: boolean;
    obj: any;
}

export interface PrototipoI {
    _id: string;
    updatedAt: string;
    createdAt: string;
    userStorie: string;
    fieldname: string;
    originalname: string;
    encoding: string;
    mimetype: string;
    destination: string;
    filename: string;
    path: string;
    size: number;
    __v: number;
    descricao?: string;
}
