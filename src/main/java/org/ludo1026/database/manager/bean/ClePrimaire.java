package org.ludo1026.database.manager.bean;

import java.util.ArrayList;
import java.util.List;

public class ClePrimaire {

	private List<Colonne> colonnes = new ArrayList<Colonne>();

	@Override
	public String toString() {
		String str = "clé: {";
		boolean isFirst = true;
		for (final Colonne colonne : this.colonnes) {
			if (isFirst) {
				isFirst = false;
			} else {
				str += ", ";
			}
			str += colonne;
		}
		str += "}";
		return str;
	}

	public List<Colonne> getColonnes() {
		return this.colonnes;
	}

	public void setColonnes(final List<Colonne> colonnes) {
		this.colonnes = colonnes;
	}

}
