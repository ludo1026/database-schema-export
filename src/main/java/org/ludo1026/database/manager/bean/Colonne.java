package org.ludo1026.database.manager.bean;

import org.ludo1026.util.Utils;

import java.util.HashMap;
import java.util.Map;

public class Colonne {

	private String name, type, size, description;
	private boolean isNullable;
	private Map<String, Object> infos = new HashMap<String, Object>();

	@Override
	public String toString() {
		return this.name;
	}

	@Override
	public boolean equals(final Object o) {
		if (o == null) {
			return (this == null) ? true : false;
		}
		if (!(o instanceof Colonne)) {
			return false;
		}
		final Colonne colonne = (Colonne) o;
		return Utils.equals(this.name, colonne.getName());
	}

	@Override
	public int hashCode() {
		return this.name.hashCode();
	}

	public String getName() {
		return this.name;
	}

	public void setName(final String name) {
		this.name = name;
	}

	public Map<String, Object> getInfos() {
		return this.infos;
	}

	public void setInfos(final Map<String, Object> infos) {
		this.infos = infos;
	}

	public String getType() {
		return this.type;
	}

	public void setType(final String type) {
		this.type = type;
	}

	public String getSize() {
		return this.size;
	}

	public void setSize(final String size) {
		this.size = size;
	}

	public String getDescription() {
		return this.description;
	}

	public void setDescription(final String description) {
		this.description = description;
	}

	public boolean getIsNullable() {
		return this.isNullable;
	}

	public void setIsNullable(final boolean isNullable) {
		this.isNullable = isNullable;
	}

}
