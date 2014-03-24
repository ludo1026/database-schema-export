package org.ludo1026.database.manager.bean;

import java.util.ArrayList;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;

@JsonIdentityInfo(generator=ObjectIdGenerators.IntSequenceGenerator.class, property="@id")
public class CleEtrangere {

	public Table tableOrigine;
	public List<Colonne> colonneOrigines = new ArrayList<Colonne>();
	public Table tableDestination;
	public List<Colonne> colonneDestinations = new ArrayList<Colonne>();
	
	public Table getTableOrigine() {
		return tableOrigine;
	}
	public void setTableOrigine(Table tableOrigine) {
		this.tableOrigine = tableOrigine;
	}
	public List<Colonne> getColonneOrigines() {
		return colonneOrigines;
	}
	public void setColonneOrigines(List<Colonne> colonneOrigines) {
		this.colonneOrigines = colonneOrigines;
	}
	public Table getTableDestination() {
		return tableDestination;
	}
	public void setTableDestination(Table tableDestination) {
		this.tableDestination = tableDestination;
	}
	public List<Colonne> getColonneDestinations() {
		return colonneDestinations;
	}
	public void setColonneDestinations(List<Colonne> colonneDestinations) {
		this.colonneDestinations = colonneDestinations;
	}

}
