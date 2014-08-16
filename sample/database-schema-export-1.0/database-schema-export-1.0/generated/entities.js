var entities = {
  "bookOrder": {sqlTable:"BOOK_ORDER", description:"", attributes: {
    "date": {type:"Date", sqlName:"DATE", sqlType:"DATE", size:"10", isPK:"false", isNotNull:"false", description:""},
    "shopCode": {type:"String", sqlName:"SHOP_CODE", sqlType:"VARCHAR", size:"3", isPK:"false", isNotNull:"true", description:""},
    "state": {type:"Integer", sqlName:"STATE", sqlType:"INTEGER", size:"10", isPK:"false", isNotNull:"false", description:""},
    "customerCode": {type:"String", sqlName:"CUSTOMER_CODE", sqlType:"VARCHAR", size:"5", isPK:"false", isNotNull:"true", description:""},
    "id": {type:"Integer", sqlName:"ID", sqlType:"INTEGER", size:"10", isPK:"true", isNotNull:"true", description:""},
    "employeeCode": {type:"String", sqlName:"EMPLOYEE_CODE", sqlType:"VARCHAR", size:"4", isPK:"false", isNotNull:"true", description:""}
  }},
  "publisher": {sqlTable:"PUBLISHER", description:"", attributes: {
    "code": {type:"Integer", sqlName:"CODE", sqlType:"INTEGER", size:"10", isPK:"true", isNotNull:"true", description:""},
    "contact": {type:"String", sqlName:"CONTACT", sqlType:"VARCHAR", size:"45", isPK:"false", isNotNull:"false", description:""},
    "city": {type:"String", sqlName:"CITY", sqlType:"VARCHAR", size:"45", isPK:"false", isNotNull:"false", description:""},
    "zipCode": {type:"Integer", sqlName:"ZIP_CODE", sqlType:"INTEGER", size:"10", isPK:"false", isNotNull:"false", description:""},
    "phone": {type:"String", sqlName:"PHONE", sqlType:"VARCHAR", size:"14", isPK:"false", isNotNull:"false", description:""},
    "email": {type:"String", sqlName:"EMAIL", sqlType:"VARCHAR", size:"45", isPK:"false", isNotNull:"false", description:""},
    "countryCode": {type:"String", sqlName:"COUNTRY_CODE", sqlType:"VARCHAR", size:"2", isPK:"false", isNotNull:"true", description:""},
    "name": {type:"String", sqlName:"NAME", sqlType:"VARCHAR", size:"45", isPK:"false", isNotNull:"false", description:""}
  }},
  "badge": {sqlTable:"BADGE", description:"", attributes: {
    "badgeNumber": {type:"Integer", sqlName:"BADGE_NUMBER", sqlType:"INTEGER", size:"10", isPK:"true", isNotNull:"true", description:""},
    "authorizationLevel": {type:"Integer", sqlName:"AUTHORIZATION_LEVEL", sqlType:"SMALLINT", size:"5", isPK:"false", isNotNull:"true", description:""},
    "endOfValidity": {type:"Date", sqlName:"END_OF_VALIDITY", sqlType:"DATE", size:"10", isPK:"false", isNotNull:"false", description:""}
  }},
  "bookOrderItem": {sqlTable:"BOOK_ORDER_ITEM", description:"", attributes: {
    "price": {type:"BigDecimal", sqlName:"PRICE", sqlType:"DECIMAL", size:"10", isPK:"false", isNotNull:"true", description:""},
    "quantity": {type:"Integer", sqlName:"QUANTITY", sqlType:"INTEGER", size:"10", isPK:"false", isNotNull:"true", description:""},
    "bookId": {type:"Integer", sqlName:"BOOK_ID", sqlType:"INTEGER", size:"10", isPK:"true", isNotNull:"true", description:""},
    "bookOrderId": {type:"Integer", sqlName:"BOOK_ORDER_ID", sqlType:"INTEGER", size:"10", isPK:"true", isNotNull:"true", description:""}
  }},
  "employee": {sqlTable:"EMPLOYEE", description:"", attributes: {
    "code": {type:"String", sqlName:"CODE", sqlType:"VARCHAR", size:"4", isPK:"true", isNotNull:"true", description:""},
    "badgeNumber": {type:"Integer", sqlName:"BADGE_NUMBER", sqlType:"INTEGER", size:"10", isPK:"false", isNotNull:"false", description:""},
    "shopCode": {type:"String", sqlName:"SHOP_CODE", sqlType:"VARCHAR", size:"3", isPK:"false", isNotNull:"true", description:""},
    "manager": {type:"Integer", sqlName:"MANAGER", sqlType:"SMALLINT", size:"5", isPK:"false", isNotNull:"false", description:""},
    "lastName": {type:"String", sqlName:"LAST_NAME", sqlType:"VARCHAR", size:"40", isPK:"false", isNotNull:"true", description:""},
    "email": {type:"String", sqlName:"EMAIL", sqlType:"VARCHAR", size:"60", isPK:"false", isNotNull:"false", description:""},
    "firstName": {type:"String", sqlName:"FIRST_NAME", sqlType:"VARCHAR", size:"40", isPK:"false", isNotNull:"false", description:""}
  }},
  "workgroup": {sqlTable:"WORKGROUP", description:"", attributes: {
    "description": {type:"String", sqlName:"DESCRIPTION", sqlType:"VARCHAR", size:"600", isPK:"false", isNotNull:"true", description:""},
    "creationDate": {type:"Date", sqlName:"CREATION_DATE", sqlType:"DATE", size:"10", isPK:"false", isNotNull:"true", description:""},
    "id": {type:"Integer", sqlName:"ID", sqlType:"SMALLINT", size:"5", isPK:"true", isNotNull:"true", description:""},
    "name": {type:"String", sqlName:"NAME", sqlType:"VARCHAR", size:"40", isPK:"false", isNotNull:"true", description:""}
  }},
  "author": {sqlTable:"AUTHOR", description:"", attributes: {
    "id": {type:"Integer", sqlName:"ID", sqlType:"INTEGER", size:"10", isPK:"true", isNotNull:"true", description:""},
    "lastName": {type:"String", sqlName:"LAST_NAME", sqlType:"VARCHAR", size:"40", isPK:"false", isNotNull:"false", description:""},
    "firstName": {type:"String", sqlName:"FIRST_NAME", sqlType:"VARCHAR", size:"40", isPK:"false", isNotNull:"false", description:""}
  }},
  "shop": {sqlTable:"SHOP", description:"", attributes: {
    "code": {type:"String", sqlName:"CODE", sqlType:"VARCHAR", size:"3", isPK:"true", isNotNull:"true", description:""},
    "city": {type:"String", sqlName:"CITY", sqlType:"VARCHAR", size:"45", isPK:"false", isNotNull:"false", description:""},
    "zipCode": {type:"Integer", sqlName:"ZIP_CODE", sqlType:"INTEGER", size:"10", isPK:"false", isNotNull:"false", description:""},
    "phone": {type:"String", sqlName:"PHONE", sqlType:"VARCHAR", size:"14", isPK:"false", isNotNull:"false", description:""},
    "executive": {type:"String", sqlName:"EXECUTIVE", sqlType:"VARCHAR", size:"4", isPK:"false", isNotNull:"false", description:""},
    "email": {type:"String", sqlName:"EMAIL", sqlType:"VARCHAR", size:"50", isPK:"false", isNotNull:"false", description:""},
    "address1": {type:"String", sqlName:"ADDRESS_1", sqlType:"VARCHAR", size:"80", isPK:"false", isNotNull:"false", description:""},
    "name": {type:"String", sqlName:"NAME", sqlType:"VARCHAR", size:"80", isPK:"false", isNotNull:"false", description:""},
    "address2": {type:"String", sqlName:"ADDRESS_2", sqlType:"VARCHAR", size:"80", isPK:"false", isNotNull:"false", description:""},
    "countryCode": {type:"String", sqlName:"COUNTRY_CODE", sqlType:"VARCHAR", size:"2", isPK:"false", isNotNull:"true", description:""}
  }},
  "synopsis": {sqlTable:"SYNOPSIS", description:"", attributes: {
    "synopsis": {type:"String", sqlName:"SYNOPSIS", sqlType:"LONG VARCHAR", size:"32700", isPK:"false", isNotNull:"false", description:""},
    "bookId": {type:"Integer", sqlName:"BOOK_ID", sqlType:"INTEGER", size:"10", isPK:"true", isNotNull:"true", description:""}
  }},
  "country": {sqlTable:"COUNTRY", description:"", attributes: {
    "code": {type:"String", sqlName:"CODE", sqlType:"VARCHAR", size:"2", isPK:"true", isNotNull:"true", description:""},
    "name": {type:"String", sqlName:"NAME", sqlType:"VARCHAR", size:"45", isPK:"false", isNotNull:"false", description:""}
  }},
  "book": {sqlTable:"BOOK", description:"", attributes: {
    "publisherId": {type:"Integer", sqlName:"PUBLISHER_ID", sqlType:"INTEGER", size:"10", isPK:"false", isNotNull:"true", description:""},
    "authorId": {type:"Integer", sqlName:"AUTHOR_ID", sqlType:"INTEGER", size:"10", isPK:"false", isNotNull:"true", description:""},
    "isbn": {type:"String", sqlName:"ISBN", sqlType:"VARCHAR", size:"13", isPK:"false", isNotNull:"true", description:""},
    "price": {type:"BigDecimal", sqlName:"PRICE", sqlType:"DECIMAL", size:"10", isPK:"false", isNotNull:"false", description:""},
    "quantity": {type:"Integer", sqlName:"QUANTITY", sqlType:"INTEGER", size:"10", isPK:"false", isNotNull:"false", description:""},
    "availability": {type:"Integer", sqlName:"AVAILABILITY", sqlType:"SMALLINT", size:"5", isPK:"false", isNotNull:"false", description:""},
    "title": {type:"String", sqlName:"TITLE", sqlType:"VARCHAR", size:"160", isPK:"false", isNotNull:"false", description:""},
    "id": {type:"Integer", sqlName:"ID", sqlType:"INTEGER", size:"10", isPK:"true", isNotNull:"true", description:""},
    "bestSeller": {type:"Integer", sqlName:"BEST_SELLER", sqlType:"SMALLINT", size:"5", isPK:"false", isNotNull:"false", description:""},
    "discount": {type:"Integer", sqlName:"DISCOUNT", sqlType:"INTEGER", size:"10", isPK:"false", isNotNull:"false", description:""}
  }},
  "customer": {sqlTable:"CUSTOMER", description:"", attributes: {
    "reviewer": {type:"Integer", sqlName:"REVIEWER", sqlType:"SMALLINT", size:"5", isPK:"false", isNotNull:"false", description:""},
    "code": {type:"String", sqlName:"CODE", sqlType:"VARCHAR", size:"5", isPK:"true", isNotNull:"true", description:""},
    "password": {type:"String", sqlName:"PASSWORD", sqlType:"VARCHAR", size:"20", isPK:"false", isNotNull:"false", description:""},
    "city": {type:"String", sqlName:"CITY", sqlType:"VARCHAR", size:"45", isPK:"false", isNotNull:"false", description:""},
    "zipCode": {type:"Integer", sqlName:"ZIP_CODE", sqlType:"INTEGER", size:"10", isPK:"false", isNotNull:"false", description:""},
    "phone": {type:"String", sqlName:"PHONE", sqlType:"VARCHAR", size:"20", isPK:"false", isNotNull:"false", description:""},
    "login": {type:"String", sqlName:"LOGIN", sqlType:"VARCHAR", size:"20", isPK:"false", isNotNull:"true", description:""},
    "lastName": {type:"String", sqlName:"LAST_NAME", sqlType:"VARCHAR", size:"40", isPK:"false", isNotNull:"false", description:""},
    "firstName": {type:"String", sqlName:"FIRST_NAME", sqlType:"VARCHAR", size:"40", isPK:"false", isNotNull:"false", description:""},
    "countryCode": {type:"String", sqlName:"COUNTRY_CODE", sqlType:"VARCHAR", size:"2", isPK:"false", isNotNull:"true", description:""},
    "age": {type:"Integer", sqlName:"AGE", sqlType:"INTEGER", size:"10", isPK:"false", isNotNull:"false", description:""}
  }},
  "employeeGroup": {sqlTable:"EMPLOYEE_GROUP", description:"", attributes: {
    "employeeCode": {type:"String", sqlName:"EMPLOYEE_CODE", sqlType:"VARCHAR", size:"4", isPK:"true", isNotNull:"true", description:""},
    "groupId": {type:"Integer", sqlName:"GROUP_ID", sqlType:"SMALLINT", size:"5", isPK:"true", isNotNull:"true", description:""}
  }},
  "review": {sqlTable:"REVIEW", description:"", attributes: {
    "reviewText": {type:"String", sqlName:"REVIEW_TEXT", sqlType:"LONG VARCHAR", size:"32700", isPK:"false", isNotNull:"false", description:""},
    "lastUpdate": {type:"Date", sqlName:"LAST_UPDATE", sqlType:"TIMESTAMP", size:"29", isPK:"false", isNotNull:"false", description:""},
    "bookId": {type:"Integer", sqlName:"BOOK_ID", sqlType:"INTEGER", size:"10", isPK:"true", isNotNull:"true", description:""},
    "creation": {type:"Date", sqlName:"CREATION", sqlType:"TIMESTAMP", size:"29", isPK:"false", isNotNull:"false", description:""},
    "customerCode": {type:"String", sqlName:"CUSTOMER_CODE", sqlType:"VARCHAR", size:"5", isPK:"true", isNotNull:"true", description:""},
    "reviewNote": {type:"Integer", sqlName:"REVIEW_NOTE", sqlType:"INTEGER", size:"10", isPK:"false", isNotNull:"false", description:""}
  }}
};

for(var entityId in entities) {
	entities[entityId].stereotypes=["entity"];
}

module.exports=entities;