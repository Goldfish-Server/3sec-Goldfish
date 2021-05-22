module.exports = (sequelize, DataTypes) => {
    return sequelize.define('CHOICE', {
        ChoiceIdx: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        choiceText: {
            type: DataTypes.STRING(20),
            unique: false,
            allowNull: true,
            defaultValue: ''
        },
        
    }, {
        //모델의 옵션들을 지정하는곳    
        tableName: 'CHOICE_TB',
        timestamps: false,

    });
};