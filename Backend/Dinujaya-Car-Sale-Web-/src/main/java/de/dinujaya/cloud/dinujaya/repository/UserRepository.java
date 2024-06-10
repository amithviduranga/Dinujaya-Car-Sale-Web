package de.dinujaya.cloud.dinujaya.repository;
import de.dinujaya.cloud.dinujaya.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
        User findByUsername(String username);
        User findByEmail(String email);
    }

