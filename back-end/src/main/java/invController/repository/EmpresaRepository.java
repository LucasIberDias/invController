package invController.repository;

import invController.model.Empresa;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EmpresaRepository extends JpaRepository<Empresa, Long> {

    boolean existsByCodigoAcesso(String codigoAcesso);

    boolean existsByCnpj(String cnpj);

    boolean existsByEmail(String email);
}