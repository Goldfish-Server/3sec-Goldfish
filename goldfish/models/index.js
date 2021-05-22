const Sequelize = require('sequelize');
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const db = {};

let sequelize;
if (config.use_env_variable) {
    sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
    sequelize = new Sequelize(config.database, config.username, config.password, config);
}

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.Group = require('./group')(sequelize, Sequelize);
db.Post = require('./post')(sequelize, Sequelize);
db.Question = require('./question')(sequelize, Sequelize);
db.Choice = require('./choice')(sequelize, Sequelize);


/* 1: N Group:Post */
db.Group.hasMany(db.Post,{onDelete:'cascade',foreignKey: 'GroupIdx',sourceKey:'GroupIdx'}) 
db.Post.belongsTo(db.Group,{foreignKey: 'GroupIdx',targetKey:'GroupIdx'});

/* 1: N Question:Choice */
db.Question.hasMany(db.Choice,{onDelete:'cascade',foreignKey: 'QuestionIdx',sourceKey:'QuestionIdx'}) 
db.Choice.belongsTo(db.Question,{foreignKey: 'QuestionIdx',targetKey:'QuestionIdx'});

module.exports = db;
