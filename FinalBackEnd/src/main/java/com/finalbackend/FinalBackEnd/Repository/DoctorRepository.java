package com.finalbackend.FinalBackEnd.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.finalbackend.FinalBackEnd.model.Doctor;
import com.finalbackend.FinalBackEnd.model.Patient;
@Repository
public interface DoctorRepository extends JpaRepository<Doctor, Long> {
	public List<Doctor> findByName(String name);

}
