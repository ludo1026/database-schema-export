package org.ludo1026.util;

import java.util.List;

public final class AssertHelper {
	
	public static void assertBoolean(boolean assertion, String messageTexte) {
		if( ! assertion ) {
			throw new IllegalStateException(messageTexte);
		}
	}
	
	public static void assertNotNullArgument(Object param, String nomParam, String nomMethode) {
		if( param == null ) {
			throw new IllegalArgumentException(nomMethode+" : L'argument '"+nomParam+"' n'est pas défini.");
		}
	}
	
	public static void assertNotNullArgument(Object param, String nomParam) {
		if( param == null ) {
			throw new IllegalArgumentException("L'argument '"+nomParam+"' n'est pas défini.");
		}
	}
	
	public static void assertNotNull(Object param, String nomParam) {
		if( param == null ) {
			throw new IllegalStateException("L'objet '"+nomParam+"' n'est pas défini.");
		}
	}
	
	public static void assertInstanceOf(Object param, Class typeClasse, String nomParam) {
		if( ! typeClasse.isInstance(param) ) {
			throw new IllegalStateException("L'objet '"+nomParam+"' n'est pas du type '"+typeClasse.getName()+"'.");
		}
	}
	
	public static void assertInstanceOf(Object param, String nomParam, Class typeClasse) {
		if( ! typeClasse.isInstance(param) ) {
			throw new IllegalStateException("L'objet '"+nomParam+"' n'est pas du type '"+typeClasse.getName()+"'.");
		}
	}
	
	public static void assertDefined(Object param, String nomParam) {
		if( param == null ) {
			throw new IllegalStateException("La valeur '"+nomParam+"' n'est pas définie.");
		}
		else
		if( param instanceof java.lang.String ) {
			if( Utils.isEmpty((java.lang.String)param) ) {
				throw new IllegalStateException("La valeur '"+nomParam+"' n'est pas définie.");
			}
			return;
		}
		else
		if( param instanceof java.util.List ) {
			if( ((List)param).isEmpty() ) {
				throw new IllegalStateException("La liste '"+nomParam+"' n'est pas définie.");
			}
			return;
		}
	}

    public static void assertDefinedArgument(Object param, String nomParam, String nomMethode) {
        if( param == null ) {
            throw new IllegalArgumentException(nomMethode+" : La valeur '"+nomParam+"' n'est pas définie.");
        }
        else
        if( param instanceof java.lang.String ) {
            if( Utils.isEmpty((java.lang.String)param) ) {
                throw new IllegalArgumentException(nomMethode+" : La valeur '"+nomParam+"' n'est pas définie.");
            }
            return;
        }
        else
        if( param instanceof java.util.List ) {
            if( ((List)param).isEmpty() ) {
                throw new IllegalArgumentException(nomMethode+" : La liste '"+nomParam+"' n'est pas définie.");
            }
            return;
        }
    }
    
}
