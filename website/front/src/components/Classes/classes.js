class Bot {
    constructor() {
     this.new = {
         discordId: '',
         botName: '',
         profileImage: '',
         tokens: {
             token: '',
             refreshToken: ''
         },
         createdBy: '',
         updatedAt: '',
         createdAt: '',
        //  commands: []
     }
    
}
create = ({ discordId, botName, imageUrl, tokens, commands,  }) => {

}
}

class User {
    constructor() {
        this.new = {
         discordId: '',
         displayName: '',
         profileImage: '',
         tokens: {
             token: '',
             refreshToken: ''
         },
         hasBots: [],
         updatedAt: '',
         createdAt: '',
        //  commands: []
     }
    }
}

export {Bot,User}