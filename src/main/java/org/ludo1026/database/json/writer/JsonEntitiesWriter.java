package org.ludo1026.database.json.writer;

import java.io.BufferedWriter;
import java.io.File;
import java.io.FileWriter;
import java.io.IOException;
import java.util.Map;

import org.apache.commons.lang.StringUtils;
import org.ludo1026.database.manager.bean.CleEtrangere;
import org.ludo1026.database.manager.bean.Colonne;
import org.ludo1026.database.manager.bean.Schema;
import org.ludo1026.database.manager.bean.Table;

public class JsonEntitiesWriter {

	/**
	 * Write JSON.
	 * @param schema Schema
	 * @param outFilename output filename
	 */
	public void write(Schema schema, String outFilename) {
		
		try {
			 
			String content = "This is the content to write into file";
 
			File file = new File(outFilename);
 
			// if file doesnt exists, then create it
			if (!file.exists()) {
				file.createNewFile();
			}
 
			FileWriter fw = new FileWriter(file.getAbsoluteFile());
			BufferedWriter bw = new BufferedWriter(fw);
			writeSchema(schema, bw);
			bw.close();
 
			System.out.println("Done");
 
		} catch (IOException e) {
			e.printStackTrace();
		}		
	}

	private void writeSchema(Schema schema, BufferedWriter bw) throws IOException {
		bw.write("var entities = {");
		boolean isFirst = true;
		for(String tableName : schema.getTableByNames().keySet()) {
			Table table = schema.getTableByNames().get(tableName);
			if(isFirst) {
				isFirst = false;
			} else {
				bw.write(",");
			}
			bw.write("\n  \""+StringUtils.uncapitalize(formatId(table.getName()))+"\": {");
			
			bw.write("\n    ");
			// bw.write("id:\""+StringUtils.uncapitalize(formatName(table.getName()))+"\", ");
			bw.write("name:\""+StringUtils.uncapitalize(formatName(table.getName()))+"\", ");
			bw.write("sqlTable:\""+table.getName()+"\", ");
			bw.write("description:\""+(table.getDescription()==null?"":table.getDescription())+"\", ");

			bw.write("\n    stereotypes:[\"entity\"],");

			bw.write("\n    attributes:{");
			boolean isFirstColonne = true;
			for(Colonne colonne : table.getColonneByNames().values()) {
				if(isFirstColonne) {
					isFirstColonne = false;
				} else {
					bw.write(",");
				}
				bw.write("\n      \""+StringUtils.uncapitalize(formatId(colonne.getName()))+"\": {");
				//bw.write("id:\""+StringUtils.uncapitalize(formatName(colonne.getName()))+"\", ");
				bw.write("name:\""+StringUtils.uncapitalize(formatName(colonne.getName()))+"\", ");
				bw.write("type:\""+getTypeForColonne(colonne)+"\", ");
				bw.write("sqlName:\""+colonne.getName()+"\", ");
				bw.write("sqlType:\""+colonne.getType()+"\", ");
				bw.write("size:\""+colonne.getSize()+"\", ");
				boolean isPK = false;
				if(table.getClePrimaire() != null && table.getClePrimaire().getColonnes() != null) {
					for(Colonne colonneInPK : table.getClePrimaire().getColonnes()) {
						if(colonne.getName().equals(colonneInPK.getName())) {
							isPK = true;
						}
					}
				}
				bw.write("isPK:\""+isPK+"\", ");
				bw.write("isNotNull:\""+(colonne.getIsNullable()!=true)+"\", ");
				bw.write("description:\""+(colonne.getDescription()==null?"":colonne.getDescription())+"\"");
				boolean showInfo = false;
				if(showInfo) {
					bw.write(", infos:{");
					boolean isFirstInfo = true;
					for(String infoKey : colonne.getInfos().keySet()) {
						if(isFirstInfo) {
							isFirstInfo = false;
						} else {
							bw.write(", ");
						}
						bw.write("[\""+infoKey+"\":\""+colonne.getInfos().get(infoKey)+"\"]");
					}
					bw.write("}");
				}
				bw.write("}");
			}
			bw.write("\n    }");

			/*
			bw.write("\n    links:[");
			Map<String, Integer> nbByTableDestination = new HashMap<String,Integer>();
			boolean isFirstLink = true;
			for(CleEtrangere cleEtrangere : table.getCleEtrangeres()) {
				if(isFirstLink) {
					isFirstLink = false;
				} else {
					bw.write(",");
				}
				writeLink(bw, nbByTableDestination, cleEtrangere, "0", "1");
			}
			for(CleEtrangere cleEtrangere : table.getCleEtrangereInverses()) {
				if(isFirstLink) {
					isFirstLink = false;
				} else {
					bw.write(",");
				}
				CleEtrangere cleEtrangereInverse = new CleEtrangere();
				cleEtrangereInverse.setColonneDestinations(cleEtrangere.getColonneOrigines());
				cleEtrangereInverse.setColonneOrigines(cleEtrangere.getColonneDestinations());
				cleEtrangereInverse.setTableDestination(cleEtrangere.getTableOrigine());
				cleEtrangereInverse.setTableOrigine(cleEtrangere.getTableDestination());
				writeLink(bw, nbByTableDestination, cleEtrangereInverse, "0", "*");
			}
			bw.write("\n    ]");
			*/
			bw.write("\n  }");
		}
		bw.write("\n};\n\n");
		bw.write("module.exports=entities;");
	}

	private void writeLink(BufferedWriter bw, 
			Map<String, Integer> nbByTableDestination, CleEtrangere cleEtrangere, String nbMin, String nbMax)
			throws IOException {
		String name = StringUtils.uncapitalize(formatName(cleEtrangere.getTableDestination().getName()));
		if(!"1".equals(nbMax)) {
			name = name + "s";
		}
		String id = name;
		if(nbByTableDestination.get(id) == null) {
			nbByTableDestination.put(id,1);
		} else {
			int num = nbByTableDestination.get(id);
			nbByTableDestination.put(id,num+1);
			id = id + num;
		}
		bw.write("\n      {");
		bw.write("id:\""+id+"\", ");
		bw.write("name:\""+id+"\", ");
		bw.write("target:\""+StringUtils.uncapitalize(formatName(cleEtrangere.getTableDestination().getName()))+"\", ");
		bw.write("nbMin:\""+nbMin+"\", ");
		bw.write("nbMax:\""+nbMax+"\", ");
		bw.write("\n        attributes:[");
		boolean isFirstColonne = true;
		int nbColonnes = cleEtrangere.getColonneOrigines().size();
		for(int i=0; i<nbColonnes; i++) {
			Colonne origin = cleEtrangere.getColonneOrigines().get(i);
			Colonne target = cleEtrangere.getColonneDestinations().get(i);
			if(isFirstColonne) {
				isFirstColonne = false;
			} else {
				bw.write(",");
			}
			if(nbColonnes > 1) {
				bw.write("\n          ");
			}
			bw.write("{");
			bw.write("origin:\""+StringUtils.uncapitalize(formatName(origin.getName()))+"\", ");
			bw.write("target:\""+StringUtils.uncapitalize(formatName(target.getName()))+"\"");
			bw.write("}");
		}
		if(nbColonnes > 1) {
			bw.write("\n        ");
		}
		bw.write("]");
		bw.write("\n      }");
	}
	
	private String getTypeForColonne(Colonne colonne) {
		return getTypeJavaForTypeSQL(colonne.getType());
	}

	private String getTypeJavaForTypeSQL(String typeSQL) {
		if (StringUtils.isBlank(typeSQL)) {
			return null;
		}
		typeSQL = StringUtils.lowerCase(typeSQL);
		if (typeSQL.equalsIgnoreCase("long varchar") || typeSQL.startsWith("varchar") || typeSQL.startsWith("nchar")) {
			return "String";
		}
		if (typeSQL.startsWith("char") || typeSQL.startsWith("nchar")) {
			return "Character";
		}
		if (typeSQL.startsWith("int") || typeSQL.startsWith("smallint")) {
			return "Integer";
		}
		if (typeSQL.startsWith("long")) {
			return "Long";
		}
		if (typeSQL.startsWith("numeric") || typeSQL.startsWith("number") || typeSQL.startsWith("float") || typeSQL.startsWith("double") || typeSQL.startsWith("decimal")) {
			return "BigDecimal";
		}
		if (typeSQL.startsWith("date") || typeSQL.startsWith("time")) {
			return "Date";
		}
		if (typeSQL.startsWith("blob") || typeSQL.startsWith("lob")) {
			return "Blob";
		}
		return null;
	}

	private String formatId(String name) {
		return formatName(name).replaceAll(" ", "").replaceAll("\t", "");
	}

	private String formatName(String name) {
		if(name.equalsIgnoreCase(StringUtils.capitalize(name))) {
			name = name.toLowerCase();
		}
		name = StringUtils.uncapitalize(name);
		if(name.contains("_")) {
			StringBuffer b = new StringBuffer();
			boolean detectSpecialChar = false;
			for(int i=0; i<name.length(); i++) {
				char c = name.charAt(i);
				if(c == '_' || c == '-') {
					detectSpecialChar = true;
				} else {
					if(detectSpecialChar) {
						detectSpecialChar = false;
						b.append(String.valueOf(c).toUpperCase());
					} else {
						b.append(c);
					}
				}
			}
			name = b.toString();
		}
		return name;
	}

}
