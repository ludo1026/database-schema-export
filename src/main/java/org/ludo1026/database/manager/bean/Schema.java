package org.ludo1026.database.manager.bean;

import java.util.HashMap;
import java.util.Map;

public class Schema {

	private Map<String, Table> tableByNames = new HashMap<String, Table>();

	public void addTable(final Table table) {
		this.getTableByNames().put(table.getName(), table);
	}

	public Map<String, Table> getTableByNames() {
		return this.tableByNames;
	}

	public void setTableByNames(final Map<String, Table> tableByNames) {
		this.tableByNames = tableByNames;
	}

}
