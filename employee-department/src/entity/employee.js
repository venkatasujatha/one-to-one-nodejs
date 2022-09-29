const EntitySchema = require("typeorm").EntitySchema;


const emp = new EntitySchema({
  name: 'T1',
  columns: {
    id: {
      primary: true,
      type: 'int',
      generated: true,
    },
    name: {
      type: 'varchar',
    },
  },
  
});
module.exports = { emp };
