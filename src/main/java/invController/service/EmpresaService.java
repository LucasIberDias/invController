package invController.service;

import java.util.UUID;
import invController.model.Empresa;
import invController.repository.EmpresaRepository;
import org.springframework.stereotype.Service;
import java.util.*;

@Service
public class EmpresaService {

    private final EmpresaRepository empresaRepository;

    public EmpresaService(EmpresaRepository empresaRepository) {
        this.empresaRepository = empresaRepository;
    }

    public Empresa criarEmpresa(Empresa empresa) {
        empresa.setCodigoAcesso(gerarCodigoAcesso());
        return empresaRepository.save(empresa);
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
}