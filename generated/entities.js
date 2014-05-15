var entities = {
  "author": {
    name:"author", sqlTable:"AUTHOR", description:"", 
    stereotypes:["entity"],
    attributes:{
      "firstName": {name:"firstName", type:"String", sqlName:"FIRST_NAME", sqlType:"VARCHAR", size:"40", isPK:"false", isNotNull:"false", description:""},
      "id": {name:"id", type:"Integer", sqlName:"ID", sqlType:"INTEGER", size:"10", isPK:"true", isNotNull:"true", description:""},
      "lastName": {name:"lastName", type:"String", sqlName:"LAST_NAME", sqlType:"VARCHAR", size:"40", isPK:"false", isNotNull:"false", description:""}
    }
  },
  "customer": {
    name:"customer", sqlTable:"CUSTOMER", description:"", 
    stereotypes:["entity"],
    attributes:{
      "phone": {name:"phone", type:"String", sqlName:"PHONE", sqlType:"VARCHAR", size:"20", isPK:"false", isNotNull:"false", description:""},
      "zipCode": {name:"zipCode", type:"Integer", sqlName:"ZIP_CODE", sqlType:"INTEGER", size:"10", isPK:"false", isNotNull:"false", description:""},
      "age": {name:"age", type:"Integer", sqlName:"AGE", sqlType:"INTEGER", size:"10", isPK:"false", isNotNull:"false", description:""},
      "login": {name:"login", type:"String", sqlName:"LOGIN", sqlType:"VARCHAR", size:"20", isPK:"false", isNotNull:"true", description:""},
      "firstName": {name:"firstName", type:"String", sqlName:"FIRST_NAME", sqlType:"VARCHAR", size:"40", isPK:"false", isNotNull:"false", description:""},
      "reviewer": {name:"reviewer", type:"Integer", sqlName:"REVIEWER", sqlType:"SMALLINT", size:"5", isPK:"false", isNotNull:"false", description:""},
      "countryCode": {name:"countryCode", type:"String", sqlName:"COUNTRY_CODE", sqlType:"VARCHAR", size:"2", isPK:"false", isNotNull:"true", description:""},
      "city": {name:"city", type:"String", sqlName:"CITY", sqlType:"VARCHAR", size:"45", isPK:"false", isNotNull:"false", description:""},
      "password": {name:"password", type:"String", sqlName:"PASSWORD", sqlType:"VARCHAR", size:"20", isPK:"false", isNotNull:"false", description:""},
      "lastName": {name:"lastName", type:"String", sqlName:"LAST_NAME", sqlType:"VARCHAR", size:"40", isPK:"false", isNotNull:"false", description:""},
      "code": {name:"code", type:"String", sqlName:"CODE", sqlType:"VARCHAR", size:"5", isPK:"true", isNotNull:"true", description:""}
    }
  },
  "country": {
    name:"country", sqlTable:"COUNTRY", description:"", 
    stereotypes:["entity"],
    attributes:{
      "name": {name:"name", type:"String", sqlName:"NAME", sqlType:"VARCHAR", size:"45", isPK:"false", isNotNull:"false", description:""},
      "code": {name:"code", type:"String", sqlName:"CODE", sqlType:"VARCHAR", size:"2", isPK:"true", isNotNull:"true", description:""}
    }
  },
  "workgroup": {
    name:"workgroup", sqlTable:"WORKGROUP", description:"", 
    stereotypes:["entity"],
    attributes:{
      "name": {name:"name", type:"String", sqlName:"NAME", sqlType:"VARCHAR", size:"40", isPK:"false", isNotNull:"true", description:""},
      "description": {name:"description", type:"String", sqlName:"DESCRIPTION", sqlType:"VARCHAR", size:"600", isPK:"false", isNotNull:"true", description:""},
      "id": {name:"id", type:"Integer", sqlName:"ID", sqlType:"SMALLINT", size:"5", isPK:"true", isNotNull:"true", description:""},
      "creationDate": {name:"creationDate", type:"Date", sqlName:"CREATION_DATE", sqlType:"DATE", size:"10", isPK:"false", isNotNull:"true", description:""}
    }
  },
  "publisher": {
    name:"publisher", sqlTable:"PUBLISHER", description:"", 
    stereotypes:["entity"],
    attributes:{
      "phone": {name:"phone", type:"String", sqlName:"PHONE", sqlType:"VARCHAR", size:"14", isPK:"false", isNotNull:"false", description:""},
      "zipCode": {name:"zipCode", type:"Integer", sqlName:"ZIP_CODE", sqlType:"INTEGER", size:"10", isPK:"false", isNotNull:"false", description:""},
      "name": {name:"name", type:"String", sqlName:"NAME", sqlType:"VARCHAR", size:"45", isPK:"false", isNotNull:"false", description:""},
      "countryCode": {name:"countryCode", type:"String", sqlName:"COUNTRY_CODE", sqlType:"VARCHAR", size:"2", isPK:"false", isNotNull:"true", description:""},
      "email": {name:"email", type:"String", sqlName:"EMAIL", sqlType:"VARCHAR", size:"45", isPK:"false", isNotNull:"false", description:""},
      "city": {name:"city", type:"String", sqlName:"CITY", sqlType:"VARCHAR", size:"45", isPK:"false", isNotNull:"false", description:""},
      "contact": {name:"contact", type:"String", sqlName:"CONTACT", sqlType:"VARCHAR", size:"45", isPK:"false", isNotNull:"false", description:""},
      "code": {name:"code", type:"Integer", sqlName:"CODE", sqlType:"INTEGER", size:"10", isPK:"true", isNotNull:"true", description:""}
    }
  },
  "employeeGroup": {
    name:"employeeGroup", sqlTable:"EMPLOYEE_GROUP", description:"", 
    stereotypes:["entity"],
    attributes:{
      "employeeCode": {name:"employeeCode", type:"String", sqlName:"EMPLOYEE_CODE", sqlType:"VARCHAR", size:"4", isPK:"true", isNotNull:"true", description:""},
      "groupId": {name:"groupId", type:"Integer", sqlName:"GROUP_ID", sqlType:"SMALLINT", size:"5", isPK:"true", isNotNull:"true", description:""}
    }
  },
  "book": {
    name:"book", sqlTable:"BOOK", description:"", 
    stereotypes:["entity"],
    attributes:{
      "authorId": {name:"authorId", type:"Integer", sqlName:"AUTHOR_ID", sqlType:"INTEGER", size:"10", isPK:"false", isNotNull:"true", description:""},
      "price": {name:"price", type:"BigDecimal", sqlName:"PRICE", sqlType:"DECIMAL", size:"10", isPK:"false", isNotNull:"false", description:""},
      "bestSeller": {name:"bestSeller", type:"Integer", sqlName:"BEST_SELLER", sqlType:"SMALLINT", size:"5", isPK:"false", isNotNull:"false", description:""},
      "availability": {name:"availability", type:"Integer", sqlName:"AVAILABILITY", sqlType:"SMALLINT", size:"5", isPK:"false", isNotNull:"false", description:""},
      "isbn": {name:"isbn", type:"String", sqlName:"ISBN", sqlType:"VARCHAR", size:"13", isPK:"false", isNotNull:"true", description:""},
      "id": {name:"id", type:"Integer", sqlName:"ID", sqlType:"INTEGER", size:"10", isPK:"true", isNotNull:"true", description:""},
      "discount": {name:"discount", type:"Integer", sqlName:"DISCOUNT", sqlType:"INTEGER", size:"10", isPK:"false", isNotNull:"false", description:""},
      "quantity": {name:"quantity", type:"Integer", sqlName:"QUANTITY", sqlType:"INTEGER", size:"10", isPK:"false", isNotNull:"false", description:""},
      "publisherId": {name:"publisherId", type:"Integer", sqlName:"PUBLISHER_ID", sqlType:"INTEGER", size:"10", isPK:"false", isNotNull:"true", description:""},
      "title": {name:"title", type:"String", sqlName:"TITLE", sqlType:"VARCHAR", size:"160", isPK:"false", isNotNull:"false", description:""}
    }
  },
  "bookOrder": {
    name:"bookOrder", sqlTable:"BOOK_ORDER", description:"", 
    stereotypes:["entity"],
    attributes:{
      "customerCode": {name:"customerCode", type:"String", sqlName:"CUSTOMER_CODE", sqlType:"VARCHAR", size:"5", isPK:"false", isNotNull:"true", description:""},
      "employeeCode": {name:"employeeCode", type:"String", sqlName:"EMPLOYEE_CODE", sqlType:"VARCHAR", size:"4", isPK:"false", isNotNull:"true", description:""},
      "shopCode": {name:"shopCode", type:"String", sqlName:"SHOP_CODE", sqlType:"VARCHAR", size:"3", isPK:"false", isNotNull:"true", description:""},
      "state": {name:"state", type:"Integer", sqlName:"STATE", sqlType:"INTEGER", size:"10", isPK:"false", isNotNull:"false", description:""},
      "date": {name:"date", type:"Date", sqlName:"DATE", sqlType:"DATE", size:"10", isPK:"false", isNotNull:"false", description:""},
      "id": {name:"id", type:"Integer", sqlName:"ID", sqlType:"INTEGER", size:"10", isPK:"true", isNotNull:"true", description:""}
    }
  },
  "badge": {
    name:"badge", sqlTable:"BADGE", description:"", 
    stereotypes:["entity"],
    attributes:{
      "endOfValidity": {name:"endOfValidity", type:"Date", sqlName:"END_OF_VALIDITY", sqlType:"DATE", size:"10", isPK:"false", isNotNull:"false", description:""},
      "badgeNumber": {name:"badgeNumber", type:"Integer", sqlName:"BADGE_NUMBER", sqlType:"INTEGER", size:"10", isPK:"true", isNotNull:"true", description:""},
      "authorizationLevel": {name:"authorizationLevel", type:"Integer", sqlName:"AUTHORIZATION_LEVEL", sqlType:"SMALLINT", size:"5", isPK:"false", isNotNull:"true", description:""}
    }
  },
  "shop": {
    name:"shop", sqlTable:"SHOP", description:"", 
    stereotypes:["entity"],
    attributes:{
      "phone": {name:"phone", type:"String", sqlName:"PHONE", sqlType:"VARCHAR", size:"14", isPK:"false", isNotNull:"false", description:""},
      "zipCode": {name:"zipCode", type:"Integer", sqlName:"ZIP_CODE", sqlType:"INTEGER", size:"10", isPK:"false", isNotNull:"false", description:""},
      "name": {name:"name", type:"String", sqlName:"NAME", sqlType:"VARCHAR", size:"80", isPK:"false", isNotNull:"false", description:""},
      "address1": {name:"address1", type:"String", sqlName:"ADDRESS_1", sqlType:"VARCHAR", size:"80", isPK:"false", isNotNull:"false", description:""},
      "address2": {name:"address2", type:"String", sqlName:"ADDRESS_2", sqlType:"VARCHAR", size:"80", isPK:"false", isNotNull:"false", description:""},
      "countryCode": {name:"countryCode", type:"String", sqlName:"COUNTRY_CODE", sqlType:"VARCHAR", size:"2", isPK:"false", isNotNull:"true", description:""},
      "executive": {name:"executive", type:"String", sqlName:"EXECUTIVE", sqlType:"VARCHAR", size:"4", isPK:"false", isNotNull:"false", description:""},
      "email": {name:"email", type:"String", sqlName:"EMAIL", sqlType:"VARCHAR", size:"50", isPK:"false", isNotNull:"false", description:""},
      "city": {name:"city", type:"String", sqlName:"CITY", sqlType:"VARCHAR", size:"45", isPK:"false", isNotNull:"false", description:""},
      "code": {name:"code", type:"String", sqlName:"CODE", sqlType:"VARCHAR", size:"3", isPK:"true", isNotNull:"true", description:""}
    }
  },
  "bookOrderItem": {
    name:"bookOrderItem", sqlTable:"BOOK_ORDER_ITEM", description:"", 
    stereotypes:["entity"],
    attributes:{
      "price": {name:"price", type:"BigDecimal", sqlName:"PRICE", sqlType:"DECIMAL", size:"10", isPK:"false", isNotNull:"true", description:""},
      "bookOrderId": {name:"bookOrderId", type:"Integer", sqlName:"BOOK_ORDER_ID", sqlType:"INTEGER", size:"10", isPK:"true", isNotNull:"true", description:""},
      "bookId": {name:"bookId", type:"Integer", sqlName:"BOOK_ID", sqlType:"INTEGER", size:"10", isPK:"true", isNotNull:"true", description:""},
      "quantity": {name:"quantity", type:"Integer", sqlName:"QUANTITY", sqlType:"INTEGER", size:"10", isPK:"false", isNotNull:"true", description:""}
    }
  },
  "employee": {
    name:"employee", sqlTable:"EMPLOYEE", description:"", 
    stereotypes:["entity"],
    attributes:{
      "shopCode": {name:"shopCode", type:"String", sqlName:"SHOP_CODE", sqlType:"VARCHAR", size:"3", isPK:"false", isNotNull:"true", description:""},
      "manager": {name:"manager", type:"Integer", sqlName:"MANAGER", sqlType:"SMALLINT", size:"5", isPK:"false", isNotNull:"false", description:""},
      "firstName": {name:"firstName", type:"String", sqlName:"FIRST_NAME", sqlType:"VARCHAR", size:"40", isPK:"false", isNotNull:"false", description:""},
      "email": {name:"email", type:"String", sqlName:"EMAIL", sqlType:"VARCHAR", size:"60", isPK:"false", isNotNull:"false", description:""},
      "badgeNumber": {name:"badgeNumber", type:"Integer", sqlName:"BADGE_NUMBER", sqlType:"INTEGER", size:"10", isPK:"false", isNotNull:"false", description:""},
      "lastName": {name:"lastName", type:"String", sqlName:"LAST_NAME", sqlType:"VARCHAR", size:"40", isPK:"false", isNotNull:"true", description:""},
      "code": {name:"code", type:"String", sqlName:"CODE", sqlType:"VARCHAR", size:"4", isPK:"true", isNotNull:"true", description:""}
    }
  },
  "synopsis": {
    name:"synopsis", sqlTable:"SYNOPSIS", description:"", 
    stereotypes:["entity"],
    attributes:{
      "bookId": {name:"bookId", type:"Integer", sqlName:"BOOK_ID", sqlType:"INTEGER", size:"10", isPK:"true", isNotNull:"true", description:""},
      "synopsis": {name:"synopsis", type:"String", sqlName:"SYNOPSIS", sqlType:"LONG VARCHAR", size:"32700", isPK:"false", isNotNull:"false", description:""}
    }
  },
  "review": {
    name:"review", sqlTable:"REVIEW", description:"", 
    stereotypes:["entity"],
    attributes:{
      "lastUpdate": {name:"lastUpdate", type:"Date", sqlName:"LAST_UPDATE", sqlType:"TIMESTAMP", size:"29", isPK:"false", isNotNull:"false", description:""},
      "reviewText": {name:"reviewText", type:"String", sqlName:"REVIEW_TEXT", sqlType:"LONG VARCHAR", size:"32700", isPK:"false", isNotNull:"false", description:""},
      "customerCode": {name:"customerCode", type:"String", sqlName:"CUSTOMER_CODE", sqlType:"VARCHAR", size:"5", isPK:"true", isNotNull:"true", description:""},
      "creation": {name:"creation", type:"Date", sqlName:"CREATION", sqlType:"TIMESTAMP", size:"29", isPK:"false", isNotNull:"false", description:""},
      "bookId": {name:"bookId", type:"Integer", sqlName:"BOOK_ID", sqlType:"INTEGER", size:"10", isPK:"true", isNotNull:"true", description:""},
      "reviewNote": {name:"reviewNote", type:"Integer", sqlName:"REVIEW_NOTE", sqlType:"INTEGER", size:"10", isPK:"false", isNotNull:"false", description:""}
    }
  }
};

module.exports=entities;