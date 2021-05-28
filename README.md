## 궁금붕어  
<div align="center">
<img width="123" alt="붕어 " src="https://user-images.githubusercontent.com/63579113/119976466-162d7200-bff2-11eb-88b7-ba5b96b1dfb4.png">
</div>

 ## Service Description 
 오늘 뭐했붕어? 삼...이...일...땡!!!오늘 있었던 일 3초 안에 대답 못하면 기억 조작!

 ## API WIKI 
- [API 문서](https://github.com/Goldfish-Server/3sec-Goldfish/wiki)  
<img width="561" alt="api" src="https://user-images.githubusercontent.com/63579113/119239030-2c19dd80-bb81-11eb-8752-09097263c483.png">


## ERD
![image](https://user-images.githubusercontent.com/61377122/119241649-fbdb3a80-bb92-11eb-98af-59b4bf2bec52.png)


## MODEL
https://github.com/Goldfish-Server/3sec-Goldfish/tree/main/goldfish/models

group
```javascript
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
        tableName: 'GROUP_TB',
        timestamps: false,

    });
};
```

post
```javascript
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
        tableName: 'POST_TB',
        timestamps: true,

    });
};

```
question
```javascript

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
```
choice
```javascript
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
```
