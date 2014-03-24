package org.ludo1026.database.manager;

import java.sql.Connection;
import java.sql.DatabaseMetaData;
import java.sql.ResultSet;
import java.sql.ResultSetMetaData;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;
import javax.sql.DataSource;

import org.apache.commons.lang.StringUtils;
import org.ludo1026.database.manager.bean.CleEtrangere;
import org.ludo1026.database.manager.bean.Colonne;
import org.ludo1026.database.manager.bean.Schema;
import org.ludo1026.database.manager.bean.Table;
import org.ludo1026.util.AssertHelper;
import org.springframework.stereotype.Component;

@Component("jdbcManager")
public class JDBCManager {

	@Resource(name = "dataSource")
	private DataSource dataSource;
	
	/**
	 * Méthode principale.
	 */
	public Schema main() {
		try {
			final Connection connection = this.dataSource.getConnection();
			final DatabaseMetaData meta = connection.getMetaData();

			final Schema schema = this.getSchema(connection, meta);

			return schema;
			
		} catch (final Throwable e) {
			throw new IllegalStateException(e);
		}
	}

	private Schema getSchema(final Connection connection, final DatabaseMetaData meta) throws SQLException {
		final Schema schema = new Schema();
		getTables(connection, meta, schema, "%");

		for (final Table table : schema.getTableByNames().values()) {
			this.defineColonnes(connection, meta, table);
			this.defineClePrimaire(connection, meta, table);
			System.out.println(table);
		}
		
		defineCleEtrangere(connection, meta, schema);
		//defineCleEtrangereInverse(connection, meta, schema);

		return schema;
	}

	private void getTables(final Connection connection, final DatabaseMetaData meta, final Schema schema, String tableName) throws SQLException {
		final ResultSet rs = meta.getTables(connection.getCatalog(), null, tableName, new String[] { "TABLE" });
		while (rs.next()) {
			final Table table = new Table();
			for (int i = 0; i < rs.getMetaData().getColumnCount(); i++) {
				final String key = rs.getMetaData().getColumnName(i + 1);
				final Object val = rs.getObject(i + 1);
				table.getInfos().put(key, val);
			}
			table.setName(rs.getString("table_name"));
			table.setDescription(rs.getString("remarks"));
			schema.addTable(table);
		}
	}

	/**
	 * ImportedKeys : <br/>
	 * pktable_cat = null <br/>
	 * pktable_schem = public <br/>
	 * pktable_name = utilisateur <br/>
	 * pkcolumn_name = id <br/>
	 * fktable_cat = null <br/>
	 * fktable_schem = public <br/>
	 * fktable_name = utilisateur_profil <br/>
	 * fkcolumn_name = utilisateur_id <br/>
	 * key_seq = 1 <br/>
	 * update_rule = 3 <br/>
	 * delete_rule = 3 <br/>
	 * fk_name = fk8646b8b7c88f1f <br/>
	 * pk_name = utilisateur_pkey <br/>
	 * deferrability = 7 <br/>
	 * <br/>
	 * ExportedKeys : <br/>
	 * pktable_cat = null <br/>
	 * pktable_schem = public <br/>
	 * pktable_name = utilisateur <br/>
	 * pkcolumn_name = id <br/>
	 * fktable_cat = null <br/>
	 * fktable_schem = public <br/>
	 * fktable_name = utilisateur_profil <br/>
	 * fkcolumn_name = utilisateur_id <br/>
	 * key_seq = 1 <br/>
	 * update_rule = 3 <br/>
	 * delete_rule = 3 <br/>
	 * fk_name = fk8646b8b7c88f1f <br/>
	 * pk_name = utilisateur_pkey <br/>
	 * deferrability = 7 <br/>
	 * 
	 * @param connection
	 * @param meta
	 * @param tableDestination
	 * @throws SQLException
	 */
	private Map<String,List<ForeignKey>> getForeignKeysByFkNames(final Connection connection, final DatabaseMetaData meta, final Table table, final Schema schema) throws SQLException {
		final ResultSet rs = meta.getExportedKeys(connection.getCatalog(), null, table.getName());
		Map<String,List<ForeignKey>> foreignKeysByFkNames = new HashMap<String,List<ForeignKey>>();
		List<ForeignKey> foreignKeys = new ArrayList<ForeignKey>();
		while (rs.next()) {
			// for (int i = 0; i < rs.getMetaData().getColumnCount(); i++) {
			// final String key = rs.getMetaData().getColumnName(i + 1);
			// final Object val = rs.getObject(i + 1);
			// System.out.println(key + " = " + val + " <br/>");
			// }
			final String pkTableName = rs.getString("PKTABLE_NAME");
			final String pkColumnName = rs.getString("PKCOLUMN_NAME");
			final String fkTableName = rs.getString("FKTABLE_NAME");
			final String fkColumnName = rs.getString("FKCOLUMN_NAME");
			final String fkName = rs.getString("FK_NAME");
			// final int fkSequence = rs.getInt("KEY_SEQ");
			// System.out.println("getExportedKeys(): fkTableName=" +
			// fkTableName);
			// System.out.println("getExportedKeys(): fkColumnName=" +
			// fkColumnName);
			// System.out.println("getExportedKeys(): fkSequence=" +
			// fkSequence);
//			if (foreignKeysByTableNames.get(fkTableName) == null) {
//				foreignKeysByTableNames.put(fkTableName, new ArrayList<ForeignKey>());
//			}
			ForeignKey foreignKey = new ForeignKey();
			foreignKey.setFkTableName(fkTableName);
			foreignKey.setFkColumnName(fkColumnName);
			foreignKey.setPkTableName(pkTableName); 
			foreignKey.setPkColumnName(pkColumnName); 
			foreignKeys.add(foreignKey);
			if(foreignKeysByFkNames.get(fkName) == null) {
				foreignKeysByFkNames.put(fkName,new ArrayList<ForeignKey>());
			}
			foreignKeysByFkNames.get(fkName).add(foreignKey);
		}
		return foreignKeysByFkNames;
	}
	
	private void defineCleEtrangere(final Connection connection, final DatabaseMetaData meta, Schema schema) throws SQLException {
		final Map<String, Map<String,List<ForeignKey>>> foreignKeysByFkNamesByTableNames = new HashMap<String, Map<String,List<ForeignKey>>>();
		for (final Table table : schema.getTableByNames().values()) {
			Map<String,List<ForeignKey>> foreignKeysByFkNames = this.getForeignKeysByFkNames(connection, meta, table, schema);
			foreignKeysByFkNamesByTableNames.put(table.getName(), foreignKeysByFkNames);
		}
		defineCleEtrangere(schema, foreignKeysByFkNamesByTableNames);
	}
	
	private void defineCleEtrangere(Schema schema, Map<String, Map<String,List<ForeignKey>>> foreignKeysByFkNamesByTableNames) {
		
		for (final String tableName : foreignKeysByFkNamesByTableNames.keySet()) {
			final Table tableDestination = schema.getTableByNames().get(tableName);
			AssertHelper.assertDefined(tableDestination, "Table d'origine '" + tableName + "'");
			final Map<String,List<ForeignKey>> foreignKeysByFkNames = foreignKeysByFkNamesByTableNames.get(tableName);
			for(String fkName : foreignKeysByFkNames.keySet()) {
				final List<ForeignKey> foreignKeys = foreignKeysByFkNames.get(fkName);
				final CleEtrangere cleEtrangere = new CleEtrangere();
				for (final ForeignKey foreignKey : foreignKeys) {
					final Colonne colonneDestination = tableDestination.getColonneByNames().get(foreignKey.getPkColumnName());
					AssertHelper.assertDefined(colonneDestination, "Colonne d'origine pour la clé étrangère : '" + fkName+"' de la table d'origine '" + tableName + "' ");
					Table tableOrigine = schema.getTableByNames().get(foreignKey.getFkTableName());
					AssertHelper.assertDefined(tableOrigine, "Table de destination pour la clé étrangère : '" + fkName+"' de la table d'origine '" + tableName + "' ");
					final Colonne colonneOrigine = tableOrigine.getColonneByNames().get(foreignKey.getFkColumnName());
					AssertHelper.assertDefined(colonneOrigine, "Colonne de destination pour la clé étrangère : '" + fkName+"' de la table d'origine '" + tableName + "' ");
					cleEtrangere.setTableOrigine(tableOrigine);
					cleEtrangere.getColonneOrigines().add(colonneOrigine);
					cleEtrangere.setTableDestination(tableDestination);
					cleEtrangere.getColonneDestinations().add(colonneDestination);
					tableOrigine.getCleEtrangeres().add(cleEtrangere);
				}
			}
		}
	}

	private void defineClePrimaire(final Connection connection, final DatabaseMetaData meta, final Table table) throws SQLException {
		final ResultSet rs = meta.getPrimaryKeys(connection.getCatalog(), null, table.getName());
		while (rs.next()) {
			table.addToClePrimaire(rs.getString("COLUMN_NAME"));
		}
	}

	/**
	 * TABLE_CAT = null <br/>
	 * TABLE_SCHEM = public <br/>
	 * TABLE_NAME = utilisateur_profil <br/>
	 * COLUMN_NAME = profils_id <br/>
	 * DATA_TYPE = -5 <br/>
	 * TYPE_NAME = int8 <br/>
	 * COLUMN_SIZE = 19 <br/>
	 * BUFFER_LENGTH = null <br/>
	 * DECIMAL_DIGITS = 0 <br/>
	 * NUM_PREC_RADIX = 10 <br/>
	 * NULLABLE = 0 <br/>
	 * REMARKS = null <br/>
	 * COLUMN_DEF = null <br/>
	 * SQL_DATA_TYPE = null <br/>
	 * SQL_DATETIME_SUB = null <br/>
	 * CHAR_OCTET_LENGTH = 19 <br/>
	 * ORDINAL_POSITION = 2 <br/>
	 * IS_NULLABLE = NO <br/>
	 * SCOPE_CATLOG = null <br/>
	 * SCOPE_SCHEMA = null <br/>
	 * SCOPE_TABLE = null <br/>
	 * SOURCE_DATA_TYPE = null <br/>
	 * IS_AUTOINCREMENT = NO <br/>
	 * 
	 * @param connection
	 * @param meta
	 * @param table
	 * @throws SQLException
	 */
	private void defineColonnes(final Connection connection, final DatabaseMetaData meta, final Table table) throws SQLException {
		final List<Colonne> colonnes = new ArrayList<>();
		final ResultSet resultat = meta.getColumns(connection.getCatalog(), null, table.getName(), "%");
		final ResultSetMetaData rsmd = resultat.getMetaData();
		while (resultat.next()) {
			final Colonne colonne = new Colonne();
			for (int i = 0; i < rsmd.getColumnCount(); i++) {
				final String col = rsmd.getColumnName(i + 1);
				final Object val = resultat.getObject(i + 1);
				colonne.getInfos().put(col, val);
				colonnes.add(colonne);
			}
			colonne.setName(resultat.getString("COLUMN_NAME"));
			colonne.setType(resultat.getString("TYPE_NAME"));
			colonne.setSize(resultat.getString("COLUMN_SIZE"));
			colonne.setDescription(resultat.getString("REMARKS"));
			String isNullableAsString = resultat.getString("IS_NULLABLE");
			boolean isNullable = StringUtils.equalsIgnoreCase(isNullableAsString, "YES");
			colonne.setIsNullable(isNullable);
			table.addColonne(colonne);
		}
	}

	private void defineCleEtrangereInverse(Connection connection,
			DatabaseMetaData meta, Schema schema) {
		
		for(Table table : schema.getTableByNames().values()) {
			for(CleEtrangere cleEtrangere : table.getCleEtrangeres()) {
				Table tableTarget = cleEtrangere.getTableDestination();
				tableTarget.getCleEtrangereInverses().add(cleEtrangere);
			}
		}
		
	}

}
