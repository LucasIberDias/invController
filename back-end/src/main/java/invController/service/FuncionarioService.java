package invController.service;
import invController.model.Funcionario;
import invController.repository.FuncionarioRepository;
import org.springframework.stereotype.Service;
import java.util.*;

public class FuncionarioService {
    private final FuncionarioRepository funcionarioRepository;

    public FuncionarioService(FuncionarioRepository funcionarioRepository) {
        this.funcionarioRepository = funcionarioRepository;
    }

    public Funcionario criarFuncionario(Funcionario funcionario){
        return funcionarioRepository.save(funcionario);
    }
}
