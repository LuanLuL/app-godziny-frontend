export interface UsuarioSch {
  matricula: number | null;
  cursoSigla: string | null;
  nome: string | null;
  email: string;
  senha: string;
  tipo: "ADM" | "NORMAL";
  createdAt: string;
}
