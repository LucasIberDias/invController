package invController.controller;

import invController.dto.CadastroEmpresaDTO;
import invController.model.Empresa;
import invController.service.EmpresaService;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/empresa")
public class EmpresaController {

    private final EmpresaService empresaService;

    public EmpresaController(EmpresaService empresaService) {
        this.empresaService = empresaService;
    }

    @PostMapping("/cadastro")
    public ResponseEntity<?> cadastrar(@RequestBody CadastroEmpresaDTO dto) {

        empresaService.cadastrar(dto);

        return ResponseEntity.ok("Empresa cadastrada com sucesso!");
    }

    @GetMapping
    public List<Empresa> listarEmpresas() {
        return empresaService.listarEmpresas();
    }

    @GetMapping("/{id}")
    public Empresa buscarEmpresa(@PathVariable Long id) {
        return empresaService.buscarEmpresa(id);
    }

    @DeleteMapping("/{id}")
    public Empresa deletarEmpresa(@PathVariable Long id) {
        return empresaService.deletarEmpresa(id);
    }

    @PutMapping("/{id}")
    public Empresa atualizarEmpresa(@PathVariable Long id,
                                    @RequestBody Empresa empresaAtualizada) {
        return empresaService.atualizarEmpresa(id, empresaAtualizada);
    }
}