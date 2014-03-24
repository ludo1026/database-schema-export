package org.ludo1026.database;

import org.ludo1026.database.json.writer.JsonEntitiesWriter;
import org.ludo1026.database.json.writer.JsonLinksWriter;
import org.ludo1026.database.manager.JDBCManager;
import org.ludo1026.database.manager.bean.Schema;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class Main {

	/**
	 * Name du fichier de configuration des scripts.
	 */
	public static final String SPRING_CONFIG_SCRIPT_XML = "config/database/applicationContext.xml";

	public static final String CONFIG_OUT_FILENAME_ENTITIES = "generated/entities.js";
	public static final String CONFIG_OUT_FILENAME_LINKS = "generated/links.js";

	/**
	 * Context SPRING.
	 */
	private static org.springframework.context.ApplicationContext context;

	/**
	 * Initialisation : charger le contexte Spring.
	 */
	static {
		Main.context = new ClassPathXmlApplicationContext(new String[] { Main.SPRING_CONFIG_SCRIPT_XML, });
	}

	public static void main(final String[] args) {
		final JDBCManager jdbcManager = (JDBCManager) Main.context.getBean("jdbcManager");
		Schema schema = jdbcManager.main();
		
		JsonEntitiesWriter jsonEntitiesWriter = new JsonEntitiesWriter();
		JsonLinksWriter jsonLinksWriter = new JsonLinksWriter();
		
		jsonEntitiesWriter.write(schema, CONFIG_OUT_FILENAME_ENTITIES);
		jsonLinksWriter.write(schema, CONFIG_OUT_FILENAME_LINKS);
	}

}
