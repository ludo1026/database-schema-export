package org.ludo1026.database;

import org.ludo1026.database.json.writer.JsonEntitiesWriter;
import org.ludo1026.database.json.writer.JsonEntityLinksWriter;
import org.ludo1026.database.manager.DataSourceManager;
import org.ludo1026.database.manager.JDBCManager;
import org.ludo1026.database.manager.bean.Schema;
import org.ludo1026.util.Utils;

import javax.sql.DataSource;
import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.util.Properties;

public class Main {

	public static final String CONFIG_OUT_FILENAME_ENTITIES = "generated/entities.js";
	public static final String CONFIG_OUT_FILENAME_LINKS = "generated/links.js";

	public static void main(final String[] args) throws IOException {

        String databasePropertiesFilename;
        if(args == null || args.length == 0 || args[0] == null || Utils.isBlank(args[0])) {
            databasePropertiesFilename = "database.properties";
        } else {
            databasePropertiesFilename = args[0];
        }

        Properties properties = new Properties();
        FileInputStream inputStream = new FileInputStream(databasePropertiesFilename);
        properties.load(inputStream);

        boolean hasError = false;
        if(Utils.isBlank(properties.getProperty("database.driverClassName"))) {
            hasError = true;
            System.err.println("Error : Please define the JDBC driver class name in the property 'database.driverClassName' in the file : '"+databasePropertiesFilename+"'.");
        }
        if(Utils.isBlank(properties.getProperty("database.url"))) {
            hasError = true;
            System.err.println("Error : Please define the JDBC URL to the database in the property 'database.url' in the file : '"+databasePropertiesFilename+"'.");
        }
        if(Utils.isBlank(properties.getProperty("database.username"))) {
            hasError = true;
            System.err.println("Error : Please define the username of the database in the property 'database.username' in the file : '"+databasePropertiesFilename+"'.");
        }
        if(Utils.isBlank(properties.getProperty("database.password"))) {
            hasError = true;
            System.err.println("Error : Please define the password of the database in the property 'database.password' in the file : '"+databasePropertiesFilename+"'.");
        }
        if(!Utils.isBlank(properties.getProperty("database.driverClassName"))) {
            try {
                Class.forName(properties.getProperty("database.driverClassName"));
            } catch(ClassNotFoundException e) {
                hasError = true;
                System.err.println("Error : the JDBC class '"+properties.getProperty("database.driverClassName")+"' can not be loaded.");
                System.err.println("=> Please add the JAR of the JDBC Driver in the 'lib' directory.");
            }
        }
        if(hasError) {
            System.exit(1);
        }

        DataSourceManager dataSourceManager = new DataSourceManager();
        DataSource dataSource = dataSourceManager.newDataSource(properties);

        JDBCManager jdbcManager = new JDBCManager(dataSource);
		Schema schema = jdbcManager.main();
		
		JsonEntitiesWriter jsonEntitiesWriter = new JsonEntitiesWriter();
		JsonEntityLinksWriter jsonLinksWriter = new JsonEntityLinksWriter();

        new File("generated").mkdirs();
		jsonEntitiesWriter.write(schema, CONFIG_OUT_FILENAME_ENTITIES);
		jsonLinksWriter.write(schema, CONFIG_OUT_FILENAME_LINKS);
	}

}
