var entities = [
  {
    id:"author", name:"author", sqlTable:"AUTHOR", description:"", 
    stereotypes:["entity"],
    attributes:[
      {id:"firstName", name:"firstName", type:"String", sqlName:"FIRST_NAME", sqlType:"VARCHAR", size:"40", isPK:"false", isNotNull:"false", description:""},
      {id:"id", name:"id", type:"Integer", sqlName:"ID", sqlType:"INTEGER", size:"10", isPK:"true", isNotNull:"true", description:""},
      {id:"lastName", name:"lastName", type:"String", sqlName:"LAST_NAME", sqlType:"VARCHAR", size:"40", isPK:"false", isNotNull:"false", description:""}
    ]
  },
  {
    id:"customer", name:"customer", sqlTable:"CUSTOMER", description:"", 
    stereotypes:["entity"],
    attributes:[
      {id:"phone", name:"phone", type:"String", sqlName:"PHONE", sqlType:"VARCHAR", size:"20", isPK:"false", isNotNull:"false", description:""},
      {id:"zipCode", name:"zipCode", type:"Integer", sqlName:"ZIP_CODE", sqlType:"INTEGER", size:"10", isPK:"false", isNotNull:"false", description:""},
      {id:"age", name:"age", type:"Integer", sqlName:"AGE", sqlType:"INTEGER", size:"10", isPK:"false", isNotNull:"false", description:""},
      {id:"login", name:"login", type:"String", sqlName:"LOGIN", sqlType:"VARCHAR", size:"20", isPK:"false", isNotNull:"true", description:""},
      {id:"firstName", name:"firstName", type:"String", sqlName:"FIRST_NAME", sqlType:"VARCHAR", size:"40", isPK:"false", isNotNull:"false", description:""},
      {id:"reviewer", name:"reviewer", type:"Integer", sqlName:"REVIEWER", sqlType:"SMALLINT", size:"5", isPK:"false", isNotNull:"false", description:""},
      {id:"countryCode", name:"countryCode", type:"String", sqlName:"COUNTRY_CODE", sqlType:"VARCHAR", size:"2", isPK:"false", isNotNull:"true", description:""},
      {id:"city", name:"city", type:"String", sqlName:"CITY", sqlType:"VARCHAR", size:"45", isPK:"false", isNotNull:"false", description:""},
      {id:"password", name:"password", type:"String", sqlName:"PASSWORD", sqlType:"VARCHAR", size:"20", isPK:"false", isNotNull:"false", description:""},
      {id:"lastName", name:"lastName", type:"String", sqlName:"LAST_NAME", sqlType:"VARCHAR", size:"40", isPK:"false", isNotNull:"false", description:""},
      {id:"code", name:"code", type:"String", sqlName:"CODE", sqlType:"VARCHAR", size:"5", isPK:"true", isNotNull:"true", description:""}
    ]
  },
  {
    id:"country", name:"country", sqlTable:"COUNTRY", description:"", 
    stereotypes:["entity"],
    attributes:[
      {id:"name", name:"name", type:"String", sqlName:"NAME", sqlType:"VARCHAR", size:"45", isPK:"false", isNotNull:"false", description:""},
      {id:"code", name:"code", type:"String", sqlName:"CODE", sqlType:"VARCHAR", size:"2", isPK:"true", isNotNull:"true", description:""}
    ]
  },
  {
    id:"workgroup", name:"workgroup", sqlTable:"WORKGROUP", description:"", 
    stereotypes:["entity"],
    attributes:[
      {id:"name", name:"name", type:"String", sqlName:"NAME", sqlType:"VARCHAR", size:"40", isPK:"false", isNotNull:"true", description:""},
      {id:"description", name:"description", type:"String", sqlName:"DESCRIPTION", sqlType:"VARCHAR", size:"600", isPK:"false", isNotNull:"true", description:""},
      {id:"id", name:"id", type:"Integer", sqlName:"ID", sqlType:"SMALLINT", size:"5", isPK:"true", isNotNull:"true", description:""},
      {id:"creationDate", name:"creationDate", type:"Date", sqlName:"CREATION_DATE", sqlType:"DATE", size:"10", isPK:"false", isNotNull:"true", description:""}
    ]
  },
  {
    id:"publisher", name:"publisher", sqlTable:"PUBLISHER", description:"", 
    stereotypes:["entity"],
    attributes:[
      {id:"phone", name:"phone", type:"String", sqlName:"PHONE", sqlType:"VARCHAR", size:"14", isPK:"false", isNotNull:"false", description:""},
      {id:"zipCode", name:"zipCode", type:"Integer", sqlName:"ZIP_CODE", sqlType:"INTEGER", size:"10", isPK:"false", isNotNull:"false", description:""},
      {id:"name", name:"name", type:"String", sqlName:"NAME", sqlType:"VARCHAR", size:"45", isPK:"false", isNotNull:"false", description:""},
      {id:"countryCode", name:"countryCode", type:"String", sqlName:"COUNTRY_CODE", sqlType:"VARCHAR", size:"2", isPK:"false", isNotNull:"true", description:""},
      {id:"email", name:"email", type:"String", sqlName:"EMAIL", sqlType:"VARCHAR", size:"45", isPK:"false", isNotNull:"false", description:""},
      {id:"city", name:"city", type:"String", sqlName:"CITY", sqlType:"VARCHAR", size:"45", isPK:"false", isNotNull:"false", description:""},
      {id:"contact", name:"contact", type:"String", sqlName:"CONTACT", sqlType:"VARCHAR", size:"45", isPK:"false", isNotNull:"false", description:""},
      {id:"code", name:"code", type:"Integer", sqlName:"CODE", sqlType:"INTEGER", size:"10", isPK:"true", isNotNull:"true", description:""}
    ]
  },
  {
    id:"employeeGroup", name:"employeeGroup", sqlTable:"EMPLOYEE_GROUP", description:"", 
    stereotypes:["entity"],
    attributes:[
      {id:"employeeCode", name:"employeeCode", type:"String", sqlName:"EMPLOYEE_CODE", sqlType:"VARCHAR", size:"4", isPK:"true", isNotNull:"true", description:""},
      {id:"groupId", name:"groupId", type:"Integer", sqlName:"GROUP_ID", sqlType:"SMALLINT", size:"5", isPK:"true", isNotNull:"true", description:""}
    ]
  },
  {
    id:"book", name:"book", sqlTable:"BOOK", description:"", 
    stereotypes:["entity"],
    attributes:[
      {id:"authorId", name:"authorId", type:"Integer", sqlName:"AUTHOR_ID", sqlType:"INTEGER", size:"10", isPK:"false", isNotNull:"true", description:""},
      {id:"price", name:"price", type:"BigDecimal", sqlName:"PRICE", sqlType:"DECIMAL", size:"10", isPK:"false", isNotNull:"false", description:""},
      {id:"bestSeller", name:"bestSeller", type:"Integer", sqlName:"BEST_SELLER", sqlType:"SMALLINT", size:"5", isPK:"false", isNotNull:"false", description:""},
      {id:"availability", name:"availability", type:"Integer", sqlName:"AVAILABILITY", sqlType:"SMALLINT", size:"5", isPK:"false", isNotNull:"false", description:""},
      {id:"isbn", name:"isbn", type:"String", sqlName:"ISBN", sqlType:"VARCHAR", size:"13", isPK:"false", isNotNull:"true", description:""},
      {id:"id", name:"id", type:"Integer", sqlName:"ID", sqlType:"INTEGER", size:"10", isPK:"true", isNotNull:"true", description:""},
      {id:"discount", name:"discount", type:"Integer", sqlName:"DISCOUNT", sqlType:"INTEGER", size:"10", isPK:"false", isNotNull:"false", description:""},
      {id:"quantity", name:"quantity", type:"Integer", sqlName:"QUANTITY", sqlType:"INTEGER", size:"10", isPK:"false", isNotNull:"false", description:""},
      {id:"publisherId", name:"publisherId", type:"Integer", sqlName:"PUBLISHER_ID", sqlType:"INTEGER", size:"10", isPK:"false", isNotNull:"true", description:""},
      {id:"title", name:"title", type:"String", sqlName:"TITLE", sqlType:"VARCHAR", size:"160", isPK:"false", isNotNull:"false", description:""}
    ]
  },
  {
    id:"bookOrder", name:"bookOrder", sqlTable:"BOOK_ORDER", description:"", 
    stereotypes:["entity"],
    attributes:[
      {id:"customerCode", name:"customerCode", type:"String", sqlName:"CUSTOMER_CODE", sqlType:"VARCHAR", size:"5", isPK:"false", isNotNull:"true", description:""},
      {id:"employeeCode", name:"employeeCode", type:"String", sqlName:"EMPLOYEE_CODE", sqlType:"VARCHAR", size:"4", isPK:"false", isNotNull:"true", description:""},
      {id:"shopCode", name:"shopCode", type:"String", sqlName:"SHOP_CODE", sqlType:"VARCHAR", size:"3", isPK:"false", isNotNull:"true", description:""},
      {id:"state", name:"state", type:"Integer", sqlName:"STATE", sqlType:"INTEGER", size:"10", isPK:"false", isNotNull:"false", description:""},
      {id:"date", name:"date", type:"Date", sqlName:"DATE", sqlType:"DATE", size:"10", isPK:"false", isNotNull:"false", description:""},
      {id:"id", name:"id", type:"Integer", sqlName:"ID", sqlType:"INTEGER", size:"10", isPK:"true", isNotNull:"true", description:""}
    ]
  },
  {
    id:"badge", name:"badge", sqlTable:"BADGE", description:"", 
    stereotypes:["entity"],
    attributes:[
      {id:"endOfValidity", name:"endOfValidity", type:"Date", sqlName:"END_OF_VALIDITY", sqlType:"DATE", size:"10", isPK:"false", isNotNull:"false", description:""},
      {id:"badgeNumber", name:"badgeNumber", type:"Integer", sqlName:"BADGE_NUMBER", sqlType:"INTEGER", size:"10", isPK:"true", isNotNull:"true", description:""},
      {id:"authorizationLevel", name:"authorizationLevel", type:"Integer", sqlName:"AUTHORIZATION_LEVEL", sqlType:"SMALLINT", size:"5", isPK:"false", isNotNull:"true", description:""}
    ]
  },
  {
    id:"shop", name:"shop", sqlTable:"SHOP", description:"", 
    stereotypes:["entity"],
    attributes:[
      {id:"phone", name:"phone", type:"String", sqlName:"PHONE", sqlType:"VARCHAR", size:"14", isPK:"false", isNotNull:"false", description:""},
      {id:"zipCode", name:"zipCode", type:"Integer", sqlName:"ZIP_CODE", sqlType:"INTEGER", size:"10", isPK:"false", isNotNull:"false", description:""},
      {id:"name", name:"name", type:"String", sqlName:"NAME", sqlType:"VARCHAR", size:"80", isPK:"false", isNotNull:"false", description:""},
      {id:"address1", name:"address1", type:"String", sqlName:"ADDRESS_1", sqlType:"VARCHAR", size:"80", isPK:"false", isNotNull:"false", description:""},
      {id:"address2", name:"address2", type:"String", sqlName:"ADDRESS_2", sqlType:"VARCHAR", size:"80", isPK:"false", isNotNull:"false", description:""},
      {id:"countryCode", name:"countryCode", type:"String", sqlName:"COUNTRY_CODE", sqlType:"VARCHAR", size:"2", isPK:"false", isNotNull:"true", description:""},
      {id:"executive", name:"executive", type:"String", sqlName:"EXECUTIVE", sqlType:"VARCHAR", size:"4", isPK:"false", isNotNull:"false", description:""},
      {id:"email", name:"email", type:"String", sqlName:"EMAIL", sqlType:"VARCHAR", size:"50", isPK:"false", isNotNull:"false", description:""},
      {id:"city", name:"city", type:"String", sqlName:"CITY", sqlType:"VARCHAR", size:"45", isPK:"false", isNotNull:"false", description:""},
      {id:"code", name:"code", type:"String", sqlName:"CODE", sqlType:"VARCHAR", size:"3", isPK:"true", isNotNull:"true", description:""}
    ]
  },
  {
    id:"bookOrderItem", name:"bookOrderItem", sqlTable:"BOOK_ORDER_ITEM", description:"", 
    stereotypes:["entity"],
    attributes:[
      {id:"price", name:"price", type:"BigDecimal", sqlName:"PRICE", sqlType:"DECIMAL", size:"10", isPK:"false", isNotNull:"true", description:""},
      {id:"bookOrderId", name:"bookOrderId", type:"Integer", sqlName:"BOOK_ORDER_ID", sqlType:"INTEGER", size:"10", isPK:"true", isNotNull:"true", description:""},
      {id:"bookId", name:"bookId", type:"Integer", sqlName:"BOOK_ID", sqlType:"INTEGER", size:"10", isPK:"true", isNotNull:"true", description:""},
      {id:"quantity", name:"quantity", type:"Integer", sqlName:"QUANTITY", sqlType:"INTEGER", size:"10", isPK:"false", isNotNull:"true", description:""}
    ]
  },
  {
    id:"employee", name:"employee", sqlTable:"EMPLOYEE", description:"", 
    stereotypes:["entity"],
    attributes:[
      {id:"shopCode", name:"shopCode", type:"String", sqlName:"SHOP_CODE", sqlType:"VARCHAR", size:"3", isPK:"false", isNotNull:"true", description:""},
      {id:"manager", name:"manager", type:"Integer", sqlName:"MANAGER", sqlType:"SMALLINT", size:"5", isPK:"false", isNotNull:"false", description:""},
      {id:"firstName", name:"firstName", type:"String", sqlName:"FIRST_NAME", sqlType:"VARCHAR", size:"40", isPK:"false", isNotNull:"false", description:""},
      {id:"email", name:"email", type:"String", sqlName:"EMAIL", sqlType:"VARCHAR", size:"60", isPK:"false", isNotNull:"false", description:""},
      {id:"badgeNumber", name:"badgeNumber", type:"Integer", sqlName:"BADGE_NUMBER", sqlType:"INTEGER", size:"10", isPK:"false", isNotNull:"false", description:""},
      {id:"lastName", name:"lastName", type:"String", sqlName:"LAST_NAME", sqlType:"VARCHAR", size:"40", isPK:"false", isNotNull:"true", description:""},
      {id:"code", name:"code", type:"String", sqlName:"CODE", sqlType:"VARCHAR", size:"4", isPK:"true", isNotNull:"true", description:""}
    ]
  },
  {
    id:"synopsis", name:"synopsis", sqlTable:"SYNOPSIS", description:"", 
    stereotypes:["entity"],
    attributes:[
      {id:"bookId", name:"bookId", type:"Integer", sqlName:"BOOK_ID", sqlType:"INTEGER", size:"10", isPK:"true", isNotNull:"true", description:""},
      {id:"synopsis", name:"synopsis", type:"String", sqlName:"SYNOPSIS", sqlType:"LONG VARCHAR", size:"32700", isPK:"false", isNotNull:"false", description:""}
    ]
  },
  {
    id:"review", name:"review", sqlTable:"REVIEW", description:"", 
    stereotypes:["entity"],
    attributes:[
      {id:"lastUpdate", name:"lastUpdate", type:"Date", sqlName:"LAST_UPDATE", sqlType:"TIMESTAMP", size:"29", isPK:"false", isNotNull:"false", description:""},
      {id:"reviewText", name:"reviewText", type:"String", sqlName:"REVIEW_TEXT", sqlType:"LONG VARCHAR", size:"32700", isPK:"false", isNotNull:"false", description:""},
      {id:"customerCode", name:"customerCode", type:"String", sqlName:"CUSTOMER_CODE", sqlType:"VARCHAR", size:"5", isPK:"true", isNotNull:"true", description:""},
      {id:"creation", name:"creation", type:"Date", sqlName:"CREATION", sqlType:"TIMESTAMP", size:"29", isPK:"false", isNotNull:"false", description:""},
      {id:"bookId", name:"bookId", type:"Integer", sqlName:"BOOK_ID", sqlType:"INTEGER", size:"10", isPK:"true", isNotNull:"true", description:""},
      {id:"reviewNote", name:"reviewNote", type:"Integer", sqlName:"REVIEW_NOTE", sqlType:"INTEGER", size:"10", isPK:"false", isNotNull:"false", description:""}
    ]
  }];

module.exports=entities;