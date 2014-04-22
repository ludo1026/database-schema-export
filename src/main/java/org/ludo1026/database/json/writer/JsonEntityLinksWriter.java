package org.ludo1026.database.json.writer;

import java.io.BufferedWriter;
import java.io.File;
import java.io.FileWriter;
import java.io.IOException;

import org.apache.commons.lang.StringUtils;
import org.ludo1026.database.manager.bean.CleEtrangere;
import org.ludo1026.database.manager.bean.Colonne;
import org.ludo1026.database.manager.bean.Schema;
import org.ludo1026.database.manager.bean.Table;

public class JsonEntityLinksWriter {

	/**
	 * Write JSON.
	 * @param schema Schema
	 * @param outFilename output filename
	 */
	public void write(Schema schema, String outFilename) {
		
		try {
			 
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
		bw.write("var links = [");
		boolean isFirst = true;
		for(String tableName : schema.getTableByNames().keySet()) {
			Table table = schema.getTableByNames().get(tableName);
			for(CleEtrangere cleEtrangere : table.getCleEtrangeres()) {
				if(isFirst) {
					isFirst = false;
				} else {
					bw.write(",");
				}
				bw.write("\n  {");
				writeLink(bw, cleEtrangere);
				bw.write("\n  }");
			}
		}
		bw.write("\n];\n\n");
		bw.write("module.exports=links;");
	}

	private void writeLink(BufferedWriter bw, CleEtrangere cleEtrangere)
			throws IOException {
		bw.write("\n    origin:{");
		bw.write("id:\""+StringUtils.uncapitalize(formatName(cleEtrangere.getTableOrigine().getName()))+"\", ");
		bw.write("name:\""+StringUtils.uncapitalize(formatName(cleEtrangere.getTableOrigine().getName()))+"\", ");
		bw.write("nbMin:\"0\", ");
		bw.write("nbMax:\"*\"},");
		bw.write("\n    target:{");
		bw.write("id:\""+StringUtils.uncapitalize(formatName(cleEtrangere.getTableDestination().getName()))+"\", ");
		bw.write("name:\""+StringUtils.uncapitalize(formatName(cleEtrangere.getTableDestination().getName()))+"\", ");
		bw.write("nbMin:\"0\", ");
		bw.write("nbMax:\"1\"},");
		bw.write("\n    attributes:[");
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
				bw.write("\n      ");
			}
			bw.write("{");
			bw.write("origin:\""+StringUtils.uncapitalize(formatName(origin.getName()))+"\", ");
			bw.write("target:\""+StringUtils.uncapitalize(formatName(target.getName()))+"\"");
			bw.write("}");
		}
		if(nbColonnes > 1) {
			bw.write("\n      ");
		}
		bw.write("]");
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
