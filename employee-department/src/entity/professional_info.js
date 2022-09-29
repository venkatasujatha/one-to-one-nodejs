const EntitySchema = require('typeorm').EntitySchema;
const {emp } = require('../entity/employee');
const professional_info = new EntitySchema({
    name: 'T2',
    columns:{
        pid: {
            primary: true,
            type:'int',
            generated: true,
            },
        designation: {
            type :'varchar',
        },
        total_experience: {
            type :'int',
        },
        department: {
            type :'varchar',
        },
        manager_name: {
            type :'varchar',
        },
    },
        relations: {
            T1: {
              target: 'T1',
              type:'one-to-one',
              joinColumn: true,
              joinTable: true,
              inverseSide: 'T1',
              cascade: true,
              eager: true,
              //nullable: false,
              referenceColumn: true,
            },
          },

    
})
module.exports ={professional_info};