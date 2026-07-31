package invController.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class CadastroEmpresaDTO {

    private String nomeFantasia;
    private String cnpj;
    private String emailEmpresa;
    private String telefone;

    private String nomeUsuario;
    private String emailUsuario;
    private String senha;
}