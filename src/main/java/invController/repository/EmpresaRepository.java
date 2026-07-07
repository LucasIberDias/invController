package invController.repository;

import invController.model.Empresa;
import org.springframework.data.domain.Example;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EmpresaRepository extends JpaRepository<Empresa, Long> {

    Example<? extends Empresa> id(Long id);
}