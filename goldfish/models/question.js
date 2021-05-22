module.exports = (sequelize, DataTypes) => {
    return sequelize.define('QUESTION', {
        QuestionIdx: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        questionText: {
            type: DataTypes.TEXT(),
            unique: false,
            allowNull: true,
            defaultValue: ''
        },
        questionType: {
            type: DataTypes.STRING(20),
            unique: false,
            allowNull: true,
            defaultValue: ''
        }
        
    }, {
        //모델의 옵션들을 지정하는곳    
        tableName: 'QUESTION_TB',
        timestamps: false,

    });
};