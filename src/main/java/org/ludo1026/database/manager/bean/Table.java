package org.ludo1026.database.manager.bean;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class Table {

	String name;
	String description;

	Map<String, Colonne> colonneByNames = new HashMap<String, Colonne>();
	ClePrimaire clePrimaire = new ClePrimaire();
	List<CleEtrangere> cleEtrangeres = new ArrayList<CleEtrangere>();
	List<CleEtrangere> cleEtrangereInverses = new ArrayList<CleEtrangere>();

	private Map<String, Object> infos = new HashMap<String, Object>();

	public void addToClePrimaire(final String nameColonne) {
		final Colonne colonne = this.getColonneByNames().get(nameColonne);
		this.getClePrimaire().getColonnes().add(colonne);
	}

	public void addColonne(final Colonne colonne) {
		this.colonneByNames.put(colonne.getName(), colonne);
	}

	@Override
	public String toString() {
		String str = "[table: '" + this.name + "', colonnes: {";
		boolean isFirst = true;
		for (final Colonne colonne : this.colonneByNames.values()) {
			if (isFirst) {
				isFirst = false;
			} else {
				str += ", ";
			}
			str += colonne;
		}
		str += "}, " + this.clePrimaire.toString() + "]";
		return str;
	}

	public String getName() {
		return this.name;
	}

	public Table setName(final String name) {
		this.name = name;
		return this;
	}

	public String getDescription() {
		return this.description;
	}

	public Table setDescription(final String description) {
		this.description = description;
		return this;
	}

	public Map<String, Object> getInfos() {
		return this.infos;
	}

	public void setInfos(final Map<String, Object> infos) {
		this.infos = infos;
	}

	public Map<String, Colonne> getColonneByNames() {
		return this.colonneByNames;
	}

	public void setColonneByNames(final Map<String, Colonne> colonneByNames) {
		this.colonneByNames = colonneByNames;
	}

	public ClePrimaire getClePrimaire() {
		return this.clePrimaire;
	}

	public void setClePrimaire(final ClePrimaire clePrimaire) {
		this.clePrimaire = clePrimaire;
	}

	public List<CleEtrangere> getCleEtrangeres() {
		return this.cleEtrangeres;
	}

	public void setCleEtrangeres(final List<CleEtrangere> cleEtrangeres) {
		this.cleEtrangeres = cleEtrangeres;
	}

	public List<CleEtrangere> getCleEtrangereInverses() {
		return cleEtrangereInverses;
	}

	public void setCleEtrangereInverses(List<CleEtrangere> cleEtrangereInverses) {
		this.cleEtrangereInverses = cleEtrangereInverses;
	}

}
