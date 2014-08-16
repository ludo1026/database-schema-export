package org.ludo1026.database.manager;

import org.apache.commons.dbcp.BasicDataSource;
import org.ludo1026.util.Utils;

import javax.sql.DataSource;
import java.util.Properties;

/**
 * Manage data source.
 */
public class DataSourceManager {

    public DataSource newDataSource(Properties properties) {
        BasicDataSource dataSource = new BasicDataSource();
        if(properties.getProperty("database.driverClassName") != null) {
            dataSource.setDriverClassName(properties.getProperty("database.driverClassName"));
        }
        if(properties.getProperty("database.url") != null) {
            dataSource.setUrl(properties.getProperty("database.url"));
        }
        if(properties.getProperty("database.username") != null) {
            dataSource.setUsername(properties.getProperty("database.username"));
        }
        if(properties.getProperty("database.password") != null) {
            dataSource.setPassword(properties.getProperty("database.password"));
        }
        if(properties.getProperty("database.testOnBorrow") != null) {
            dataSource.setTestOnBorrow(Utils.toBoolean(properties.getProperty("database.testOnBorrow")));
        }
        if(properties.getProperty("database.testOnReturn") != null) {
            dataSource.setTestOnReturn(Utils.toBoolean(properties.getProperty("database.testOnReturn")));
        }
        if(properties.getProperty("database.testWhileIdle") != null) {
            dataSource.setTestWhileIdle(Utils.toBoolean(properties.getProperty("database.testWhileIdle")));
        }
        if(properties.getProperty("database.timeBetweenEvictionRunsMillis") != null) {
            dataSource.setTimeBetweenEvictionRunsMillis(Utils.toLong(properties.getProperty("database.timeBetweenEvictionRunsMillis")));
        }
        if(properties.getProperty("database.numTestsPerEvictionRun") != null) {
            dataSource.setNumTestsPerEvictionRun(Utils.toInteger(properties.getProperty("database.numTestsPerEvictionRun")));
        }
        if(properties.getProperty("database.minEvictableIdleTimeMillis") != null) {
            dataSource.setMinEvictableIdleTimeMillis(Utils.toLong(properties.getProperty("database.minEvictableIdleTimeMillis")));
        }
        if(properties.getProperty("database.maxIdle") != null) {
            dataSource.setMaxIdle(Utils.toInteger(properties.getProperty("database.maxIdle")));
        }
        if(properties.getProperty("database.initialSize") != null) {
            dataSource.setInitialSize(Utils.toInteger(properties.getProperty("database.initialSize")));
        }
        if(properties.getProperty("database.maxActive") != null) {
            dataSource.setMaxActive(Utils.toInteger(properties.getProperty("database.maxActive")));
        }
        return dataSource;
    }

}
