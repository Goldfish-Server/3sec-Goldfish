module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Group', {
        GroupIdx: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        groupName: {
            type: DataTypes.STRING(50),
            unique: false,
            allowNull: true,
            defaultValue: ''
        }
        
    }, {
        //모델의 옵션들을 지정하는곳    
        tableName: 'GROUP_TB',
        timestamps: false,

    });
};