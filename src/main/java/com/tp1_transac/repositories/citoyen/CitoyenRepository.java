package com.tp1_transac.repositories.citoyen;

import com.tp1_transac.models.user.citoyen.CitoyenAdulte;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CitoyenRepository extends JpaRepository<CitoyenAdulte, Integer> {

    CitoyenAdulte findCitoyenAdulteByUsernameAndPassword(String input1, String input2);

    CitoyenAdulte findCitoyenAdulteByUsername(String log);

    CitoyenAdulte findCitoyenAdulteById(int Id);

    CitoyenAdulte findCitoyenAdulteByNumSocialAndEmail(String num_social, String email);

    CitoyenAdulte findCitoyenAdulteByNumSocial(String num_social);
}
