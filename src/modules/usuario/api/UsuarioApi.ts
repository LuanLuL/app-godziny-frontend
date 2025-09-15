import { ApiBase } from "../../../utils/ApiBase/ApiBase";
import { UsuarioSch } from "./UsuarioSch";

class UsuarioApi extends ApiBase<UsuarioSch> {
  constructor() {
    super("/usuario");
  }

  public listar(filtros?: Partial<UsuarioSch>, page = 0, size = 10) {
    return this.pesquisar("/pesquisar", filtros, { page, size });
  }

  public getById(id: string) {
    return this.getOne(id);
  }

  public criar(dto: UsuarioSch) {
    return this.post("", dto);
  }

  public atualizar(id: string, dto: UsuarioSch) {
    return this.put(id, dto);
  }

  public deletar(id: string) {
    return this.delete(id);
  }
}

export const usuarioApi = new UsuarioApi();
