package invController.controller;

import invController.model.Empresa;
import invController.service.EmpresaService;
import java.util.List;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/empresa")
public class EmpresaController {

    private final EmpresaService empresaService;

    public EmpresaController(EmpresaService empresaService) {
        this.empresaService = empresaService;
    }

    @PostMapping
    public Empresa criarEmpresa(@RequestBody Empresa empresa) {
        return empresaService.criarEmpresa(empresa);
    }

    @GetMapping("/empresa")
    public List<Empresa> listarEmpresas() {
        return empresaService.listarEmpresas();
    }

    @GetMapping("/empresa/{id}")
    public Empresa buscarEmpresa(@PathVariable Long id) {
        return empresaService.buscarEmpresa(id);
    }

    @DeleteMapping("/empresa/{id}")
    public Empresa deletarEmpresa(@PathVariable Long id){
        return empresaService.deletarEmpresa(id);
    }

    @PutMapping("empresa/{id}")
    public Empresa atualizarEmpresa(@PathVariable Long id, @RequestBody Empresa empresaAtualizada){
        return  empresaService.atualizarEmpresa(id, empresaAtualizada);
    }
}