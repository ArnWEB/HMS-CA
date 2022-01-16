package com.finalbackend.FinalBackEnd.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.finalbackend.FinalBackEnd.model.Patient;

@Repository
public interface PatientRepository extends JpaRepository<Patient, Long>{


}
