package invController.service;

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
}