var links = [
  {
    origin:{id:"customer", name:"customer", nbMin:"0", nbMax:"*"},
    target:{id:"country", name:"country", nbMin:"0", nbMax:"1"},
    attributes:[{origin:"countryCode", target:"code"}]
  },
  {
    origin:{id:"publisher", name:"publisher", nbMin:"0", nbMax:"*"},
    target:{id:"country", name:"country", nbMin:"0", nbMax:"1"},
    attributes:[{origin:"countryCode", target:"code"}]
  },
  {
    origin:{id:"employeeGroup", name:"employeeGroup", nbMin:"0", nbMax:"*"},
    target:{id:"employee", name:"employee", nbMin:"0", nbMax:"1"},
    attributes:[{origin:"employeeCode", target:"code"}]
  },
  {
    origin:{id:"employeeGroup", name:"employeeGroup", nbMin:"0", nbMax:"*"},
    target:{id:"workgroup", name:"workgroup", nbMin:"0", nbMax:"1"},
    attributes:[{origin:"groupId", target:"id"}]
  },
  {
    origin:{id:"book", name:"book", nbMin:"0", nbMax:"*"},
    target:{id:"author", name:"author", nbMin:"0", nbMax:"1"},
    attributes:[{origin:"authorId", target:"id"}]
  },
  {
    origin:{id:"book", name:"book", nbMin:"0", nbMax:"*"},
    target:{id:"publisher", name:"publisher", nbMin:"0", nbMax:"1"},
    attributes:[{origin:"publisherId", target:"code"}]
  },
  {
    origin:{id:"bookOrder", name:"bookOrder", nbMin:"0", nbMax:"*"},
    target:{id:"shop", name:"shop", nbMin:"0", nbMax:"1"},
    attributes:[{origin:"shopCode", target:"code"}]
  },
  {
    origin:{id:"bookOrder", name:"bookOrder", nbMin:"0", nbMax:"*"},
    target:{id:"customer", name:"customer", nbMin:"0", nbMax:"1"},
    attributes:[{origin:"customerCode", target:"code"}]
  },
  {
    origin:{id:"bookOrder", name:"bookOrder", nbMin:"0", nbMax:"*"},
    target:{id:"employee", name:"employee", nbMin:"0", nbMax:"1"},
    attributes:[{origin:"employeeCode", target:"code"}]
  },
  {
    origin:{id:"shop", name:"shop", nbMin:"0", nbMax:"*"},
    target:{id:"employee", name:"employee", nbMin:"0", nbMax:"1"},
    attributes:[{origin:"executive", target:"code"}]
  },
  {
    origin:{id:"shop", name:"shop", nbMin:"0", nbMax:"*"},
    target:{id:"country", name:"country", nbMin:"0", nbMax:"1"},
    attributes:[{origin:"countryCode", target:"code"}]
  },
  {
    origin:{id:"bookOrderItem", name:"bookOrderItem", nbMin:"0", nbMax:"*"},
    target:{id:"book", name:"book", nbMin:"0", nbMax:"1"},
    attributes:[{origin:"bookId", target:"id"}]
  },
  {
    origin:{id:"bookOrderItem", name:"bookOrderItem", nbMin:"0", nbMax:"*"},
    target:{id:"bookOrder", name:"bookOrder", nbMin:"0", nbMax:"1"},
    attributes:[{origin:"bookOrderId", target:"id"}]
  },
  {
    origin:{id:"employee", name:"employee", nbMin:"0", nbMax:"*"},
    target:{id:"shop", name:"shop", nbMin:"0", nbMax:"1"},
    attributes:[{origin:"shopCode", target:"code"}]
  },
  {
    origin:{id:"employee", name:"employee", nbMin:"0", nbMax:"*"},
    target:{id:"badge", name:"badge", nbMin:"0", nbMax:"1"},
    attributes:[{origin:"badgeNumber", target:"badgeNumber"}]
  },
  {
    origin:{id:"synopsis", name:"synopsis", nbMin:"0", nbMax:"*"},
    target:{id:"book", name:"book", nbMin:"0", nbMax:"1"},
    attributes:[{origin:"bookId", target:"id"}]
  },
  {
    origin:{id:"review", name:"review", nbMin:"0", nbMax:"*"},
    target:{id:"customer", name:"customer", nbMin:"0", nbMax:"1"},
    attributes:[{origin:"customerCode", target:"code"}]
  },
  {
    origin:{id:"review", name:"review", nbMin:"0", nbMax:"*"},
    target:{id:"book", name:"book", nbMin:"0", nbMax:"1"},
    attributes:[{origin:"bookId", target:"id"}]
  }
];

module.exports=links;