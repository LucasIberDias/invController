package invController.controller;

import invController.dto.CadastroEmpresaDTO;
import invController.model.Empresa;
import invController.service.EmpresaService;
import org.springframework.http.HttpStatus;
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
    public ResponseEntity<String> cadastrar(@RequestBody CadastroEmpresaDTO dto) {

        empresaService.cadastrar(dto);

        return ResponseEntity
                .status(HttpStatus.CREATED)
                .body("Empresa cadastrada com sucesso!");
    }

    @GetMapping
    public ResponseEntity<List<Empresa>> listarEmpresas() {
        return ResponseEntity.ok(empresaService.listarEmpresas());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Empresa> buscarEmpresa(@PathVariable Long id) {
        return ResponseEntity.ok(empresaService.buscarEmpresa(id));
    }

    @PutMapping("/{id}")
    public ResponseEntity<Empresa> atualizarEmpresa(
            @PathVariable Long id,
            @RequestBody Empresa empresaAtualizada) {

        return ResponseEntity.ok(
                empresaService.atualizarEmpresa(id, empresaAtualizada)
        );
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Empresa> deletarEmpresa(@PathVariable Long id) {
        return ResponseEntity.ok(empresaService.deletarEmpresa(id));
    }
}