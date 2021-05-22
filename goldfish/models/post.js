module.exports = (sequelize, DataTypes) => {
    return sequelize.define('POST', {
        PostIdx: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        postText: {
            type: DataTypes.TEXT(),
            unique: false,
            allowNull: true,
            defaultValue: ''
        },
        likeCount: {
            type: DataTypes.INTEGER,
            unique: false,
            allowNull: true,
            defaultValue: 0
        }
        
    }, {
        //모델의 옵션들을 지정하는곳    
        tableName: 'POST_TB',
        timestamps: true,

    });
};