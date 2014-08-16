package org.ludo1026.util;

/**
 * Utils methods.
 */
public class Utils {

    public static boolean equals(String txt1, String txt2) {
        if(txt1 == null) {
            return txt2 == null;
        }
        return txt1.equals(txt2);
    }

    public static boolean equalsIgnoreCase(String txt1, String txt2) {
        if(txt1 == null) {
            return txt2 == null;
        }
        return txt1.equalsIgnoreCase(txt2);
    }

    public static String uncapitalize(String txt) {
        if(txt == null || txt.length() == 0) {
            return txt;
        }
        StringBuffer res = new StringBuffer();
        res.append(String.valueOf(txt.charAt(0)).toLowerCase());
        if(txt.length() > 1) {
            res.append(String.valueOf(txt.substring(1)));
        }
        return res.toString();
    }

    public static String capitalize(String txt) {
        if(txt == null || txt.length() == 0) {
            return txt;
        }
        StringBuffer res = new StringBuffer();
        res.append(String.valueOf(txt.charAt(0)).toLowerCase());
        if(txt.length() > 1) {
            res.append(String.valueOf(txt.substring(1)));
        }
        return res.toString();
    }

    public static boolean isEmpty(String txt) {
        return (txt == null || "".equals(txt));
    }

    public static boolean isBlank(String txt) {
        return (txt == null || txt.trim().length() == 0);
    }

    public static String lowerCase(String txt) {
        if(txt == null) {
            return txt;
        }
        return txt.toLowerCase();
    }

    public static Boolean toBoolean(String txt) {
        if(txt == null) {
            return null;
        }
        return Boolean.parseBoolean(txt);
    }

    public static Long toLong(String txt) {
        if(txt == null) {
            return null;
        }
        return Long.parseLong(txt);
    }

    public static Integer toInteger(String txt) {
        if(txt == null) {
            return null;
        }
        return Integer.parseInt(txt);
    }
}
