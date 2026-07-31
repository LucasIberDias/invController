package invController.service;

import java.util.UUID;

import invController.dto.CadastroEmpresaDTO;
import invController.model.Empresa;
import invController.model.Funcionario;
import invController.repository.EmpresaRepository;
import invController.repository.FuncionarioRepository;
import org.springframework.stereotype.Service;
import java.util.*;

@Service
public class EmpresaService {

    private final EmpresaRepository empresaRepository;
    private final FuncionarioRepository funcionarioRepository;

    public EmpresaService(EmpresaRepository empresaRepository,
                          FuncionarioRepository funcionarioRepository) {

        this.empresaRepository = empresaRepository;
        this.funcionarioRepository = funcionarioRepository;
    }

    public void cadastrar(CadastroEmpresaDTO dto){
        Empresa empresa = new Empresa();

        empresa.setNomeFantasia(dto.getNomeFantasia());
        empresa.setCnpj(dto.getCnpj());
        empresa.setEmail(dto.getEmailEmpresa());
        empresa.setTelefone(dto.getTelefone());
        empresa.setCodigoAcesso(gerarCodigoAcesso());

        empresa = empresaRepository.save(empresa);

        Funcionario funcionario = new Funcionario();

        funcionario.setNomeUsuario(dto.getNomeUsuario());
        funcionario.setEmail(dto.getEmailUsuario());
        funcionario.setSenha(dto.getSenha());
        funcionario.setAdmin(true);
        funcionario.setValidado(true);
        funcionario.setEmpresa(empresa);

        funcionarioRepository.save(funcionario);
    }

    public List<Empresa> listarEmpresas() {
        return empresaRepository.findAll();
    }

    public Empresa buscarEmpresa(Long id) {
        return empresaRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Empresa não encontrada"));
    }

    public Empresa deletarEmpresa(Long id){
        Empresa empresa = buscarEmpresa(id);

        empresaRepository.deleteById(id);

        return empresa;
    }

    public Empresa atualizarEmpresa(Long id, Empresa empresaAtualizada){
        Empresa empresa = buscarEmpresa(id);

        empresa.setNomeFantasia(empresaAtualizada.getNomeFantasia());
        empresa.setCnpj(empresaAtualizada.getCnpj());
        empresa.setEmail(empresaAtualizada.getEmail());
        empresa.setTelefone(empresaAtualizada.getTelefone());

        validarEmpresa(empresa);

        return empresaRepository.save(empresa);
    }

    private String gerarCodigoAcesso() {
        String codigo;
        do {
            codigo = UUID.randomUUID().toString();

            codigo = codigo.replace("-", "");
            codigo = codigo.substring(0, 6);
            codigo = "INV-" + codigo.toUpperCase();
        }while (empresaRepository.existsByCodigoAcesso(codigo));

        return codigo;
    }

    private void validarEmpresa(Empresa empresa) {
        if (empresaRepository.existsByCnpj(empresa.getCnpj())) {
            throw new RuntimeException("CNPJ já cadastrado.");
        }

        if (empresaRepository.existsByEmail(empresa.getEmail())) {
            throw new RuntimeException("E-mail já cadastrado.");
        }

        if (empresa.getNomeFantasia().trim().isEmpty()){
            throw new RuntimeException("Nome fantasia não pode ser vazio");
        }
    }
}